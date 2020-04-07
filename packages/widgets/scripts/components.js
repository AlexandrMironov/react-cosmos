const path = require('path');
const glob = require('glob');

const options = {
    cwd: path.join(__dirname, '..', 'src'),
    ignore: ['node_modules/**', 'flow-typed/**', '*.spec.tsx']
};

const list = glob.sync('**/*(index.ts|*.tsx)', options).filter((filepath, index, result) => {
    const parse = path.parse(filepath);
    const dirname = path.basename(parse.dir);

    return parse.name === 'index' || parse.name === dirname;
});

const maps = list.reduce((result, filepath) => {
    const parse = path.parse(filepath);

    const filename = path.format({
        root: '/',
        dir: parse.dir,
        name: parse.name
    });

    result[filename] = './' + filepath;
    return result;
}, {});

module.exports = {
    list,
    maps
};
