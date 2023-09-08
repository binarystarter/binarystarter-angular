const { composePlugins, withNx } = require('@nx/webpack');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  config.entry = {
    ...config.entry,
    'payload.config': 'apps/express/payload.config.ts',
  };

  // Configure the output filename for payload.config.ts
  config.output.filename = '[name].js';

  // Update any other webpack configuration as needed

  return config;
});
