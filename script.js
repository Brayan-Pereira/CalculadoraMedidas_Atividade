const ListaNumeros = []
let index = 0
let numero = 0

document.addEventListener('keypress', function (e) {
    if (e.which == 13) {
        console.log('a tecla enter foi pressionada');
        salvar()
    }
}, false);

function salvar() {
    numero = document.getElementById("numero").value;

    console.log(numero)
    ListaNumeros[index] = numero;

    exibir(index)
    index += 1
}

function exibir(index) {

    document.getElementById('lista').innerHTML += `<li>${ListaNumeros[index]}</li>`
}

function media() {
    console.log("*******CALCULO DE MEDIA*******")
    let media = 0
    let somaMedia = 0
    for (var i = 0; i < ListaNumeros.length; i++) {
        somaMedia += Number(ListaNumeros[i]);
    }
    media = (somaMedia / ListaNumeros.length)
    console.log("Media: " + (somaMedia / ListaNumeros.length))
    document.getElementById('resultado').innerHTML += `<li>Média: ${media}</li>`
}

function mediana() {
    console.log("*******CALCULO DE MEDIANA*******")
    console.log(ListaNumeros.sort((a, b) => a - b))
    let posicao = 0;

    let mediana = 0;
    if (ListaNumeros.length % 2 != 0) {
        console.log("é impar")

        posicao = ((ListaNumeros.length + 1) / 2) - 1
        console.log(posicao)

        mediana = ListaNumeros.sort((a, b) => a - b)[posicao]

        document.getElementById('resultado').innerHTML += `<li>Mediana: ${mediana}</li>`

    } else {
        console.log("é par")
        posicao = ((ListaNumeros.length + 2) / 2)

        let posicaoDois = (ListaNumeros.length / 2)

        console.log("Primeira posição: " + posicaoDois)
        console.log("Segunda posição: " + posicao)

        let num1 = Number(ListaNumeros.sort((a, b) => a - b)[posicaoDois - 1])
        let num2 = Number(ListaNumeros.sort((a, b) => a - b)[posicao - 1])

        mediana = (num1 + num2) / 2


        document.getElementById('resultado').innerHTML += `<li>Mediana: ${mediana}</li>`
    }
}

function variancia() {
    console.log("*******CALCULO DE VARIANCIA AMOSTRAL*******")
    let variancia = 0
    let media = 0
    let somaMedia = 0

    for (let i = 0; i < ListaNumeros.length; i++) {
        somaMedia += Number(ListaNumeros[i]);
    }

    media = (somaMedia / ListaNumeros.length)
    let menosMedia = []
    let todosQuadrado = []
    let somaTodos = 0

    //FAZER TODOS MENOS A MEDIA e ELEVAR AO QUADRADO e SOMAR TODOS e DIVIDIR POR NUMERO DE TERMOS -1
    for (let i = 0; i < ListaNumeros.length; i++) {
        menosMedia[i] = media - (ListaNumeros[i]);
        todosQuadrado[i] = (menosMedia[i]) ** 2;
        somaTodos += todosQuadrado[i]

    }
    console.log(menosMedia)
    console.log(todosQuadrado)
    console.log(somaTodos)
    variancia = ((somaTodos) / (todosQuadrado.length - 1))

    document.getElementById('resultado').innerHTML += `<li>Variância: ${variancia}</li>`
}

function desvio(){
    console.log("*******CALCULO DE DESVIO PADRÃO*******")
    let variancia = 0
    let media = 0
    let somaMedia = 0

    for (let i = 0; i < ListaNumeros.length; i++) {
        somaMedia += Number(ListaNumeros[i]);
    }

    media = (somaMedia / ListaNumeros.length)
    let menosMedia = []
    let todosQuadrado = []
    let somaTodos = 0

    //FAZER TODOS MENOS A MEDIA e ELEVAR AO QUADRADO e SOMAR TODOS e DIVIDIR POR NUMERO DE TERMOS -1
    for (let i = 0; i < ListaNumeros.length; i++) {
        menosMedia[i] = media - (ListaNumeros[i]);
        todosQuadrado[i] = (menosMedia[i]) ** 2;
        somaTodos += todosQuadrado[i]

    }
    variancia = ((somaTodos) / (todosQuadrado.length - 1))
    // desvio padrao

    let desvioPadrao = Math.sqrt(Number(variancia))
    console.log(desvioPadrao)

    document.getElementById('resultado').innerHTML += `<li>Desvio Padrão: ${desvioPadrao}</li>`
}

function coeficiente(){
    console.log("*******CALCULO DE Coeficiente de Variação*******")
    let variancia = 0
    let media = 0
    let somaMedia = 0

    for (let i = 0; i < ListaNumeros.length; i++) {
        somaMedia += Number(ListaNumeros[i]);
    }

    media = (somaMedia / ListaNumeros.length)
    let menosMedia = []
    let todosQuadrado = []
    let somaTodos = 0

    //FAZER TODOS MENOS A MEDIA e ELEVAR AO QUADRADO e SOMAR TODOS e DIVIDIR POR NUMERO DE TERMOS -1
    for (let i = 0; i < ListaNumeros.length; i++) {
        menosMedia[i] = media - (ListaNumeros[i]);
        todosQuadrado[i] = (menosMedia[i]) ** 2;
        somaTodos += todosQuadrado[i]

    }
    variancia = ((somaTodos) / (todosQuadrado.length - 1))
    // desvio padrao

    let desvioPadrao = Math.sqrt(Number(variancia))

    let cv = (desvioPadrao/ media)*100

    document.getElementById('resultado').innerHTML += `<li>CV: ${cv}%</li>`
}

function Homogeneo_Heterogeneo(){
    console.log("*******CALCULO DE Coeficiente de Variação*******")
    let variancia = 0
    let media = 0
    let somaMedia = 0

    for (let i = 0; i < ListaNumeros.length; i++) {
        somaMedia += Number(ListaNumeros[i]);
    }

    media = (somaMedia / ListaNumeros.length)
    let menosMedia = []
    let todosQuadrado = []
    let somaTodos = 0

    //FAZER TODOS MENOS A MEDIA e ELEVAR AO QUADRADO e SOMAR TODOS e DIVIDIR POR NUMERO DE TERMOS -1
    for (let i = 0; i < ListaNumeros.length; i++) {
        menosMedia[i] = media - (ListaNumeros[i]);
        todosQuadrado[i] = (menosMedia[i]) ** 2;
        somaTodos += todosQuadrado[i]

    }
    variancia = ((somaTodos) / (todosQuadrado.length - 1))
    // desvio padrao

    let desvioPadrao = Math.sqrt(Number(variancia))

    let cv = (desvioPadrao/ media)*100

    // hetero ou homo
    if(cv <= 30){
        document.getElementById('resultado').innerHTML += `<li>Grupo Homogêneo</li>`
    }
    else{
        document.getElementById('resultado').innerHTML += `<li>Grupo Heterogêneo</li>`
    }
}


