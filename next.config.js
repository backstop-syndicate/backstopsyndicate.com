// next.config.js
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
    /* config for next-optimized-images */

    // your config for other plugins or the general next.js here...
    exportTrailingSlash: true,
    generateBuildId: async () => {
        return 'my-build-id'
    },
});
