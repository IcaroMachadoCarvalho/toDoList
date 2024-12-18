const tab: HTMLElement | null = document.querySelector(".footer");

export function showContent(typeContent:string): void{
    let content:string;
    if(!tab){
        throw new Error("O elemento footer não foi renderizado tente recarregar a página");
    }

    let divContainerContent: HTMLElement = document.createElement("div");
    divContainerContent.classList.add("content__tab");
    hideContent(); // não duplica

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
        <h1> hello 3</h1>`;
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
        // targetContent.remove();
    } 
    else {
        console.error("Não há conteúdo para remover.");
    }

}
