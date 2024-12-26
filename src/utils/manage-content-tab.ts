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
    divContainerContent.innerHTML = `
        <div class="createSection">
          <div class="createSection__title">
            <input type="text" placeholder="Título do bloco">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
            </span>
            </div>
            <div class="createSection__task">
                <input type="text" placeholder="Nome da tarefa">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                </span>
            </div>
            <button class="createSection__button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
            </button>
            <p class="createSection__error" data-create-error></p>
            <p class="createSection__listTitle" data-create-listTitle>Coisas para fazer</p>
            <ul class="createSection__list" data-create-list>
              <li>
                <span>Task1</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
              </li>
            </ul>
        </div>`;
    tab.appendChild(divContainerContent);
  }

  if (typeContent === "color") {
    divContainerContent.innerHTML = `
        <div class="colorPicker">
            <h2>Escolha a cor do bloco</h3>
            <input type="color" class="colorPicker__display">
            <span data-color="color"></span>
        </div>`;

    const colorPicker = divContainerContent.firstElementChild?.querySelector(
      "input[type=color]"
    ) as HTMLInputElement;
    const colorSpan = colorPicker.nextSibling as HTMLSpanElement;
    const btnColor = document.querySelector("#colorTask") as HTMLElement;
    if (!colorPicker && !colorSpan && !document.querySelector("#colorTask")) {
      throw new Error(
        "O elemento colorPicker__display, colorSpan e btnColor não foi renderizado tente recarregar a página"
      );
    }

    colorPicker.addEventListener("change", () => {
      console.log(colorPicker.value);
      colorSpan.textContent = colorPicker.value;
      btnColor.style.backgroundColor = colorPicker.value;
    });
    tab.appendChild(divContainerContent);
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
