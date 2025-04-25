import { Tarefa } from "../types/Tarefa";

export class ServiceLocaltorage {
  tasks: string | null = "";

  getItems(): string | null {
    this.tasks = localStorage.getItem("tasks");
    if (this.tasks === null) {
      return "[]";
    }
    return this.tasks;
  }
  setItems(savedTasks: Tarefa[]) {
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
  }
  deleteItem(idItem:number){
    const updatedBlocks = JSON.parse(this.getItems() || "[]").filter((item:Tarefa) =>{
      return item.id !== idItem;
    });
    this.setItems(updatedBlocks);
    console.log(updatedBlocks);
  }
}
