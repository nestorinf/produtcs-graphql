'use strict'
const path = require('path')
const queries = require('../queries/queries')
const mutation = require('../mutation/mutation')
const types = require('../types/types')
const {readFileSync} = require('fs')
const schema = readFileSync(path.join(__dirname,'../schemas','schema.graphql'),'utf-8')
module.exports = {
    typeDefs: schema,
    resolvers:{
        Query:queries,
        Mutation:mutation,
       // ...types
    }
}