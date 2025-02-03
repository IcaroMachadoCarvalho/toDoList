import { Tarefa } from "../types/Tarefa";
import { newBlockStructure } from "./newBlock";
import { ServiceLocaltorage } from "./service-localstorage";
import { MoreDetailsComponent } from "../components/more-details-item"; // Importando a classe

export class PageLoadComponent {
  serviceStorage = new ServiceLocaltorage();
  moreDetails: MoreDetailsComponent; // Instância da classe MoreDetailsComponent

  constructor() {
    this.moreDetails = new MoreDetailsComponent(); // Criando a instância
  }

  addLoadEventListener() {
    window.addEventListener("load", () => {
      this.onPageLoad();
      this.moreDetails.moreDetailsItem(); // Chama o método da instância
    });
  }

  onPageLoad() {
    const blockData = this.serviceStorage.getItems();
    if (blockData) {
      const arrayBlocks: Tarefa[] = JSON.parse(blockData);
      this.renderBlocks(arrayBlocks);
    }
  }

  renderBlocks(arrayBlocks: Tarefa[]) {
    const blockList: HTMLDivElement = document.querySelector(".blocks")!;
    arrayBlocks.forEach((block) => {
      const blockElement = document.createElement("div");
      blockElement.classList.add("blocks__item");
      blockElement.innerHTML = newBlockStructure(
        block.id,
        block.title,
        block.category
      );
      blockElement.style.backgroundColor = block.color;
      blockElement
        .querySelector(".item__edit")
        ?.addEventListener("click", () => {
          // Abre mostrar mais
          this.moreDetails.openModal(block.id); // Chama o método da instância
        });
      blockList.insertBefore(blockElement, blockList.firstChild);
    });
  }
}
