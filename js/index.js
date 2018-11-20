/*
 * @author Marcio Ribeiro Justo
 * DOM - Document Object Model
 */
//var myVar = setInterval(criaParagrafo, 1000);

function criaImagem() {
    var objNovaImg = document.createElement('img');
    objNovaImg.src = "../images/img0.png";
    objNovaImg.style.width = "100px";
    objNovaImg.style.height = "100px";

    document.getElementById('pindice2').appendChild(objNovaImg);
}

function criaParagrafo() {
  var objNovoParagrafo = document.createElement('p');
  var strTexto = document.createTextNode('Informação do parágrafo');

  objNovoParagrafo.appendChild(strTexto);
  document.getElementById('pindice').appendChild(objNovoParagrafo);
}

/*
 * @author Marcio Ribeiro Justo
 * Exercício
 * Construa um array vazio e atribua a ele imagens até obter uma pilha de cinco elementos.
 *
 */
function exerArray() {
    var imgs = new Array("img0","img1","img2","img3","img4");

    for (key in imgs) {
       document.getElementById("sprite" + key).src = "../images/" + imgs[key] + ".png";
       document.getElementById("sprite" + key).style.width = "100px";
       document.getElementById("sprite" + key).style.height = "100px";
    }

    // Exibe
    /*
    for (var i=0; i < imgs.length; i++) {
       //document.write( "<img id='img" + i + "' src='../images/" + imgs[i] + ".png' width=100px height=100px>");
       document.getElementById("sprite" + i).src = "../images/" + imgs[i] + ".png";
       document.getElementById("sprite" + i).style.width = "100px";
       document.getElementById("sprite" + i).style.height = "100px";
    }*/
}

/*
function exerArrayProf() {
    var imgs = new Array(items:"img0","img1","img2","img3","img4");

    for (key in imgs) {
        var numero = parseInt(key) + parseInt(s:1);
        console.log(numero);
        var ele = "img" + numero;
        console.log(ele);
        document.getElementById("sprite" + numero).src = "../images/" + imgs[key] + ".png";
        document.getElementById("sprite" + numero).style.width = "100px";
        document.getElementById("sprite" + numero).style.height = "100px";
    }
}
*/

/*
 * @author Marcio Ribeiro Justo
 * Exercício
 * Construa algoritimo em JavaScript que calcula a média de 10 alunos. Use um dos três tipos de laços de repetição
 *
 */
function qualMedia() {
  var _MediasAlunos = [80,85,75,85,65,80,85,100,90,85];
  var _soma = 0;
  for (var i=0; i < 10; i++) {
    _soma = _soma + _MediasAlunos[i];
  }
  return _soma/10;
}


/*
 * @author Marcio Ribeiro Justo
 * Exercício
 * Construa um algoritimo em JavaScript que pergunta se um individuo é masculino ou feminino e mostra o resultado.
 *
 */
function qualSexo(p_sexo) {
  if (p_sexo == 'M') {
     alert("É homem!");
  } else {
     alert("É mulher!");
  }

}

/*
 * @author Marcio Ribeiro Justo
 * Exemplo de estrutura de seleção
 *
 */
function exemplo2() {
    var DiaSemana = new Date();
    DiaSemana = DiaSemana.getDay();

    switch (DiaSemana) {
        case 1:
            alert(" Segunda-feira ");
            break;
        case 2:
            alert(" Terça-feira ");
            break;
        case 3:
            alert(" Quarta-feira ");
            break;
        case 4:
            alert(" Quinta-feira ");
            break;
        case 5:
            alert(" Sexta-feira ");
            break;
        case 6:
        case 7:
            alert(" Fim de semana ");
            break;
        default:
            alert(" Dia inexistente ");
    }
}

/*
 * @author Cássio Trindade
 * Exemplo de comentario de várias linhas
 *
 */
function exemplo(){
    const NOME = "DESSA FUÇÃO"
    let parcela1 = 23;
    let parcela2 = 33;
    let soma = parcela1 + parcela2;
    console.log(soma);
}



/*var exibeMensagem = function() {
    mensagem = "MANTRA";
    console.log(mensagem);
    var mensagem;
}*/


/*
var exibeMensagem = function() {
    var mensagemForaDoIf = "MANTRA";
    if(mensagemForaDoIf == "MANTRA") {
        var mensagemDentroDoIf = "JavaScript";
    }
    console.log(mensagemForaDoIf); // MATERA
    console.log(mensagemDentroDoIf); // JavaScript
}
*/


var exibeMensagem = function() {
    var mensagemForaDoIf = "MANTRA";
    if(mensagemForaDoIf == "MANTRA") {
        let mensagemDentroDoIf  = "JavaScript";
        console.log(mensagemDentroDoIf); // imprime JS
    }
    // mensagemDentroDoIf não é mais acessível a partir deste ponto
    console.log(mensagemForaDoIf); // imprime MATERA

    // apenas mensagemForaDoIf existe nesse ponto
}
function salva() {
    alert("Animal Salvo")
}


// Comentário de uma linha em cima de uma function
function soma() {
    var numeroUm = document.getElementById("valor-um").value;
    var numeroDois= document.getElementById("valor-dois").value;

    if (isNaN(numeroUm)) {
        alert('Número Um inválido!');
    }
    if (isNaN(numeroDois)) {
        alert('Número Dois inválido!');
    }
    alert(parseInt(numeroUm) + parseInt(numeroDois));
}

/**
 * 14/11/2018: Aula 7 - Marcio Justo: JavaScript
 */
function subtracao() {
    var numeroUm = document.getElementById("valor-um").value;
    var numeroDois= document.getElementById("valor-dois").value;

    if (isNaN(numeroUm)) {
        alert('Número Um inválido!');
    }
    if (isNaN(numeroDois)) {
        alert('Número Dois inválido!');
    }
    alert(parseInt(numeroUm) - parseInt(numeroDois));
}

function multiplicacao() {
    var numeroUm = document.getElementById("valor-um").value;
    var numeroDois= document.getElementById("valor-dois").value;

    if (isNaN(numeroUm)) {
        alert('Número Um inválido!');
    }
    if (isNaN(numeroDois)) {
        alert('Número Dois inválido!');
    }
    alert(parseInt(numeroUm) * parseInt(numeroDois));

}

function divisao() {
    var numeroUm = document.getElementById("valor-um").value;
    var numeroDois= document.getElementById("valor-dois").value;

    if (isNaN(numeroUm)) {
        alert('Número Um inválido!');
    }
    if (isNaN(numeroDois)) {
        alert('Número Dois inválido!');
    }

    alert(parseInt(numeroUm) / parseInt(numeroDois));
}

function Calcula(p_operacao) {
    var numeroUm = document.getElementById("valor-um").value;
    var numeroDois= document.getElementById("valor-dois").value;


    alert(p_operacao);
    if (p_operacao == 'soma') {
        alert('Funciona +');
    } else {
        if (p_operacao == 'subtracao') {
            alert('Funciona -');
        } else {
            if (p_operacao == 'multiplicacao') {
                alert('Funciona *');
            } else {
                if (p_operacao == 'divisao') {
                    alert('Funciona /');
                }
            }

        }
    }
}