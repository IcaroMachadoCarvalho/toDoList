import { toggleTab, closeTab } from "../utils/controller-tab";
import { hideContent, showContent } from "../utils/manage-content-tab";

const btnFilter: HTMLElement | null = document.querySelector("#filterTask");
const btnCreate: HTMLElement | null = document.querySelector("#createTask");
const btnColor: HTMLElement | null = document.querySelector("#colorTask");

if (btnFilter) {
  btnFilter.addEventListener("click", () => {
    toggleTab();
    if (document.querySelector(".footer")?.classList.contains("open")) {
      showContent("filter");
    }
  });
} else {
  console.error("Button with ID #filterTask not found");
}

if (btnCreate) {
  btnCreate.addEventListener("click", () => {
    toggleTab();
    // cria somente quando está aberto
    if (document.querySelector(".footer")?.classList.contains("open")) {
      showContent("create");
    }
  });
} else {
  console.error("Button with ID #createTask not found");
}

if (btnColor) {
  btnColor.addEventListener("click", () => {
    toggleTab();
    if (document.querySelector(".footer")?.classList.contains("open")) {
      showContent("color");
    }
  });
} else {
  console.error("Button with ID #colorTask not found");
}

window.addEventListener("resize", () => {
  closeTab();

  let tab: HTMLElement | null = document.querySelector(".footer");
  let tabOptions: HTMLElement | null = document.querySelector(".footer__btn");
  if (window.innerWidth >= 768) {
    if (tab !== null) {
      tab.style.width = "100%";
      tab.style.height = "100%";
    }
  }else{
    if(tabOptions){
      tabOptions.style.flexDirection = "row";
    }
  }
});
