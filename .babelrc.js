const babelConfig = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    esmodules: true
                }
            }
        ],
        '@babel/preset-react'
    ],
    plugins: [
        [
            '@babel/plugin-proposal-class-properties',
            {
                loose: false
            }
        ]
    ]
};

module.exports = babelConfig;
