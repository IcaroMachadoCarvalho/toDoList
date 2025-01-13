import { Categoria } from "./Categorias"
export interface Tarefa {
    id: number;
    color:string;
    category: Categoria; // Usando o enum para garantir que as categorias sejam válidas
    title: string;
    task: TarefaItem[];
    date: string;
}

export interface TarefaItem {
    item: string;  // O título da tarefa
    status: boolean;  // O status da tarefa (true ou false)
}
