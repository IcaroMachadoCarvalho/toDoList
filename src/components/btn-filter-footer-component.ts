import { Categoria, categoriaSelect } from "../types/Categorias";
import { Tarefa } from "../types/Tarefa";
import { createBlock } from "../utils/newBlock";
import { ServiceLocaltorage } from "../utils/service-localstorage";

export class BtnFilterComponent {
  template: string = `
        <div class="filter__search">
            <label>Selecione a categoria</label>
            <select>
            </select>
            <label>Data</label>
            <input type="date">
            <button class='reset'>Reiniciar</button>
        </div>`;
  protected categorySelected: string = "";
  protected dateSelected: string = "";
  serviceStorage = new ServiceLocaltorage();

  getFilterSectionContent(): string {
    return this.template;
  }
  addListenerFilterContent(tab: HTMLElement) {
    // Adiciona evento que ao usuário selecionar uma das categorias ativa a pesquisa
    tab
      .querySelector(".filter__search select")
      ?.addEventListener("change", (e) => this.searchResults(e));
    // Adciona evento que ao usuário terminar de preencher o input vai ativar a pesquisa
    tab
      .querySelector(".filter__search input[type='date']")
      ?.addEventListener("blur", (e) => this.searchResults(e));
    tab
      .querySelector(".filter__search button")
      ?.addEventListener("click", () => location.reload());

    
  }

  addCategorySelect() {
    const selectFilterInput = document.querySelector(".filter__search select");
    if (selectFilterInput instanceof HTMLSelectElement) {
      selectFilterInput.innerHTML = categoriaSelect().join("");
    }
  }

  searchResults(e: Event) {
    // Fazer verificações no input date caso não tive valor válido

    const select = document.querySelector(
      ".filter__search select"
    ) as HTMLSelectElement | null;
    const input = document.querySelector(
      ".filter__search input[type='date']"
    ) as HTMLInputElement | null;

    if (select) {
      this.categorySelected = select.value;
      console.log("Categoria selecionada:", this.categorySelected);
    }

    if (input) {
      // Versão antiga js
      this.dateSelected = input.value.replace("-", "/").replace("-", "/");
      //   string
      console.log("Data selecionada:", this.dateSelected);
    }

    if (
      this.categorySelected ||
      (this.dateSelected.length > 0 && this.dateSelected !== "")
    ) {
      const tasksServiceArray = JSON.parse(
        this.serviceStorage.getItems() || "[]"
      );
      const resultFilterByArray = tasksServiceArray.filter((el: Tarefa) => {
        return (
          el.date === this.dateSelected || el.category === this.categorySelected
        );
      });
      //   console.log(resultFilterByArray);
      const blockSectionElement = document.querySelector(".blocks");
      if (blockSectionElement) {
        blockSectionElement.innerHTML = "";
        if(resultFilterByArray.length <= 0){
          blockSectionElement.innerHTML = "Nenhum bloco corresponde a pesquisa";
          return;
        }
        resultFilterByArray.map((task: Tarefa) =>
          createBlock(task.id, task.title, task.category, task.color)
        );
        console.log(resultFilterByArray);
      }
    }
  }

  // tenho que chamar o service  e filtrar
  // Preciso que ao terminar a pesquisa renderize o resultado
  // Para voltar
  // Limpar pesquisa caso queira voltar ao normal
}
