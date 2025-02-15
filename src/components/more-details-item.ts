import { Tarefa, TarefaItem } from "../types/Tarefa";
import { Categoria, categoriaSelected } from "../types/Categorias";
import { ServiceLocaltorage } from "../utils/service-localstorage";

export class MoreDetailsComponent {
  serviceStorage = new ServiceLocaltorage();
  modal: HTMLElement;
  blockCopy: Tarefa[];

  constructor() {
    this.modal = document.querySelector(".showMore") as HTMLElement;
    this.blockCopy = [];
  }

  moreDetailsItem() {
    window.onclick = null;
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
    this.modal?.classList.remove("open");
    document.body.classList.remove("open");
    this.modal.removeEventListener("submit", this.handleSubmit);
  }

  verifyInputsForm(): boolean {
  // Seleciona o modal ou o formulário específico onde os inputs de texto estão
  const form = this.modal.querySelector("form.show-more__form-content");

  if (!form) {
    console.log("Formulário não encontrado dentro do modal.");
    return false;
  }

  // Seleciona apenas os inputs de texto dentro deste formulário específico
  const inputsTextTaksForm = Array.from(form.querySelectorAll("input[type='text']")) as Array<HTMLInputElement>;

  if (inputsTextTaksForm.length > 0) {
    const allFilled = inputsTextTaksForm.every((input) => {
      const trimmedValue = input.value.trim();


      // Verifica se o valor não é nulo, vazio ou só contém espaços
      return (
        trimmedValue !== ""
      );
    });

    console.log("Todos os campos preenchidos?", allFilled);
    return allFilled;
  } else {
    console.log("Nenhum campo de texto encontrado");
    return false;
  }
}

// Passa a cópia de `block` para evitar alterações no original

  handleSubmit = (e: Event) => {
    e.preventDefault();
    const isFormComplete:boolean = this.verifyInputsForm();
    const messageErrorForm:HTMLElement = document.querySelector(".error__form__submit") as  HTMLElement;
    if (isFormComplete) {
      this.checkForChanges(this.blockCopy[0]); 
      messageErrorForm.textContent = "";
      this.closeModal();
      return;
    }
    messageErrorForm.textContent = "Preencha os campos da tarefa/as e da categoria do bloco";
  };

  // Funções internas
  addStructureModal(idBlock: number) {
    const arrayBlocks: Tarefa[] = JSON.parse(
      this.serviceStorage.getItems() || "[]"
    );

    // Usar 'find' ao invés de 'filter'
    const block: Tarefa | undefined = arrayBlocks.find(
      (t: Tarefa) => t.id === idBlock
    );

    if (!block) {
      console.log("Tarefa não encontrada");
      return; // Sai da função caso a tarefa não seja encontrada
    }

    this.blockCopy = [block]; // Agora você tem um array com a tarefa

    console.log("block item original", this.blockCopy[0]);

    const structure = `
        <div class="showMore__close" data-index="${this.blockCopy[0].id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
        </div>
  
        <div class="showMore__info">
            <h2 class="showMore__title">${this.blockCopy[0].title}</h2>
            <small class="show-more__date">${this.blockCopy[0].date}</small>
        </div>
  
        <div class="show-more__form">
          <form class="show-more__form-content">
              <label class="show-more__label">Categoria:</label>
              <select class="show-more__select">
                ${categoriaSelected(this.blockCopy[0].category).join("")}
              </select>
        
              <label class="show-more__label">Tarefas:</label>
              <div class="show-more__task">
                ${this.blockCopy[0].task
                  .map(
                    (task, index) => `
                      <div class="show-more__task-input">
                          <input type="text" class="show-more__task-input-field 
                          ${task.status ? "checked" : ""}" value="${task.item}">
                          <input type="checkbox" class="show-more__task-input-checkbox" ${
                            task.status ? "checked" : ""
                          }>
                      </div>
                  `
                  )
                  .join("")}
              </div> 
              <span class="error__form__submit"></span>
              <button type="submit" class="show-more__save-button">Salvar</button>
          </form>
        </div>`;

    const item = document.createElement("div");
    item.classList.add("showMore__item");
    item.innerHTML = structure;
    item.querySelector(".showMore__close")?.addEventListener("click", () => {
      this.closeModal();
    });

    // Adiciona evento de ao selecionar checkbox ele risca o texto do input do seu lado
    const inputCheckboxes = item.querySelectorAll("input[type='checkbox']");
    inputCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", (event: Event) => {
        // tem que fazer isso para o ts reconhecer e aceitar o previousElementSibling
        const target = event.target as HTMLInputElement; // Cast para HTMLInputElement

        // Encontrar o campo de texto relacionado ao checkbox
        const taskInputField = target.previousElementSibling as HTMLElement;

        if (taskInputField) {
          // Se o checkbox for marcado, adiciona o risco (line-through)
          if (target.checked) {
            taskInputField.style.textDecoration = "line-through";
          } else {
            // Se o checkbox não for marcado, remove o risco
            taskInputField.style.textDecoration = "none";
          }
        }
      });
    });

    this.modal?.appendChild(item);

    // Envio da tarefa copiada ao evento submit
    this.modal?.addEventListener("submit", this.handleSubmit);
  }

  removeStructureModal() {
    if (this.modal?.firstChild) {
      this.modal?.firstChild.remove();
    }
  }

  checkForChanges(item: Tarefa) {
    console.log("Item antes da verificação de alterações:", item);

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
    // Mapeia os valores de inputs e checkboxes
    const newTarefaItem: TarefaItem[] = Array.from(inputs).map(
      (input, index) => ({
        item: input.value,
        status: inputsCheck[index].checked,
      })
    );

    console.log("Newtarefa", newTarefaItem);

    // Verifica se houve alterações significativas (categoria ou tarefas)
    const categoryChanged = item.category !== newCategory;
    const tasksChanged = !this.compareTasksValues(item.task, newTarefaItem);

    console.log("---Saving:", newCategory);
    console.log("---Saving:", newTarefaItem);
    console.log("---Saving:", item.task);
    // Se houver alterações, chama o método saveChanges
    if (categoryChanged || tasksChanged) {
      console.log("Alterações detectadas. Salvando mudanças...");

      this.saveChanges(item, newCategory, newTarefaItem);
    } else {
      console.log("Nenhuma alteração detectada. Não é necessário salvar.");
    }
  }

  // Comparação de valores das tarefas
  compareTasksValues(task1: TarefaItem[], task2: TarefaItem[]): boolean {
    if (task1.length !== task2.length) {
      return false;
    }

    for (let i = 0; i < task1.length; i++) {
      if (
        task1[i].item !== task2[i].item ||
        task1[i].status !== task2[i].status
      ) {
        console.log("t1:", task1);
        console.log("t2:", task2);

        console.log("item1", task1[i].item, "tasks2", task2[i].item);
        console.log("item1", task1[i].status, "tasks2", task2[i].status);

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
    // Atualizando a tarefa com as novas modificações
    const updatedItem: Tarefa = {
      ...this.blockCopy[0],
      category: newCategory,
      task: newTarefaItem,
    };

    // Obtendo os itens do localStorage
    const savedTasks: Tarefa[] = JSON.parse(
      this.serviceStorage.getItems() || "[]"
    );

    // Encontrando o índice da tarefa no localStorage
    const index = savedTasks.findIndex((savedItem) => savedItem.id === item.id);

    if (index !== -1) {
      // Atualizando a tarefa no localStorage
      savedTasks[index] = updatedItem;
      this.serviceStorage.setItems(savedTasks);
      console.log("---posi:", updatedItem);

      console.log("Tarefa atualizada e salva:", savedTasks[index]);
      console.log("-- index here", index);
    } else {
      console.log("Tarefa não encontrada no localStorage para atualização.");
    }
  }
}
