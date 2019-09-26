class Despesa {
    constructor (valor, tipo, descricao) {
        this.valor = valor;
        this.tipo = tipo;
        this.descricao = descricao;
    }

    formatarDespesa () {
        const despesaFormatada = "<p> R$" + this.valor + "</p>" +
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