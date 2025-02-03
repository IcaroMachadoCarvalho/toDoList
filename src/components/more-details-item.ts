import { Tarefa, TarefaItem } from "../types/Tarefa";
import { Categoria, categoriaSelected } from "../types/Categorias";

const modal = document.querySelector(".showMore");
export const moreDetailsItem = (): void => {
  window.onclick = (event) => {
    if (event.target === document.body) {
      closeModal();
    }
  };
};

export const openModal = (id:number): void => {
  modal?.classList.add("open");
  document.body.classList.add("open");
  addStructureModal(id);
};
export const closeModal = (): void => {
  removeStructureModal();
  modal?.removeEventListener("submit",handleSubmit);
  modal?.classList.remove("open");
  document.body.classList.remove("open");
};

function handleSubmit(e: Event):void{

}

const addStructureModal = (idBlock: number): void => {
  // Lê o localStorage e manda o objeto para o modal
    const arrayBlocks = localStorage.getItem("tasks");
    let block: Tarefa[];
    if (arrayBlocks && arrayBlocks.length > 0) {
      block = JSON.parse(arrayBlocks);
      block = block.filter((t: Tarefa) => {
        return t.id === idBlock;
      });
      const structure = `
            <div class="showMore__close">
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
                            <input type="text" class="show-more__task-input-field ${task.status ? "checked" : ""}" value="${task.item}" data-index="${index}">
                            <input type="checkbox" class="show-more__task-input-checkbox" ${task.status ? "checked" : ""}>
                        </div>
                    `).join("")}
                  </div> 
                  <button type="submit" class="show-more__save-button">Salvar</button>
              </form>
            </div>`;
    
      const item = document.createElement("div");
      item.classList.add("showMore__item");
      item.innerHTML = structure;
      item.querySelector(".showMore__close")?.addEventListener("click", closeModal);
      modal?.appendChild(item);
      modal?.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(block[0]);
        console.log(block);
        checkForChanges(block[0]);
        closeModal();
      });
    }
    
};
// Remover a estrutura interna do modal
const removeStructureModal = (): void => {
  if (modal?.firstChild) {
    modal?.firstChild.remove();
  }
};

const checkForChanges = (item: Tarefa): void => {
  //! 
  // newTaskTarefa e savedTaskItem
  const select = document.querySelector(".show-more__select") as HTMLSelectElement;
  const inputs = document.querySelectorAll(".show-more__task-input-field") as NodeListOf<HTMLInputElement>;
  const inputsCheck = document.querySelectorAll(".show-more__task-input-checkbox") as NodeListOf<HTMLInputElement>;
  
  if(!select){
    return;
  }
  
  const newCategory = select.value as Categoria;
  console.log(newCategory);
  
  
  // Mapeia os valores de inputs e checkboxes
  const newTarefaItem = Array.from(inputs).map((input, index) => ({
    item: input.value,
    status: inputsCheck[index].checked
  }));

  console.log("newTarefaItem --",newTarefaItem);
  console.log("Item --",item);
  

  // Validações: 
  // 1. Categoria válida
  // 2. Inputs não vazios
  // 3. Comparação com o item salvo
  if (Object.values(Categoria).includes(newCategory) 
      && newTarefaItem.every(item => item.item.trim() !== "") // Garantir que os inputs não sejam vazios
      /*&& !compareValues(item, newTarefaItem)*/) {
    saveChanges(item, newCategory, newTarefaItem); 
    console.log("Changes saved");
  } else {
    console.log("No changes saved");
  }
};

// Função para salvar as alterações
const saveChanges = (item: Tarefa, newCategory: Categoria, newTarefaItem: TarefaItem[]): void => {
  // Pegando os campos que deseja atualizar do bloco de tarefa
  const { category, task, ...rest } = item;
  
  const updatedItem = {
    category: newCategory,  // Atualizando somente os campos necessários
    task: newTarefaItem,    //  Mantendo as outras propriedades do item original
    ...rest                 
  };
  console.log(updatedItem);
  
  const savedTasks: Tarefa[] = JSON.parse(
    localStorage.getItem("tasks") || "[]"
  );
  if (savedTasks) {
    const index = savedTasks.findIndex(savedItem => savedItem.id === item.id);
    if (index !== -1) {
      // Cria uma nova array com o item atualizado
      const updatedTasks = [
        ...savedTasks.slice(0, index), // Itens antes do item a ser alterado
        updatedItem,                  // O item atualizado
        ...savedTasks.slice(index + 1) // Itens após o item a ser alterado
      ];
      
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
    console.log(index);
  }
};

// Função para comparar os valores
// const compareValues = (savedItem: Tarefa, newTarefaItem: TarefaItem[]): boolean => {
//   let result = newTarefaItem.every((newItem, index) => {
//     const savedTaskItem = savedItem.task[index];
//     // ! aqui deu diff
//     console.log("here");
//     console.log("SavedItem",savedItem);
//     console.log("newTarefaItem",newTarefaItem);
//     console.log("index",index);
//     console.log("savedTaskItem",savedTaskItem);
    
//     // Adicionando logs para diagnóstico
//     console.log(`Comparando: ${newItem.item} (status: ${newItem.status}) com ${savedTaskItem.item} (status: ${savedTaskItem.status})`);
    
//     // Comparar item e status (certificando-se que são do mesmo tipo)
//     const isItemEqual = newItem.item === savedTaskItem.item;
//     const isStatusEqual = newItem.status === savedTaskItem.status;
    
//     console.log(`Item igual: ${isItemEqual}, Status igual: ${isStatusEqual}`);

//     // Verificando se ambos são iguais (se qualquer um não for igual, a comparação falha)
//     return isItemEqual && isStatusEqual;
//   });

//   console.log("Resultado da comparação:", result);
//   return result;
// };