/* 🚨NÃO ALTERAR A CLASSE 🚨 */

class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    this.statusFuncionamento = true;
  }

  fecharEscola() {
    this.statusFuncionamento = false;
  }
}

/* 🚨NÃO ALTERAR A CLASSE 🚨 */




/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */



/* ===== OBTER ELEMENTOS ===== */
let codigoA = document.querySelectorAll('.unidade__input unidadeA__codigo');
let cidadeA = document.querySelectorAll('.unidade__input unidadeA__cidade');
let anoConstrucaoA = document.querySelectorAll('.unidade__input unidadeA__ano');
let qtdeCursosA = document.querySelectorAll('.unidade__input unidadeA__cursos');

let codigoB = document.querySelectorAll('.unidade__input unidadeB__codigo');
let cidadeB = document.querySelectorAll('.unidade__input unidadeB__cidade');
let anoConstrucaoB = document.querySelectorAll('.unidade__input unidadeB__ano');
let qtdeCursosB = document.querySelectorAll('.unidade__input unidadeB__cursos');

/* ===== FUNÇÃO DE VALIDAÇÃO ===== */


/* ===== INSTANCIAR ESCOLA A ===== */

const escolaA = new Senai (codigoA, cidadeA, anoConstrucaoA, qtdeCursosA);
function instanciarEscolaA(){
  document.querySelector('.unidadeA__mensagem').innerText = 'Fechada: Atividades encerradas.';
  
}
const InstanciarAButton = document.querySelector('.unidade__botao unidadeA__instanciar')
InstanciarAButton.addEventListener("click", instanciarEscolaA);

/* ===== INSTANCIAR ESCOLA B ===== */
const escolaB = new Senai (codigoB, cidadeB, anoConstrucaoB, qtdeCursosB);
function instanciarEscolaB(){
  document.querySelector('.unidadeB__mensagem').innerText = 'Fechada: Atividades encerradas.';
// FAZENDO FUNÇAO DO BOTAO
const InstanciarBButton = document.querySelector('.unidade__botao unidadeA__instanciar')
InstanciarAButton.addEventListener("click", instanciarEscolaA);

}

/* ===== ABRIR ESCOLA ===== */
function abrirEscolaA (){
  escolaA.abrirEscola
  document.querySelector('.unidadeA__mensagem').innerText = `Aberta: Bem-vindos ao SENAI ${escolaA.cidade}.`;
}

function abrirEscolaB (){
  escolaB.abrirEscola
  document.querySelector('.unidadeA__mensagem').innerText = `Aberta: Bem-vindos ao SENAI ${escolaB.cidade}.`;
}
/* ===== FECHAR ESCOLA ===== */
function fecharEscolaA (){
  escolaA.fecharEscola
  escolaA.
  document.querySelector('.unidadeA__mensagem').innerText = 'Fechada: Atividades encerradas.';
}

function fecharEscolaB (){
  escolaB.fecharEscola
  document.querySelector('.unidadeB__mensagem').innerText = 'Fechada: Atividades encerradas.';
}

/* ===== RELATÓRIO DE COMPARAÇÃO ===== */
function compararEscolas (e1, e2){
  console.log(`> Comparando oferta de cursos: ${e1.cidade} vs ${e2.cidade}...`);

  if (e1.qtdeCursos > e2.qtdeCursos) {
      console.log(`Resultado: O SENAI ${e1.cidade} possui mais cursos.`);
  } else if (e2.qtdeCursos > e1.qtdeCursos) {
      console.log(`Resultado: O SENAI ${e2.cidade} possui mais cursos.`);
  } else {
      console.log(`Resultado: Ambas as unidades possuem a mesma quantidade de cursos.`);
  }
  console.log(`Status: ${e1.cidade} (${e1.qtdeCursos}) | ${e2.cidade} (${e2.qtdeCursos})\n`);
}

/* ===== NOVA CONSULTA ===== */


