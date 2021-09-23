import Product from "./Product";

class GetProducts {

    static GetProductFromConsole(options){
        return this.#CreateProduct(options);
    }

    static #CreateProduct(options){
        return new Product(options);
    }
}

export default GetProducts;