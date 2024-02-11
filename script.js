// Funções para abrir e fechar os modais de Introdução, Candidatando e Expectativa
function abrirIntroducao() {
    const modal = document.getElementById('modalIntroducao');
    modal.style.display = 'block';
}

function fecharIntroducao() {
    const modal = document.getElementById('modalIntroducao');
    modal.style.display = 'none';
}

function abrirCandidatando() {
    const modal = document.getElementById('modalCandidatando');
    modal.style.display = 'block';
}

function fecharCandidatando() {
    const modal = document.getElementById('modalCandidatando');
    modal.style.display = 'none';
}

function abrirExpectativa() {
    const modal = document.getElementById('modalExpectativa');
    modal.style.display = 'block';
}

function fecharExpectativa() {
    const modal = document.getElementById('modalExpectativa');
    modal.style.display = 'none';
}

// Variável para controlar se o menu de opções está aberto ou fechado
let menuAberto = false;

// Função para abrir ou fechar o menu de opções
function abrirMenu() {
    const menuOpcoes = document.getElementById('menuOpcoes');
    menuOpcoes.style.display = menuAberto ? 'none' : 'block'; // Alterna entre mostrar e esconder o menu
    menuAberto = !menuAberto; // Inverte o estado do menu
}

// Variável para controlar se as cores neon estão ativadas ou não
let coresNeonAtivadas = false;

// Função para alternar entre as cores neon nas bolhas
function alternarCoresNeon() {
    const bolhasPares = document.querySelectorAll('.bolhas span:nth-of-type(even)');
    const bolhasImpares = document.querySelectorAll('.bolhas span:nth-of-type(odd)');

    if (!coresNeonAtivadas) {
        // Ativa as cores neon
        bolhasPares.forEach((span, i) => {
            const corNeon = getCorNeon(i);
            span.style.background = corNeon;
            span.style.boxShadow = `0 0 0 10px ${corNeon}44, 0 0 50px ${corNeon}, 0 0 100px ${corNeon}`;
        });

        bolhasImpares.forEach((span, i) => {
            const corNeon = getCorNeon(i + bolhasPares.length);
            span.style.background = corNeon;
            span.style.boxShadow = `0 0 0 10px ${corNeon}44, 0 0 50px ${corNeon}, 0 0 100px ${corNeon}`;
        });

        coresNeonAtivadas = true;
    }

    else {
        // Desativa as cores neon e restaura as cores originais
        bolhasPares.forEach(span => {
            span.style.background = '#2dc3ff'; // Cor azul original
            span.style.boxShadow = '0 0 0 10px #2dc3ff44, 0 0 50px #2dc3ff, 0 0 100px #2dc3ff'; // Sombra azul original
        });

        bolhasImpares.forEach(span => {
            span.style.background = '#e5ff00'; // Cor amarela original
            span.style.boxShadow = '0 0 0 10px #e5ff0044, 0 0 50px #e5ff00, 0 0 100px #e5ff00'; // Sombra amarela original
        });

        coresNeonAtivadas = false;
    }
}

// Função para obter uma cor neon com base no índice
function getCorNeon(i) {
    // Cores neon predefinidas
    const coresNeon = ['#ff66ff', '#00ffff', '#ffff66', '#66ff66'];
    return coresNeon[i % coresNeon.length];
}

// Elemento de áudio para controle de reprodução
let audio = document.getElementById('audio');

// Função para alternar entre tocar e pausar o áudio de fundo
function alternarAudio() {
    if (audio.paused) {
        audio.play(); // Toca o áudio se estiver pausado
    }

    else {
        audio.pause(); // Pausa o áudio se estiver tocando
    }
}

// Array para armazenar as teclas pressionadas para o efeito secreto
let pressedKeys = [];

// Elemento de imagem do Nyan Cat
const nyanCat = document.getElementById('nyan-cat');

// Evento de tecla pressionada para ativar o efeito secreto do Nyan Cat
document.addEventListener('keydown', (event) => {
    pressedKeys.push(event.key);
    if (pressedKeys.length > 10) {
        pressedKeys.shift();
    }

    const secretCode = 'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a';
    if (pressedKeys.join(',') === secretCode) {
        nyanCat.style.display = 'block'; // Exibe o Nyan Cat
        moveNyanCat(); // Inicia o movimento do Nyan Cat
    }
});

// Função para mover o Nyan Cat pela tela
function moveNyanCat() {
    let position = -100; // Posição inicial ajustada para iniciar fora da tela
    const screenWidth = window.innerWidth;
    const nyanCatWidth = nyanCat.offsetWidth;
    const maxPosition = screenWidth;

    const intervalId = setInterval(() => {
        if (position >= maxPosition) {
            clearInterval(intervalId); // Limpa o intervalo quando o Nyan Cat chega ao final da tela
            nyanCat.style.display = 'none'; // Esconde o Nyan Cat
        }
        position += 5; // Incrementa a posição do Nyan Cat
        nyanCat.style.left = position + 'px'; // Atualiza a posição do Nyan Cat
    }, 50); // Intervalo de atualização de posição em milissegundos
}
