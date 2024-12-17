import { toggleTab, closeTab } from "../utils/controller-tab";
import { hideContent, showContent } from "../utils/manage-content-tab";

const btnFilter: HTMLElement | null = document.querySelector("#filterTask");
const btnCreate: HTMLElement | null = document.querySelector("#createTask");
const btnColor: HTMLElement | null = document.querySelector("#colorTask");

if (btnFilter) {
    btnFilter.addEventListener("click", () => {
        // hideContent();
        toggleTab();
        showContent("filter");
    });
} else {
    console.error('Button with ID #filterTask not found');
}

if (btnCreate) {
    btnCreate.addEventListener("click", () => {
        // hideContent();
        toggleTab();
        showContent("create");
    });
} else {
    console.error('Button with ID #createTask not found');
}

if (btnColor) {
    btnColor.addEventListener("click", () => {
        // hideContent();
        toggleTab();
        showContent("color");
    });
} else {
    console.error('Button with ID #colorTask not found');
}

window.addEventListener("resize", () => {
    // hideContent();
    closeTab();

    if (window.innerWidth >= 768) {
        let tab: HTMLElement | null = document.querySelector(".footer");
        if (tab !== null) {
            tab.style.width = "100%";
            tab.style.height = "100%";
        }
    }
});
