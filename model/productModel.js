// Lucas Henrique DEV2B
// Model: armazena e gerencia os dados

const productModel = {
    products: [],

    addProduct(product) {
        this.products.push(product);
    },

    getProducts() {
        return this.products;
    }
};
