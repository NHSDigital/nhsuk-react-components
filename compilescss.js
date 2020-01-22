const sass = require('node-sass');
const fs = require('fs');

const writeFile = (path, value) => new Promise((resolve, reject) => {
  fs.writeFile(path, value, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });
});

const renderSass = (file) => new Promise((resolve, reject) => {
  sass.render({ file: `./src/styles/full/scss/${file}` }, (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result.css);
    }
  });
});

const processFile = async (file) => {
  const css = await renderSass(file);
  await Promise.all([
    writeFile(`./lib/styles/full/${file.split('.')[0]}.css`, css),
    writeFile(`./src/styles/full/${file.split('.')[0]}.css`, css),
  ]);
  console.log(`Processed: ${file}`);
};

const dir = fs.readdirSync('./src/styles/full/scss');

Promise.all(dir.map(processFile)).then(() => console.log('Done!'));
