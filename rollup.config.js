const fs = require('fs');
const path = require('path');
const commonjs = require('@rollup/plugin-commonjs');
const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const json = require('rollup-plugin-json');
const builtins = require('rollup-plugin-node-builtins');

const { terser } = require('rollup-plugin-terser');

const externalPackages = {
    react: 'React',
    mobx: 'mobx',
    'es5-shim': 'es5-shim',
    'prop-types': 'PropTypes',
    'react-dom': 'ReactDOM',
    antd: 'antd',
    'mobx-react': 'mobxReact',
    'mobx-react-lite': 'mobxReactLite'
};

const getExternalConfig = () => {
    const customExternals = process.env.EXTERNALS;
    if (customExternals) {
        return { ...externalPackages, ...JSON.parse(customExternals) };
    }
    return externalPackages;
};

const getConfig = ({ srcDir, entryFile }) => {
    const packageJsonFilePath = path.join(__dirname, 'package.json');
    const packageJsonFile = JSON.parse(fs.readFileSync(packageJsonFilePath, 'utf8'));
    const fileVersion = packageJsonFile.version.split('.').join('');
    const entryName = entryFile || `${srcDir}/src/client.js`;
    const config = {
        input: entryName,
        output: [
            {
                file: path.resolve(srcDir, 'dist/assets/bundle.js'),
                format: 'iife',
                sourcemap: true,
                globals: getExternalConfig()
            },
            {
                file: path.resolve(srcDir, `dist/assets/bundle.min.${fileVersion}.js`),
                format: 'iife',
                sourcemap: true,
                globals: getExternalConfig(),

                plugins: [terser()]
            }
        ],
        onwarn: function (warning) {
            if (warning.code === 'THIS_IS_UNDEFINED') {
                return;
            }
            console.error(warning.message);
        },
        plugins: [
            nodeResolve({ browser: true }),
            replace({
                __SERVER_RENDERING__: false,
                'process.env.NODE_ENV': JSON.stringify('development'),
                preventAssignment: true
            }),
            json(),
            builtins(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                browsers: ['last 2 versions', 'ie 11']
                            }
                        }
                    ],
                    ['@babel/preset-react']
                ],
                plugins: [
                    ['@babel/plugin-transform-runtime', { helpers: false, regenerator: true }],
                    ['@babel/plugin-proposal-class-properties', { loose: false }]
                ]
            }),
            commonjs({ transformMixedEsModules: true })
        ],
        external: Object.keys(getExternalConfig())
    };
    return config;
};

module.exports = getConfig({ srcDir: __dirname, entryFile: './src/widgets/client.js' });
