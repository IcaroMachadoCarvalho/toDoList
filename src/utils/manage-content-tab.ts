import {addCategorySelect, addListenerSectionContent, createSectionContent} from "../components/btn-create-footer";
import { colorSectionContent, addListenerColorContent } from "../components/btn-color-footer";

const tab: HTMLElement | null = document.querySelector(".footer");

export function showContent(typeContent: string): void {
  let content: string;
  if (!tab) {
    throw new Error(
      "O elemento footer não foi renderizado tente recarregar a página"
    );
  }

  let divContainerContent: HTMLElement = document.createElement("div");
  divContainerContent.classList.add("content__tab");
  hideContent(); // não duplica pois apaga o anterior

  if (typeContent === "filter") {
    divContainerContent.innerHTML = `
        <h1> hello 1</h1>`;
    tab.appendChild(divContainerContent);
  }

  if (typeContent === "create") {
    divContainerContent.innerHTML = createSectionContent();
    tab.appendChild(divContainerContent);
    addListenerSectionContent(tab);
    addCategorySelect();
  }

  if (typeContent === "color") {
    divContainerContent.innerHTML = colorSectionContent();
    addListenerColorContent(tab,divContainerContent);
  }
}

export function hideContent(): void {
  if (!tab) {
    throw new Error(
      "O elemento footer não foi renderizado tente recarregar a página"
    );
  }
  let targetContent = tab.querySelectorAll(".content__tab");
  if (targetContent) {
    targetContent.forEach((content) => content.remove());
  } else {
    console.error("Não há conteúdo para remover.");
  }
}
