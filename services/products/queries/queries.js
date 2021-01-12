'use strict'


const getProduct = async (_,{_id},context) => {
    
    const { dataSources } = context
    try {
        const result =  await dataSources.productsAPI.getProduct(_id)
        return result.data
    } catch (error) {
        throw new Error(error.name)
    }
}

const getProducts = async (_,args,context) =>  {
    const { dataSources } = context
    try {
        const result =  await dataSources.productsAPI.getProducts()
        return result.data
    } catch (error) {
        throw new Error(error.name)
    }
}
const getProductsByCategory = async (_,args,context) =>  {
    const { dataSources } = context
    try {
        const categoryID = {
            categoryID : parseInt(args.categoryID)
        }
        const result =  await dataSources.productsAPI.getProductsByCategory(categoryID)
        return result.data
     } catch (error) {
        throw new Error(error.name)
    } 
}

const getCategories = async(_,args,context) => {
    const {dataSources} = context
    try {
        const result = await dataSources.productsAPI.getCategories()
        return result.data
    } catch (error) {
        throw new Error(error.name)
        
    }
}



module.exports = {
    getProducts,
    getProductsByCategory,
    getCategories,
    getProduct
    
}