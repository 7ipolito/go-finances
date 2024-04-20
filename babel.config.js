module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
<<<<<<< HEAD
    plugins: ['react-native-reanimated/plugin','inline-dotenv']
=======
    plugins: ['react-native-reanimated/plugin'],
    plugins: ['inline-dotenv']
>>>>>>> fork/main
  };
};
