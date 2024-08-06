// Definindo um objeto para representar uma atividade do Agrinho
let atividadeAgrinho = {
    titulo: "Plantio de Árvores",
    descricao: "Vamos plantar árvores para ajudar o meio ambiente.",
    data: "10 de agosto de 2024",
    local: "Parque Municipal",
    responsavel: "Associação Ambientalista",
    participantes: ["Roberto", "Maria", "João"]
};

// Função para exibir detalhes da atividade
function exibirAtividade(atividade) {
    console.log(`Título: ${atividade.titulo}`);
    console.log(`Descrição: ${atividade.descricao}`);
    console.log(`Data: ${atividade.data}`);
    console.log(`Local: ${atividade.local}`);
    console.log(`Responsável: ${atividade.responsavel}`);
    console.log(`Participantes: ${atividade.participantes.join(", ")}`);
}

// Chamando a função para exibir a atividade
exibirAtividade(atividadeAgrinho);
