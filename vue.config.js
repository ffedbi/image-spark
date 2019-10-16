// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "./src/assets/scss/main.scss";`
            },
        }
    }
}