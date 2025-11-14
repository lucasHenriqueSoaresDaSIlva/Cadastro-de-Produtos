// MODEL: responsável pelos dados
const Model = {
    produtos: [],

    adicionar(produto) {
        this.produtos.push(produto);
    }
};

// VIEW: atualiza a interface
const View = {
    lista: document.getElementById("listaProdutos"),

    atualizar(produtos) {
        this.lista.innerHTML = "";
        produtos.forEach(p => {
            const li = document.createElement("li");
            li.textContent = `${p.nome} - R$${p.preco} (${p.categoria})`;
            this.lista.appendChild(li);
        });
    }
};

// CONTROLLER: liga o Model ao View
const Controller = {
    init() {
        document.getElementById("btnAdicionar").addEventListener("click", () => {
            const nome = document.getElementById("nome").value;
            const preco = document.getElementById("preco").value;
            const categoria = document.getElementById("categoria").value;

            const novoProduto = { nome, preco, categoria };

            Model.adicionar(novoProduto);
            View.atualizar(Model.produtos);
        });
    }
};

Controller.init();
