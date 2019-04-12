require('dotenv').config();
const withLess = require('@zeit/next-less');


module.exports = withLess({
  cssModules: false,
  distDir: '../../dist/functions/next',
  publicRuntimeConfig: {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID
  }
})
