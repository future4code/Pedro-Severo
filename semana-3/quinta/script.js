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

function formatarTodasAsDespesas() {
    const listaDeDespesas = document.getElementById("lista-de-despesa");

    listaDeDespesas.innerHTML = "";

    for(let despesaAtual of despesas) {
        listaDeDespesas.innerHTML += despesaAtual.formatarDespesa(); 
    }
}

function filtrar () {
    let tipoDaDespesa = document.getElementById("escolha-do-tipo-da-despesa").value;
    let valorMinimo = document.getElementById("valor-minimo-da-despesa").value;
    let valorMaximo = document.getElementById("valor-maximo-da-despesa").value;

    if (tipoDaDespesa !== "") {
        const filtroPeloTipo = despesas.filter(despesaFiltradaTipo => {
            return despesaFiltradaTipo.tipo === tipoDaDespesa
        })
        const listaDeDespesasTipo = document.getElementById("lista-de-despesa");
        listaDeDespesasTipo.innerHTML = "";

        for(let despesaAtualTipo of filtroPeloTipo) {
            listaDeDespesasTipo.innerHTML += despesaAtualTipo.formatarDespesa(); 
        }
    } else if (valorMinimo !== "") {
        const filtroPeloValorMinimo = despesas.filter(despesaFiltradaValorMin => {
            return despesaFiltradaValorMin.valor >= valorMinimo 
        })
        const listaDeDespesasValorMinimo = document.getElementById("lista-de-despesa");
        listaDeDespesasValorMinimo.innerHTML = "";

        for(let despesaAtualValorMin of filtroPeloValorMinimo) {
            listaDeDespesasValorMinimo.innerHTML += despesaAtualValorMin.formatarDespesa();
        }

    } else if (valorMaximo !== "") {
        const filtroPeloValorMaximo = despesas.filter(despesaFiltradaValorMax => {
            return despesaFiltradaValorMax.valor <= valorMaximo 
        })
        const listaDeDespesasValorMaximo = document.getElementById("lista-de-despesa");
        listaDeDespesasValorMaximo.innerHTML = "";

        for(let despesaAtualValorMax of filtroPeloValorMaximo) {
            listaDeDespesasValorMaximo.innerHTML += despesaAtualValorMax.formatarDespesa();
    }
    }
}

// function somarValores {
    
    
    
//     let valorDoExtrato = document.getElementById("valor-total").value;
//     valorDoExtrato.innerHTML =
    
// }