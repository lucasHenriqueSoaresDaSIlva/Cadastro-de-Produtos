// Lucas Henrique DEV2B
// Controller: recebe ações do usuário e coordena Model e View

function addProductController() {
    const name = document.getElementById("pName").value;
    const price = document.getElementById("pPrice").value;

    if (name === "" || price === "") {
        alert("Preencha todos os campos!");
        return;
    }

    productModel.addProduct({ name, price });
    renderProductList();
}
