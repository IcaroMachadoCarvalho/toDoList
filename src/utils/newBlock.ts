import { openModal } from "../components/more-details-item";
import { Tarefa } from "../types/Tarefa";

export const newBlockStructure = (
  id: number,
  title: string,
  category: string
): string => {
  return `
        <p>${title}</p>
        <p class="item__category">${category}</p>
                <div class="item__edit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                    d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"
                    />
                </svg>
                </div>`;
};

export function createBlock(
  id: number,
  titleItem: string,
  categoryItem: string,
  color: string
): void {
  const blockList: HTMLDivElement = document.querySelector(".blocks")!;
  const newBlock: HTMLDivElement = document.createElement("div");
  newBlock.classList.add(`blocks__item`);
  newBlock.setAttribute("data-index-item", `${id}`);
  newBlock.innerHTML = newBlockStructure(id, titleItem, categoryItem);
  newBlock.style.backgroundColor = `${color}`;

  // Adiciona um event listener para abrir o modal pelo editar do bloco
  newBlock.querySelector(".item__edit")?.addEventListener("click", () => {

    // Lê o localStorage e manda o objeto para o modal
    const arrayBlocks = localStorage.getItem("tasks");
    if (arrayBlocks && arrayBlocks.length > 0) {
      let block: Tarefa[] = JSON.parse(arrayBlocks);
      block = block.filter((t: Tarefa) => {
        return t.id === id;
      });
      // Manda o array com objeto para o modal
      openModal(block[0].id);
    }
  });
  blockList.insertBefore(newBlock, blockList.firstChild);
}