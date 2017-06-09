import webpack from 'webpack';
import webpackConfig from '../webpack.config.prd';
import colors from 'colors';

process.env.NODE_ENV = 'production';

/* eslint-disable no-console */

console.log("Building minified bundle for production".blue);

webpack(webpackConfig).run((err,stats) => {
    if(err) {
        console.log(err.bold.red);
        return 1; 
    }

    const jsonStats = stats.toJson();

    if(jsonStats.hasErrors) {
        return jsonStats.errors.map(error => { console.log(error.red); });
    }

    if(jsonStats.hasWarnings) {
        console.log("Webpack generated the following warnings".bold.yellow);
        return jsonStats.warnings.map(warning => { console.log(warning.yellow); });
    }

    console.log(`Webpack stats, ${stats}`);

    console.log("Build Complete!".green);
    return 0;
});