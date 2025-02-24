/*
const clickesq = () => {
  console.log("Clicado com sucesso esquerda");
};

const clickdir = () => {
  console.log("Clicado com sucesso direita");
};
*/

// Seleciona todos os elementos com a classe 'item' e armazena na variável lista
let lista = document.querySelectorAll('.item');
// Seleciona o botão 'próximo' e armazena na variável next
let next = document.getElementById('proximo');
// Seleciona o botão 'anterior' e armazena na variável prev
let prev = document.getElementById('anterior');
// Armazena o total de itens na variável contar
let contar = lista.length;
// Inicializa a variável ativo para controlar qual item está visível
let ativo = 0;

// Função chamada quando o botão 'próximo' é clicado
next.onclick = () => {
    // Seleciona o item ativo atual
    let desativar = document.querySelector('.ativo');
    // Adiciona a classe 'sair' para aplicar a animação de saída
    desativar.classList.add('sair'); 
    // Aguarda o tempo da animação de saída (500ms)
    setTimeout(() => {
        // Remove as classes 'ativo' e 'sair' após a animação
        desativar.classList.remove('ativo', 'sair'); 
        // Atualiza o índice ativo para o próximo item
        if (ativo >= contar - 1) {
            ativo = 0; // Se o índice for o último, volta para o primeiro
        } else {
            ativo += 1; // Caso contrário, incrementa para o próximo
        }
        // Adiciona a classe 'ativo' ao próximo item para mostrar
        lista[ativo].classList.add('ativo'); // Adiciona a animação de entrada
    }, 500); // Tempo da animação de saída
}

// Função chamada quando o botão 'anterior' é clicado
prev.onclick = () => {
    // Seleciona o item ativo atual
    let desativar = document.querySelector('.ativo');
    // Adiciona a classe 'sair' para aplicar a animação de saída
    desativar.classList.add('sair'); 
    // Aguarda o tempo da animação de saída (500ms)
    setTimeout(() => {
        // Remove as classes 'ativo' e 'sair' após a animação
        desativar.classList.remove('ativo', 'sair'); 
        // Atualiza o índice ativo para o item anterior
        if (ativo <= 0) {
            ativo = contar - 1; // Se o índice for o primeiro, vai para o último
        } else {
            ativo -= 1; // Caso contrário, decrementa para o anterior
        }
        // Adiciona a classe 'ativo' ao item anterior para mostrar
        lista[ativo].classList.add('ativo'); // Adiciona a animação de entrada
    }, 500); // Tempo da animação de saída
}