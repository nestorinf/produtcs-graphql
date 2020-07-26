"use strict";
module.exports = {
  Products: {
    categories: async ({categories} , args, context) => {
        let categoriesData = [];
        const { dataSources } = context
        try {
            const _id = categories ? categories.map( id =>  parseInt(id) ) : []
            categoriesData = _id.length > 0 ? await dataSources.productsAPI.getCategoriesIn(_id) : []
        } catch (error) {
            throw new Error(error.name)
        }
        return categoriesData.data
    },
  },
};
