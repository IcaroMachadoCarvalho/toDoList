import { Tarefa } from "./Tarefa";

export class User{
    protected nome: String;
    protected tarefas: Tarefa[];

    constructor(nome:string){
        this.nome = nome;
        this.tarefas = [];
    }
}