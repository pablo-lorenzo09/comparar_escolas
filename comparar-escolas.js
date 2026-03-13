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
let codigoA = document.querySelector('.unidadeA__codigo');
let cidadeA = document.querySelector('.unidadeA__cidade');
let anoConstrucaoA = document.querySelector('.unidadeA__ano');
let qtdeCursosA = document.querySelector('.unidadeA__cursos');

let codigoB = document.querySelector('.unidadeB__codigo');
let cidadeB = document.querySelector('.unidadeB__cidade');
let anoConstrucaoB = document.querySelector('.unidadeB__ano');
let qtdeCursosB = document.querySelector('.unidadeB__cursos');



/* ===== FUNÇÃO DE VALIDAÇÃO ===== */

// if (codigoA == '' || cidadeA == '' || anoConstrucaoA == '' || qtdeCursosA == ''){
//   document.querySelector('.unidadeA__mensagem').innerText = 'Preencha todos os campos para criar a escola.';

// } else if (codigoB == '' || cidadeB == '' || anoConstrucaoB == '' || qtdeCursosB == ''){
//   document.querySelector('.unidadeB__mensagem').innerText = 'Preencha todos os campos para criar a escola.';

// }else{
//   instanciarEscolaA
// }


/* ===== INSTANCIAR ESCOLA A ===== */

const escolaA = new Senai (codigoA, cidadeA, anoConstrucaoA, qtdeCursosA);
function instanciarEscolaA(){
  document.querySelector('.unidadeA__mensagem').innerText = `A Unidade SENAI de ${escolaA.cidade} foi criada.`;
  
}
// FAZENDO FUNCAO BOTAO
const InstanciarAButton = document.querySelector('.unidade__botao.unidadeA__instanciar')
InstanciarAButton.addEventListener('click', instanciarEscolaA);


/* ===== INSTANCIAR ESCOLA B ===== */
const escolaB = new Senai (codigoB, cidadeB, anoConstrucaoB, qtdeCursosB);

function instanciarEscolaB(){
  document.querySelector('.unidadeB__mensagem').innerText = `A Unidade SENAI de ${escolaB.cidade} foi criada.`;
}
// FAZENDO FUNÇAO DO BOTAO
const InstanciarBButton = document.querySelector('.unidade__botao.unidadeB__instanciar');
InstanciarBButton.addEventListener('click', instanciarEscolaB);

// FAZENDO FUNCAO DOs BOToes ABRIR 
const abrirButtonA = document.querySelector('.botao.botao--abrir.unidadeA__abrir');
abrirButtonA.addEventListener('click', abrirEscolaA);

const abrirButtonB = document.querySelector('.botao.botao--abrir.unidadeB__abrir');
abrirButtonB.addEventListener('click', abrirEscolaB);
// FAZENDO FUNCAO DOs BOToes FECHAR 
const fecharButtonA = document.querySelector('.botao.botao--fechar.unidadeA__fechar');
fecharButtonA.addEventListener('click', fecharEscolaA);

const fecharButtonB = document.querySelector('.botao.botao--fechar.unidadeB__fechar');
fecharButtonB.addEventListener('click', fecharEscolaB);


/* ===== ABRIR ESCOLA ===== */
function abrirEscolaA (){
  escolaA.abrirEscola
  document.querySelector('.unidadeA__mensagem').innerText = `Aberta: Bem-vindos ao SENAI ${escolaA.cidade}.`;
}


function abrirEscolaB (){
  escolaB.abrirEscola
  document.querySelector('.unidadeB__mensagem').innerText = `Aberta: Bem-vindos ao SENAI ${escolaB.cidade}.`;
}
/* ===== FECHAR ESCOLA ===== */
function fecharEscolaA (){
  escolaA.fecharEscola
  document.querySelector('.unidadeA__mensagem').innerText = 'Fechada: Atividades encerradas.';
}

function fecharEscolaB (){
  escolaB.fecharEscola
  document.querySelector('.unidadeB__mensagem').innerText = 'Fechada: Atividades encerradas.';
}

/* ===== RELATÓRIO DE COMPARAÇÃO ===== */
function compararEscolas (){

  document.querySelector('.relatorio--oculto').style.display= 'flex'
  if (escolaA.qtdeCursos > escolaB.qtdeCursos) {
    document.querySelector('.relatorio__veredito').innerText = `Veredito ${escolaA.cidade} lidera com ${escolaA.qtdeCursos}`;
  } else if (escolaB.qtdeCursos > escolaA.qtdeCursos) {
    document.querySelector('.relatorio__veredito').innerText = `Veredito ${escolaB.cidade} lidera com ${escolaB.qtdeCursos}`;
  } else {
      document.querySelector('.relatorio__veredito').innerText = `Veredito: Ambas as unidades possuem a mesma quantidade de cursos.`;
  }
  document.querySelector('.relatorio__veredito').innerText = `Unidade A: código: ${escolaA.codigo} cidade: ${escolaA.cidade} ${escolaA.qtdeCursos}`;
}
  
document.querySelector('.sistema__comparar').addEventListener('click', compararEscolas);

/* ===== NOVA CONSULTA ===== */
function nova_consulta() {
  document.querySelector('.relatorio--oculto').style.display= 'none'

  codigoA.value = '';
  cidadeA.value = '';
  anoConstrucaoA.value = '';
  qtdeCursosA.value = '';

  codigoB.value = '';
  cidadeB.value = '';
  anoConstrucaoB.value = '';
  qtdeCursosB.value = '';

  cidadeA.focus()
}

// botao nova consulta

document.querySelector('.sistema__reset').addEventListener('click', nova_consulta);


