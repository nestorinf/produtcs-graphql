
'use strict'
// const { loginIn } = require('../../../utils/auth')

const createProducts = async (_,{input},context) => {
    const { dataSources } = context
    let dataResult 
    const defaults = {
        img:'',
        price:'',
        visible:false,
        categories:''

    }
    const newProducts = Object.assign(defaults,input)
   try {
       const { data } =  await dataSources.productsAPI.createProduct(newProducts)
       const { ops }  = data
       dataResult = ops
   } catch (error) {
       console.log(error)
       throw new Error(error.name)
   }
    return dataResult
}

const createCategories = async(_,{input},context) => {
    const { dataSources } = context
    let dataResult 
    const defaults = {
        description:'',
        path:''
    }
    const newCategories = Object.assign(defaults,input)
    try {
        const { data } = await dataSources.productsAPI.createCategories(newCategories)
        const { ops }  = data
        dataResult = ops
    } catch (error) {
        throw new Error(error.name)
    }
    return dataResult
}

module.exports = {
    createProducts,
    createCategories
}