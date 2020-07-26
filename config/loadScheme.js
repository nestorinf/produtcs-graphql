'use strict'
const path = require('path')
const { readFileSync } = require('fs')

const typeDefsResolvers = () => {
    const servicePath = require('./servicesPath.json')

    let Objects    = []
    let services   = []
    let keyService = []
    let objectTypeDefs = []
    let objectResolvers = []
  
    
    for (const key2 in servicePath) {
        const pathService = Object.values(servicePath[key2])
        if( pathService[0] ) {
                services = require(path.join(__dirname,'..',`services/${pathService[0]}/resolvers`))
            // console.log(services)
            
            keyService = Object.keys(servicePath[key2])
            Objects[keyService] = services
        }
    }
    for (const key in Objects) {
        const { typeDefs, resolvers } = Objects[key]
        objectTypeDefs += typeDefs
        objectResolvers.push(resolvers)
    }
    
    return {
        objectTypeDefs,
        objectResolvers
    }
    
}

const loadSchemaBase = () => {
    return readFileSync(path.join(__dirname,'scheme_base.graphql'),'utf-8')
}

module.exports = {
    typeDefsResolvers,
    loadSchemaBase
}