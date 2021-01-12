"use strict"
const { RESTDataSource } = require('apollo-datasource-rest')

class Products extends RESTDataSource {
    constructor(baseURL) {
        super()
        this.baseURL = baseURL
    }

    async getProducts() {
        return await this.get('products')
    }
    
    async getProduct(id) {
        return await this.get('products/'+id)
    }
    
    async getProductsByCategory(query) {
        return await this.post('query/products',query)
    }

    async getCategories() {
        return await this.get('categories')
    }
    
    async getCategoriesIn(id) {
        const data = { "field":"categoryID","values":id }
        return await this.post('in/categories',data)
    }

    async createProduct(input) {
        return await this.post('create/products',input)
    }
    
    async createCategories(input) {
        return await this.post('create/categories',input)

    }

}

module.exports = Products
