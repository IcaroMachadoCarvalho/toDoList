export class BtnColorComponent {
  private template: string = `
        <div class="colorPicker">
            <h2>Escolha a cor do bloco</h3>
            <input type="color" class="colorPicker__display">
            <span data-color="color"></span>
        </div>`;

  addListenerColorContent(tab: HTMLElement, divSection: HTMLElement): void {
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
      // console.log(colorPicker.value);
      colorSpan.textContent = colorPicker.value;
      btnColor.style.backgroundColor = colorPicker.value;
      btnColor.setAttribute("data-color-task", colorPicker.value);
    });
    tab.appendChild(divSection);
  }

  static getColor(): string {
    const chosenColor = document.querySelector("#colorTask");
    if (chosenColor instanceof HTMLElement) {
      const color = chosenColor.getAttribute("data-color-task");
      if (color) {
        return color;
      }
    }
    return "#ff8000";
  }
  colorSectionContent(): string {
    return this.template;
  }
}