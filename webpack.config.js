const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    resolve: {
        extensions: [".ts", ".js", ".json"],
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader'},
        ]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Calc',
        libraryTarget: 'umd',
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    }
};
