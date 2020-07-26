"use strict";
const servicePath = require("./servicesPath.json");

const loadFile = (path) => {
  return require(`../services/${path}`);
};

const dataSourceAPIMongo = () => {
  const { datasource } = servicePath[0];
  const Products = loadFile(datasource.productsAPI.path);
  return new Products(datasource.productsAPI.baseURL);
};

const callDatasource = () => {
  return {
    productsAPI: dataSourceAPIMongo(),
  };
};

module.exports = callDatasource;
