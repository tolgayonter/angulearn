const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "passwords",

  exposes: {
    // './Component': './projects/passwords/src/app/app.component.ts',
    "./Module": "./projects/passwords/src/app/app.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
