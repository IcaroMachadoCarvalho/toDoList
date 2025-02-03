import { Tarefa, TarefaItem } from "../types/Tarefa";
import { Categoria, categoriaSelected } from "../types/Categorias";
import { ServiceLocaltorage } from "../utils/service-localstorage";

export class MoreDetailsComponent {
  serviceStorage = new ServiceLocaltorage();
  modal: HTMLElement;

  constructor() {
    this.modal = document.querySelector(".showMore") as HTMLElement;
  }

  moreDetailsItem() {
    window.onclick = (event) => {
      if (event.target === document.body) {
        this.closeModal();
      }
    };
  }

  openModal(id: number) {
    this.modal.classList.add("open");
    document.body.classList.add("open");
    this.addStructureModal(id);
  }

  closeModal() {
    this.removeStructureModal();
    this.modal?.removeEventListener("submit", this.handleSubmit);
    this.modal?.classList.remove("open");
    document.body.classList.remove("open");
  }

  handleSubmit(e: Event): void {}

  // Funções internas
  addStructureModal(idBlock: number) {
    // Lê o localStorage e manda o objeto para o modal
    const arrayBlocks = this.serviceStorage.getItems();
    let block: Tarefa[];
    if (arrayBlocks && arrayBlocks.length > 0) {
      block = JSON.parse(arrayBlocks);
      block = block.filter((t: Tarefa) => {
        return t.id === idBlock;
      });
      console.log("block item antigo", block);
      console.log("block [0]", block[0]);
      
      const structure = `
            <div class="showMore__close" data-index="${block[0].id}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
    
            <div class="showMore__info">
                <h2 class="showMore__title">${block[0].title}</h2>
                <small class="show-more__date">${block[0].date}</small>
            </div>
    
            <div class="show-more__form">
              <form class="show-more__form-content">
                  <label class="show-more__label">Categoria:</label>
                  <select class="show-more__select">
                    ${categoriaSelected(block[0].category).join("")}
                  </select>
            
                  <label class="show-more__label">Tarefas:</label>
                  <div class="show-more__task">
                    ${block[0].task
                      .map(
                        (task, index) => `
                        <div class="show-more__task-input">
                            <input type="text" class="show-more__task-input-field ${
                              task.status ? "checked" : ""
                            }" value="${task.item}">
                            <input type="checkbox" class="show-more__task-input-checkbox" ${
                              task.status ? "checked" : ""
                            }>
                        </div>
                    `
                      )
                      .join("")}
                  </div> 
                  <button type="submit" class="show-more__save-button">Salvar</button>
              </form>
            </div>`;

      const item = document.createElement("div");
      item.classList.add("showMore__item");
      item.innerHTML = structure;
      item.querySelector(".showMore__close")?.addEventListener("click", () => {
        this.closeModal();
      });
      this.modal?.appendChild(item);
      this.modal?.addEventListener("submit", (e) => {
        e.preventDefault();
        // console.log(block[0]);
        // console.log(block);
        this.checkForChanges(block[0]);
        this.closeModal();
      });
    }
  }

  removeStructureModal() {
    if (this.modal?.firstChild) {
      this.modal?.firstChild.remove();
    }
  }

  checkForChanges(item: Tarefa) {
    const select = document.querySelector(
      ".show-more__select"
    ) as HTMLSelectElement;
    const inputs = document.querySelectorAll(
      ".show-more__task-input-field"
    ) as NodeListOf<HTMLInputElement>;
    const inputsCheck = document.querySelectorAll(
      ".show-more__task-input-checkbox"
    ) as NodeListOf<HTMLInputElement>;

    if (!select) {
      return;
    }

    const newCategory = select.value as Categoria;
    // console.log("Categoria selecionada", newCategory); pega

    // Mapeia os valores de inputs e checkboxes
    const newTarefaItem = Array.from(inputs).map((input, index) => ({
      item: input.value,
      status: inputsCheck[index].checked,
    }));

    // console.log("newTarefaItem --", newTarefaItem);
    // console.log("Item --", item);

    // Validações:
    // 1. Categoria válida
    // 2. Inputs não vazios
    // 3. Comparação com o item salvo
    
    console.log(item);
    console.log(newCategory);
    console.log(newTarefaItem);
    if (
      Object.values(Categoria).includes(newCategory) &&
      newTarefaItem.every((item:TarefaItem) => item.item.trim() !== "") && // Garantir que os inputs não sejam vazios
      this.compareTasks(item, newTarefaItem, newCategory)
    ) {
      this.saveChanges(item, newCategory, newTarefaItem);
      
      console.log("Changes saved");
    } else {
      console.log("No changes saved");
    }
  }

  compareTasks(tarefa1: Tarefa, tarefa2: TarefaItem[],newCategory:Categoria): boolean {
  const categoryChanged = tarefa1.category !== newCategory;  // Comparando categoria de tarefa
  const tasksChanged = !this.compareTasksValues(tarefa1.task, tarefa2);

  return categoryChanged || tasksChanged;
}

// Comparação de valores de Tarefas
compareTasksValues(task1: TarefaItem[], task2: TarefaItem[]): boolean {
  if (task1.length !== task2.length) {
    return false;
  }

  // Comparando cada item dentro de task1 e task2
  for (let i = 0; i < task1.length; i++) {
    if (task1[i].item !== task2[i].item || task1[i].status !== task2[i].status) {
      return false;
    }
  }

  return true;
}

  saveChanges(
    item: Tarefa,
    newCategory: Categoria,
    newTarefaItem: TarefaItem[]
  ) {
    const { category, task, ...rest } = item;

    const updatedItem = {
      category: newCategory, // Atualizando somente os campos necessários
      task: newTarefaItem, //  Mantendo as outras propriedades do item original
      ...rest,
    };
    console.log("Item is saveChanges",item.id);
    
    console.log("Item atualizado", updatedItem);

    const savedTasks: Tarefa[] = JSON.parse(
      this.serviceStorage.getItems() || "[]"
    );
    if (savedTasks) {
      const index = savedTasks.findIndex(
        (savedItem) => savedItem.id === Number(document.querySelector(".show__more")?.getAttribute("data-index"))
      );
      
      if (index !== -1) {
        // Cria uma nova array com o item atualizado
        savedTasks[index] = updatedItem;
        this.serviceStorage.setItems(savedTasks);
      }
      console.log(savedTasks);
      console.log(index);
    }
  }
}
