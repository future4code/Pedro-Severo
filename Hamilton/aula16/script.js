class Despesa {
    constructor (valor, tipo, descricao) {
        this.valor = valor;
        this.tipo = tipo;
        this.descricao = descricao;
    }

    formatarDespesa () {
        const despesaFormatada = "<p class='valor-unitario'> R$ " + this.valor + ",00 </p>" +
                                 "<p>" + this.tipo + "</p>" +
                                 "<p>" + this.descricao + "</p><hr>";
        return despesaFormatada;
    }
}

function limpaCampos(){
    document.getElementById("valor-da-despesa").value = "";
    document.getElementById("tipo-da-despesa").value = "";
    document.getElementById("descrição-da-despesa").value = "";
}

function formatarTodasAsDespesas() {
    const listaDeDespesas = document.getElementById("lista-de-despesa");

    listaDeDespesas.innerHTML = "";

    for(let despesaAtual of despesas) {
        listaDeDespesas.innerHTML += despesaAtual.formatarDespesa(); 
    }
}

const despesas = [];

function gerarDespesa() {
    // Captura os dados dos inputs 
    let valor = document.getElementById("valor-da-despesa").value;
    let tipo = document.getElementById("tipo-da-despesa").value;
    let descricao = document.getElementById("descrição-da-despesa").value;

    // valida o preenchimento dos inputs e cria a instancia no array 
    if (valor === "" || tipo === "" || descricao === "") {
        alert("Todos os campos devem estar preenchidos");
    } 
    else {
        // Cria instância
        let despesa = new Despesa (valor, tipo, descricao);
        
        // Guarda instância no array
        despesas.push(despesa);
        
        limpaCampos();

        formatarTodasAsDespesas();
    }
}

const filtrarPeloTipo = (array, tipo) => {
    if (tipo !== "") {
        array.filter(despesa => {
            return despesa.tipo === tipo
        })
    }
}

const filtrarPeloValorMinimo = (array, valor) => {
    if (valor !== "") {
        array.filter(despesa => {
            return despesa.valor >= valor 
        })
    }
}

const filtrarPeloValorMaximo = (array, valor) => {
    if (valor !== "") {
        array.filter(despesa => {
            return despesa.valor <= valor
        })
    }
}

function filtrar () {
    let tipoDaDespesa = document.getElementById("escolha-do-tipo-da-despesa").value;
    let valorMinimo = document.getElementById("valor-minimo-da-despesa").value;
    let valorMaximo = document.getElementById("valor-maximo-da-despesa").value;

    const despesasFiltradas = [...despesas]

    console.log(despesasFiltradas)

    if (tipoDaDespesa !== "") {
        filtrarPeloTipo(despesasFiltradas, tipoDaDespesa)
    } else if (valorMinimo !== "") {
        filtrarPeloValorMinimo(despesasFiltradas, valorMinimo)
    } else if (valorMaximo !== "") {
        filtrarPeloValorMaximo(despesasFiltradas, valorMaximo)
    }

    const listasDespesasComFiltro = document.getElementById("lista-de-despesa");
    listasDespesasComFiltro.innerHTML = "";

    for(let despesa of despesasFiltradas) {
        listasDespesasComFiltro.innerHTML = despesa.formatarDespesa();
    }
}
