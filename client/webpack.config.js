module.exports = {
    // ... other webpack configuration settings
    resolve: {
        fallback: {
            querystring: require.resolve("querystring-es3")
        }
    }
};
