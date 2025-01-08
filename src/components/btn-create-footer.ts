import { Tarefa } from "../types/Tarefa";
import { Categoria, categoriaSelect } from "../types/Categorias";
import { createBlock } from "../utils/newBlock";
import { getColor } from "./btn-color-footer";

// Salva a estrutura html da seção
const createSection: string = `
        <div class="createSection">
        <div class="createSection__category">
            <select data-create-category>
            </select>
        </div>
          <div class="createSection__title">
            <input type="text" placeholder="Título do bloco">
            <span data-create-title>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
            </span>
            </div>
            <div class="createSection__task">
                <input type="text" placeholder="Nome da tarefa">
                <span data-create-task>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                </span>
            </div>
            <button class="createSection__button" data-create-button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
            </button>
            <p class="createSection__error" data-create-error></p>
            <p class="createSection__listTitle" data-create-listTitle></p>
            <ul class="createSection__list" data-create-list></ul>
        </div>`;

// Retorna a estrutura quando chamado em outra parte de onde for chamado
export const createSectionContent = (): string => {
  return createSection;
};

export const addCategorySelect = (): void => {
  const selectElement = document.querySelector("[data-create-category]");
  if (selectElement instanceof HTMLSelectElement) {
    let options = categoriaSelect().join(""); // join junta os elementos
    selectElement.innerHTML = options;
  }
};

export const addListenerSectionContent = (tab: HTMLElement): void => {
  const btnTitleElement = tab.querySelector("[data-create-title]");
  const listTitleElement = tab.querySelector("[data-create-listTitle]");

  const btnTaskElement = tab.querySelector("[data-create-task]");
  const btnSaveBlock = tab.querySelector("[data-create-button]");

  const errorMessage = tab.querySelector("[data-create-error]");

  if (btnTitleElement && listTitleElement && errorMessage) {
    btnTitleElement.addEventListener("click", () => {
      // Garantir que o previousElementSibling seja um input
      const titleValue =
        btnTitleElement.previousElementSibling as HTMLInputElement | null;

      if (titleValue && titleValue.value) {
        listTitleElement.textContent = titleValue.value; // Usando textContent para definir o texto
        titleValue.value = "";
        if (errorMessage.textContent !== "") {
          errorMessage.textContent = "";
        }
      } else {
        errorMessage.innerHTML = "O título deve ser preenchido";
      }
    });
  }

  // Adicionando um listener para o botão de tasks, se necessário
  if (btnTaskElement && errorMessage) {
    btnTaskElement.addEventListener("click", () => {
      let taskValue =
        btnTaskElement.previousElementSibling as HTMLInputElement | null;

      if (
        taskValue &&
        taskValue.value !== "" &&
        !verifyNewTask(taskValue.value)
      ) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <span>${taskValue.value}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        `;

        const deleteIcon = listItem.querySelector("svg");
        if (deleteIcon) {
          deleteIcon.addEventListener("click", () => deleteTask(listItem));
        }

        const list = tab.querySelector("[data-create-list]");
        if (list) {
          list.appendChild(listItem);
        }
        taskValue.value = "";
        errorMessage.innerHTML = "";
      } else {
        errorMessage.innerHTML = "A tarefa deve ser preenchida";
      }
    });
  }

  if (btnSaveBlock) {
    btnSaveBlock.addEventListener("click", () => {
      // console.log(saveNewTask(tab));
      saveNewTask(tab);
    });
  }
};

// Funções internas
function deleteTask(item: HTMLElement): void {
  if (item) {
    item.remove();
  }
}

function verifyNewTask(value: string): boolean {
  const listTask: HTMLElement | null =
    document.querySelector("[data-create-list]");
  if (listTask && value) {
    const tasks = Array.from(listTask.querySelectorAll("li"));
    return tasks.some(
      (task) => task.textContent?.trim().toLowerCase() === value
    );
  }
  return false;
}

// Recebe valores dos inputs do createSection, pega o tamanho da array com os valores do localStorage e retorna
// moldado
function formatTask(
  category: Categoria,
  title: string,
  tasks: string[]
): Tarefa {
  const tasksJson = localStorage.getItem("tasks");
  const tasksArray: Tarefa[] = tasksJson ? JSON.parse(tasksJson) : [];

  if (!tasksArray) {
    throw new Error("No tasks found");
  }

  const id = tasksArray.length + 1;
  const colorTask = getColor();

  const block: Tarefa = {
    id: id,
    color: colorTask,
    category: category,
    title: title,
    task: tasks,
    date: new Date().toLocaleDateString("pt-BR"),
  };
  return block;
}

// Salva as tarefas preenchidas no footerBtn no localStorage
function saveNewTask(t: HTMLElement): void {
  // dessa forma tem que certeza que o elemento estará lá
  const selectGategory: HTMLSelectElement = t.querySelector(
    "[data-create-category]"
  ) as HTMLSelectElement;

  let categoria: Categoria;

  // nesse caso não tem certza
  const titleBlock: HTMLElement | null = t.querySelector(
    "[data-create-listTitle]"
  );
  const tasks: HTMLElement[] = Array.from(
    t.querySelectorAll("[data-create-list] li span")
  );
  const errorMessage: HTMLElement | null = t.querySelector(
    "[data-create-error]"
  );

  if (errorMessage) {
    if (
      selectGategory instanceof HTMLSelectElement &&
      selectGategory.value === ""
    ) {
      errorMessage.innerHTML = "Nenhuma categoria selecionada";
      return;
    }

    if (titleBlock instanceof HTMLElement && titleBlock.textContent === "") {
      errorMessage.innerHTML = "Não tem título para salvar";
      return;
    }

    if (tasks.length <= 0) {
      errorMessage.innerHTML = "Não tem itens para salvar";
      return;
    }
  }

  categoria = selectGategory.value as Categoria;

  const tasksText = tasks
    .map((task) => task.textContent?.trim() ?? "") // Se for undefined, transforma em uma string vazia
    .filter(Boolean); // Remove qualquer valor "falsy", como uma string vazia

  if (titleBlock instanceof HTMLElement && titleBlock.textContent?.trim()) {
    if (selectGategory instanceof HTMLSelectElement) {
      let categoria: Categoria = selectGategory.value as Categoria;
      const savedTasks: Tarefa[] = JSON.parse(
        localStorage.getItem("tasks") || "[]"
      );
      // Salva no localStorage
      if (savedTasks) {
        savedTasks.push(
          formatTask(categoria, titleBlock.textContent.trim(), tasksText)
        );
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
      }
      // Chama a função para criar bloco e enviar as informações necessárias
      const id:number = savedTasks.length;
      const color:string = getColor();
      createBlock(id,titleBlock.textContent.trim(), categoria,color);
    }
  }

  if (titleBlock) {
    titleBlock.textContent = "";
  }

  // Limpa as taks listadas na seção
  const ul = t.querySelector("[data-create-list]");

  if (ul instanceof HTMLElement) {
    // Remover todos os filhos da create-list
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
}