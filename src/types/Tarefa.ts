import { Categoria } from "./Categorias"
export interface Tarefa {
    id: number;
    category: Categoria; // Usando o enum para garantir que as categorias sejam válidas
    title: string;
    task: string[];
    date: string;
}
