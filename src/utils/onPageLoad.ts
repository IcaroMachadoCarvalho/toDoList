import { Tarefa } from "../types/Tarefa";
import { newBlockStructure } from "./newBlock";

export const addLoadEventListener = (): void => {
    window.addEventListener("load", onPageLoad);
}

export const onPageLoad = (): void => {
    const blockData = localStorage.getItem("tasks");
    if (blockData) {
        const arrayBlocks: Tarefa[] = JSON.parse(blockData);
        renderBlocks(arrayBlocks);
    }
};

function renderBlocks(arrayBlocks: Tarefa[]):void {
    const blockList: HTMLDivElement = document.querySelector(".blocks")!;
    arrayBlocks.forEach((block) => {
        const blockElement = document.createElement("div");
        blockElement.classList.add("blocks__item");
        blockElement.innerHTML = newBlockStructure(block.id, block.title, block.category);
        blockElement.style.backgroundColor = block.color;
        console.log(block);
        blockList.appendChild(blockElement);
    });
}