const devConfig = {
  MONGO_URL: 'mongodb://localhost/api-node-mongo-passport-jwt-dev'
};
const testConfig = {
  MONGO_URL: 'mongodb://localhost/api-node-mongo-passport-jwt-test'
};
const prodConfig = {
  MONGO_URL: 'mongodb://localhost/api-node-mongo-passport-jwt-prod'
};
const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;                                           
  }
}

module.exports = { ...defaultConfig,
   ...envConfig(process.env.NODE_ENV) 
};       
