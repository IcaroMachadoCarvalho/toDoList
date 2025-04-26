import { BtnCreateFooter } from "../components/btn-create-footer";
import { BtnColorComponent } from "../components/btn-color-footer";
import { BtnFilterComponent } from "../components/btn-filter-footer-component";

class BtnFooterComponent {
  // private color!: string;
  private footerElement: HTMLElement;
  private btnFilter: HTMLElement;
  private btnCreate: HTMLElement;
  private btnColor: HTMLElement;

  btnColorComponent;
  btnCreateComponent;
  btnFilterComponent;

  public template: string = `
      <div class="footer__btn">
        <button id="filterTask">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
            />
          </svg>
        </button>
        <button id="createTask">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
            />
          </svg>
        </button>
        <button id="colorTask" data-color-task="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
            />
          </svg>
        </button>
      </div>
  `;

  constructor() {
    // Inicializa o footerElement após o HTML ser injetado
    this.footerElement = document.querySelector(".footer") as HTMLElement;

    // Atribui o HTML do template
    if (this.footerElement) {
      this.footerElement.innerHTML = this.template;
    }

    // Agora, os elementos estão no DOM, então podemos procurar por eles
    this.btnFilter = document.querySelector("#filterTask") as HTMLElement;
    this.btnCreate = document.querySelector("#createTask") as HTMLElement;
    this.btnColor = document.querySelector("#colorTask") as HTMLElement;

    // Adicionando event listeners
    this.addEventListeners();

    window.addEventListener("resize", () => {
      const tab: HTMLElement | null = document.querySelector(".footer");
      const tabOptions: HTMLElement | null =
        document.querySelector(".footer__btn");
      const header = document.querySelector("header");
      if (window.innerWidth >= 768) {
        if (tabOptions) {
          if (tab?.classList.contains("open")) {
            if (header) {
              header.style.width = "600px";
              tab.style.width = "600px";
            }
          }
          tabOptions.style.flexDirection = "column";
        }
      } else {
        if (tabOptions && header && tab) {
          header.style.width = "100%";
          tab.style.width = "100%";
          tabOptions.style.flexDirection = "row";
        }
      }
    });

    this.btnFilterComponent = new BtnFilterComponent();
    this.btnColorComponent = new BtnColorComponent();
    this.btnCreateComponent = new BtnCreateFooter();
  }

  // Adiciona eventos aos botões do componente footer
  private addEventListeners() {
    if (this.btnFilter) {
      this.btnFilter.addEventListener("click", () => {
        this.toggleTab();
        if (document.querySelector(".footer")?.classList.contains("open")) {
          this.showContent("filter");
        }
      });
    }

    if (this.btnCreate) {
      this.btnCreate.addEventListener("click", () => {
        this.toggleTab();
        if (document.querySelector(".footer")?.classList.contains("open")) {
          this.showContent("create");
        }
      });
    }

    if (this.btnColor) {
      this.btnColor.addEventListener("click", () => {
        this.toggleTab();
        if (document.querySelector(".footer")?.classList.contains("open")) {
          this.showContent("color");
        }
      });
    }
  }

  // Mostrar conteúdo
  private showContent(typeContent: string) {
    let content: string;
    if (!this.footerElement) {
      throw new Error(
        "O elemento footer não foi renderizado tente recarregar a página"
      );
    }

    let divContainerContent: HTMLElement = document.createElement("div");
    divContainerContent.classList.add("content__tab");
    this.hideContent(); // não duplica pois apaga o anterior

    if (typeContent === "filter") {
      divContainerContent.innerHTML =
        this.btnFilterComponent.getFilterSectionContent();
      this.footerElement.appendChild(divContainerContent);
      this.btnFilterComponent.addListenerFilterContent(this.footerElement);
      this.btnFilterComponent.addCategorySelect();
    }

    if (typeContent === "create") {
      divContainerContent.innerHTML =
        this.btnCreateComponent.createSectionContent();
      this.footerElement.appendChild(divContainerContent);
      this.btnCreateComponent.addListenerSectionContent(this.footerElement);
      this.btnCreateComponent.addCategorySelect();
    }

    if (typeContent === "color") {
      divContainerContent.innerHTML =
        this.btnColorComponent.colorSectionContent();
      this.btnColorComponent.addListenerColorContent(
        this.footerElement,
        divContainerContent
      );
    }
  }

  // Ocultar conteúdo
  private hideContent() {
    if (!this.footerElement) {
      throw new Error(
        "O elemento footer não foi renderizado tente recarregar a página"
      );
    }
    let targetContent = this.footerElement.querySelectorAll(".content__tab");
    if (targetContent) {
      targetContent.forEach((content) => content.remove());
    } else {
      console.error("Não há conteúdo para remover.");
    }
  }

  // Fazer o footer se adaptar adifrente telas
  private toggleTab(): void {
    const header: HTMLElement | null = document.querySelector(".header");
    const tabOptions: HTMLElement | null =
      document.querySelector(".footer__btn");
    let isOpen: boolean;
    if (!this.footerElement) {
      throw new Error(
        "O elemento footer não foi renderizado tente recarregar a página"
      );
    }
    const viewPort: number = window.innerWidth;
    let isMobile: boolean;
    isMobile = viewPort <= 767 ? true : false;
    isOpen = this.footerElement.classList.contains("open") ? true : false;

    if (isOpen && isMobile) {
      this.alternateClassOpen("remove");
      // this.footerElement.style.height = "92px";
    } else if (!isOpen && isMobile) {
      this.alternateClassOpen("add");
      // this.footerElement.style.height = "450px";
    } else if (isOpen && !isMobile) {
      this.alternateClassOpen("remove");
      this.footerElement.style.width = "100%";
      if (header && tabOptions) {
        tabOptions.style.flexDirection = "column";
        header.style.width = "100%";
      }
    } else if (!isOpen && !isMobile) {
      this.alternateClassOpen("add");
      this.footerElement.style.width = "600px";
      if (header && tabOptions) {
        tabOptions.style.flexDirection = "row";
        header.style.width = "600px";
      }
    }
  }

  // Alterna a classe css open do footer
  private alternateClassOpen(option: string): void {
    if (option === "remove") {
      this.footerElement?.classList.remove("open");
      this.hideContent();
      return;
    }
    this.footerElement?.classList.add("open");
  }

  // Fechar aba
  private closeTab() {
    this.hideContent();
    this.alternateClassOpen("add");
    this.toggleTab();
  }
}

const btnFooterComponent = new BtnFooterComponent();
