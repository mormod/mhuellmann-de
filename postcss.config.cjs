module.exports = (cfg) => {

    const devMode = (cfg.env === 'development');
  
    return {
  
      map: devMode ? 'inline' : null,
      plugins: [
        require('postcss-import')(),
        require('postcss-nested')(),
        require('autoprefixer')(),
        devMode ? null : require('cssnano')()
      ]
  
    };
  
  };
  