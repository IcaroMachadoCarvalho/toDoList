const tab: HTMLElement | null = document.querySelector(".footer");

export function showContent(typeContent:string): void{
    let content:string;
    if(!tab){
        throw new Error("O elemento footer não foi renderizado tente recarregar a página");
    }

    let divContainerContent: HTMLElement = document.createElement("div");
    divContainerContent.classList.add("content__tab");
    hideContent(); // não duplica pois apaga o anterior

    if(typeContent === "filter"){
        divContainerContent.innerHTML = `
        <h1> hello 1</h1>`;
        tab.appendChild(divContainerContent);
    }
    
    if(typeContent === "create"){
        divContainerContent.innerHTML = `
        <h1> hello 2</h1>`;
        tab.appendChild(divContainerContent);
    }
    
    if(typeContent === "color"){
        divContainerContent.innerHTML = `
        <div class="colorPicker">
            <h2>Escolha a cor do bloco</h3>
            <input type="color" class="colorPicker__display">
            <span data-color="color"></span>
        </div>`;

        const colorPicker = divContainerContent.firstElementChild?.querySelector("input[type=color]") as HTMLInputElement;
        const colorSpan = colorPicker.nextSibling as HTMLSpanElement;
        const btnColor = document.querySelector("#colorTask") as HTMLElement;
        if(!colorPicker && !colorSpan && !document.querySelector("#colorTask")){
            throw new Error("O elemento colorPicker__display, colorSpan e btnColor não foi renderizado tente recarregar a página")
        }

        colorPicker.addEventListener("change", () => {
                console.log(colorPicker.value);
                colorSpan.textContent = colorPicker.value;
                btnColor.style.backgroundColor = colorPicker.value;
            });
        tab.appendChild(divContainerContent);
    }
}

export function hideContent():void{
    if(!tab){
        throw new Error("O elemento footer não foi renderizado tente recarregar a página");
    }
    let targetContent = tab.querySelectorAll(".content__tab");
    if (targetContent) {
        targetContent.forEach((content) => content.remove());  
    } 
    else {
        console.error("Não há conteúdo para remover.");
    }
}

