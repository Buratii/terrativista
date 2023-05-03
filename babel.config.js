module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@interfaces": "./src/interfaces",
            "@hooks": "./src/hooks",
            "@pages": "./src/pages",
            "@routes": "./src/routes",
            "@services": "./src/services",
            "@styles": "./src/styles"
          },
          extensions: ['.js', '.tsx', '.jsx', '.ios.js', '.android.js'],
        },
      ], 
      ['styled-components'],
    ],
  };
};
