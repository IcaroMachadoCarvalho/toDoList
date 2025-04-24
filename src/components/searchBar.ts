import { Tarefa } from "../types/Tarefa";
import { createBlock } from "../utils/newBlock";
import { ServiceLocaltorage } from "../utils/service-localstorage";

export class SearchBar {
  inputBar: HTMLInputElement | null;
  serviceStorage = new ServiceLocaltorage();
  blockCopy: Tarefa[] = [];

  constructor() {
    this.inputBar = document.querySelector(".searchBar input");
    this.inputBar?.addEventListener("input", () => this.queryResultsBlocks());
  }

  queryResultsBlocks() {
    const value = this.inputBar?.value.trim();
    const blocksSection = document.querySelector(".blocks");
    this.blockCopy = JSON.parse(this.serviceStorage.getItems() || "[]");

    if (!blocksSection) return;

    // Limpa o container antes de renderizar
    blocksSection.innerHTML = "";

    if (value && value.length > 0) {
      const resultsQuery = this.blockCopy.filter((task) => {
        return task.title.toLowerCase().includes(value);
      });

      resultsQuery.forEach((task) =>
        createBlock(task.id, task.title, task.category, task.color)
      );

      if(resultsQuery.length <= 0){
        blocksSection.innerHTML = "Nenhum bloco encontrdado com esse valor";
      }
    } else {
      //   Renderiza tudo novamente se não houver valor na busca
      this.blockCopy.forEach((task) =>
        createBlock(task.id, task.title, task.category, task.color)
      );
    }
  }
}
