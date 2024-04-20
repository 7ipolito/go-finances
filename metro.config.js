const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
<<<<<<< HEAD
<<<<<<< HEAD
    const {
      resolver: { sourceExts, assetExts }
    } = await getDefaultConfig(__dirname);
    return {
      transformer: {
        babelTransformerPath: require.resolve("react-native-svg-transformer")
      },
      resolver: {
        assetExts: assetExts.filter(ext => ext !== "svg"),
        sourceExts: [...sourceExts, "svg"]
      }
    };
  })();
=======
=======
>>>>>>> fork/main
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
<<<<<<< HEAD
>>>>>>> fork/main
=======
>>>>>>> fork/main
