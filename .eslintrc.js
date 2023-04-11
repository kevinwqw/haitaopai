require('eslint-config-airbnb');

module.exports = {
    extends: ['airbnb', 'plugin:promise/recommended'],
    plugins: ['promise'],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        requireConfigFile: false
    },
    rules: {
        // 0 -> off, 1 -> warn, 2 -> err
        'class-methods-use-this': 0,
        'comma-dangle': [2, 'never'],
        'func-names': 0,
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'linebreak-style': [0, 'unix'],
        indent: [1, 4, { SwitchCase: 1 }],
        quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'no-continue': 0,
        'no-plusplus': 0,
        'no-underscore-dangle': 0,
        'max-len': [
            'error',
            120,
            2,
            {
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\('
            }
        ],
        'react/jsx-filename-extension': 0,
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'import/no-extraneous-dependencies': 0,
        'object-curly-newline': 0
    },
    globals: {
        test: 'readonly',
        describe: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
    }
};
