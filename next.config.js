// next.config.js
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
    /* config for next-optimized-images */

    // your config for other plugins or the general next.js here...
    exportTrailingSlash: true,
    generateBuildId: async () => {
        return 'my-build-id'
    },
    env: {
        NODEURL: 'https://mainnet.infura.io/v3/db0babc871d74cf79895319a8704666c'
    },
});
