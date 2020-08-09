require('@babel/polyfill');

require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('./server');

//npm run build 
//before npm run ssr