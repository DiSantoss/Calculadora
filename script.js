
// formula para acrescentar na parte de resultado, ou seja na tag p. oque as instruções diz, da seguinte forma : criar uma variavel chamada numero que é simplesmente o elemento resultado com innerHTML sem nada.
// selecionar o elemento pelo id -> elemnto 'resultado' -> e trocar o html dele por numero + num. ou seja, a variavel mais os parametros que ja estão em cada numero com seu respectivo numero la no html.
function insert(num) {
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num
}


// funcao clear, colocamos clean pq clear n funcionou
// nessa funcao basta selecionar o elemento com getelementbyid colocar ponto innnerHTML igual a nada. essa função será para a tag onde está o C
// escreva clean porque clear n deu certo.

function clean() {
    document.getElementById('resultado').innerHTML = "";
} 

// nessa funcao, usamos o substring para tirar o ultimo valor dos numeros que forem adicionados a resultado.
// ela funciona assim. coloca a string coloca ponto substring entre parenteses coloca o inicio da string > start e com uma virgula depois coloca o final. ou seja resultado.substring(0, resultado.length-1). adicionando ao end da substring o tamanho da string -1, sempre que for chamada a funcao vai pegar esses valores e vai tirar menos 1, ou seja o tamanho que estiver no resultado menos o ultimo valor colocado.

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1)
}

// aqui vamos usar o eval para calcular as contas. colocando simplesmente eval(5+2) no console.log ele retorna para gente o resultado que é 7. e assim com qualquer conta. 
// ou seja, selecionando o elemento resultado que pode ter qualquer valor adicionando ao html desse resultado o eval , ele irá simplmesmente resolver oque estiver descrito e retornara o resultado. da seguinte forma abaixo.

// ele coloca um if and else para que se tiver resultado ou seja, algum elemento entao faça as instruções de eval para resulado, se nao escreva no html do elemento resultado 'Nada para calcular' .

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
      document.getElementById('resultado').innerHTML = 'Nada para Calcular'
    }
}