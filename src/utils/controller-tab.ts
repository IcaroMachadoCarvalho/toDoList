import { hideContent } from "./manage-content-tab";

const tab: HTMLElement | null = document.querySelector(".footer");
const header: HTMLElement | null = document.querySelector(".header");
let isOpen: boolean;

export function toggleTab(): void {
  if (!tab) {
    throw new Error(
      "O elemento footer não foi renderizado tente recarregar a página"
    );
  }
  const viewPort: number = window.innerWidth;
  let isMobile: boolean;
  isMobile = viewPort <= 767 ? true : false;
  isOpen = tab.classList.contains("open") ? true : false;

  if (isOpen && isMobile) {
    alternateClassOpen("remove");
    tab.style.height = "92px";
  } else if (isOpen === false && isMobile) {
    alternateClassOpen("add");
    tab.style.height = "400px";
  } else if (isOpen && isMobile === false) {
    alternateClassOpen("remove");
    tab.style.width = "100%";
    if (header) {
      header.style.width = "100%";
    }
  } else if (isOpen === false && isMobile === false) {
    alternateClassOpen("add");
    tab.style.width = "600px";
    if (header) {
      header.style.width = "600px";
    }
  }
}

function alternateClassOpen(option: string): void {
  if (option === "remove") {
    tab?.classList.remove("open");
    hideContent();
    return;
  }
  tab?.classList.add("open");
}

export function closeTab(): void {
  hideContent();
  alternateClassOpen("add");
  toggleTab();
}
