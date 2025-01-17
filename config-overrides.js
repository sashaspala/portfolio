const path = require('path');
module.exports = {
    paths: function (paths, env) {
        // Changing public to static
        paths.appPublic = path.resolve(__dirname, 'public_html');
        paths.appHtml = path.resolve(__dirname, 'public_html/index.html');
        return paths;
    }
}