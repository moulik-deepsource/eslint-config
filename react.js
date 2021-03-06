module.exports = {
    extends: ['plugin:react/recommended', 'prettier/react'],
    plugins: ['react', 'react-hooks'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/no-danger': 1,
        'react/prefer-es6-class': 2,
        'react/require-render-return': 2,
        'react/self-closing-comp': 2,
        'react/no-did-mount-set-state': 1,
        'react/no-multi-comp': [2, { ignoreStateless: true }],
        'react/no-unused-prop-types': [2, { skipShapeProps: true }],
        'react/no-string-refs': 2,
        'react/no-typos': 2,
        'react/no-unknown-property': 2,
        'react/sort-comp': 2,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-pascal-case': 2,
        'react/jsx-no-comment-textnodes': 1,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,
        // The following rules are unnecessary and potentially harmful if prettier is used:
        // 'react/jsx-equals-spacing': 2,
        // 'react/jsx-first-prop-new-line': [1, 'multiline'],
        // 'react/jsx-indent': 2,
        // 'react/jsx-wrap-multilines': 2,
    },
};
