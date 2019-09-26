class Despesa {
    constructor (valor, tipo, descricao) {
        this.valor = valor;
        this.tipo = tipo;
        this.descricao = descricao;
    }

    formatarDespesa () {

    }
}

const despesas = [];

function gerarDespesa() {
    let valor = document.getElementById("valor-da-despesa").value;
    let tipo = document.getElementById("tipo-da-despesa").value;
    let descricao = document.getElementById("descrição-da-despesa").value;

    if (valor === "" || tipo === "" || descricao === "") {
        alert("Todos os campos devem estar preenchidos");
    } else {
        let despesa = new Despesa (valor, tipo, descricao);
        despesas.push(despesa);
        console.log(despesas);
    }
}

