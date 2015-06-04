Package.describe({
  name: "cellog:ns-bootstrap",
  summary: "Highly configurable namespaced bootstrap integration",
  version: "3.3.4_2",
  git: "https://github.com/Nemo64/meteor-bootstrap"
});


Package._transitional_registerBuildPlugin({
  name: 'bootstrap-configurator',
  use: [
    'underscore@1.0.2',
    'nemo64:bootstrap-data@3.3.4_1'
  ],
  sources: [
    'module-definitions.js',
    'distributed-configuration.js',
    'bootstrap-configurator.js'
  ],
  npmDependencies: {}
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.2.2");
  api.use([
    'jquery',
    'nemo64:bootstrap-data@3.3.4_1'
  ], 'client');
});
