const colorSection:string = `
        <div class="colorPicker">
            <h2>Escolha a cor do bloco</h3>
            <input type="color" class="colorPicker__display">
            <span data-color="color"></span>
        </div>`;

export const colorSectionContent = () :string =>{
    return colorSection;
};

export function addListenerColorContent(tab: HTMLElement, divSection:HTMLElement): void {
    const colorPicker = divSection.firstElementChild?.querySelector(
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
      tab.appendChild(divSection);
}