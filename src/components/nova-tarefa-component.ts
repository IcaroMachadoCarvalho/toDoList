const btnCreate: HTMLElement | null = document.querySelector("#createTask");

if (btnCreate) {
    btnCreate.addEventListener("click", () => {
        console.log("here");
    });
} else {
    console.error('Button with ID #createTask not found');
}
