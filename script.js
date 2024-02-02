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

let menuAberto = false;

function abrirMenu() {
    const menuOpcoes = document.getElementById('menuOpcoes');
    menuOpcoes.style.display = menuAberto ? 'none' : 'block';
    menuAberto = !menuAberto;
}

let coresNeonAtivadas = false;

function alternarCoresNeon() {
    const bolhasPares = document.querySelectorAll('.bolhas span:nth-of-type(even)');
    const bolhasImpares = document.querySelectorAll('.bolhas span:nth-of-type(odd)');

    if (!coresNeonAtivadas) {
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

function getCorNeon(i) {
    const coresNeon = ['#ff66ff', '#00ffff', '#ffff66', '#66ff66']; // Cores neon
    return coresNeon[i % coresNeon.length];
}