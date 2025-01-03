export enum Categoria {
    Pessoal = "Pessoal",
    Trabalho = "Trabalho",
    Estudos = "Estudos",
    Casa = "Casa",
    Saúde = "Saúde",
    Financeiro = "Financeiro",
    Social = "Social",
    Projetos = "Projetos",
    Compras = "Compras",
    Manutencao = "Manutenção",
    Urgente = "Urgente",
    Eventos = "Eventos",
    Viagens = "Viagens",
    Autocuidado = "Autocuidado",
    ObjetivosLongoPrazo = "Objetivos de Longo Prazo",
    Networking = "Networking",
    Inspiracao = "Inspiração",
    Esportes = "Esportes",
    Cultura = "Cultura",
    Recados = "Recados"
}

export const categoriaSelect = (): string[] => {
    return Object.values(Categoria).map(categoria => {
        return `<option value="${categoria}">${categoria}</option>`;
    });
}