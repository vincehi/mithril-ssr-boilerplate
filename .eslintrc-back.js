// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
// https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    browser: true,
    node: true,
    commonjs: false
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    tsconfigRootDir: __dirname,
    project: "tsconfig.json"
  },
  settings: {
    react: {
      pragma: "m"
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {
        name: "m.route.Link",
        linkAttribute: "href"
      }
    ]
  },
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:unicorn/recommended",
    "plugin:promise/recommended"
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "unicorn",
    "promise"
  ],
  rules: {
    "react/jsx-uses-react": [
      "error"
    ],
    "react/jsx-uses-vars": [
      "error"
    ],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "vnode"
        ]
      }
    ],
    "arrow-parens": [
      "error"
    ],
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase"
      }
    ],
    // Common abbreviations are known and readable
    "unicorn/prevent-abbreviations": "off",
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: [
          "oninit",
          "oncreate",
          "onbeforeremove",
          "onremove",
          "onbeforeupdate",
          "onupdate",
          "view"
        ]
      }
    ]
  },
  // overrides: [
  //   {
  //     files: [
  //       "src/server/**"
  //     ],
  //     rules: {
  //       "no-param-reassign": [
  //         "error",
  //         {
  //           props: true,
  //           ignorePropertyModificationsFor: [
  //             "ctx"
  //           ]
  //         }
  //       ],
  //       "no-console": [
  //         0
  //       ]
  //     }
  //   },
  //   {
  //     files: [
  //       "src/components/**",
  //       "src/pages/**"
  //     ],
  //     rules: {
  //       "unicorn/filename-case": [
  //         "error",
  //         {
  //           case: "pascalCase"
  //         }
  //       ]
  //     }
  //   }
  // ]
}
