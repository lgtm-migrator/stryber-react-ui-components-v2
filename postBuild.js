// This script clones components from webpack build directory (webpackBuildDir) to build directory (buildDir),
// clones package.json from src/components/ to build/
// moves modules (compiled sources) from the webpack build to each folder as index.js
// replaces paths to subcomponents according to export.config.json
const { buildDir, webpackBuildDir } = require('./buildConstants');
const fs = require('fs-extra');
const replace = require('replace-in-file');
const { components, name } = require('./export.config.json');

const componentsList = Object.keys(components);

async function postBuild() {
  try {
    await fs.remove(buildDir);
    await moveComponentsFiles();
    await replacePaths();
    await fs.remove(webpackBuildDir);
    console.log('\x1b[32m', 'postBuild.js: Build is ready for deployment');
  } catch (e) {
    console.log('\x1b[31m','postBuild.js: Error', e);
  }
}

async function moveComponentsFiles() {
  componentsList.forEach(dir => {
    fs.copySync(`${webpackBuildDir}/components/${dir}`, `${buildDir}/${dir}`);
    fs.copySync(`src/components/${dir}/package.json`, `${buildDir}/${dir}/package.json`);
    fs.copySync(`component_README.md`, `${buildDir}/${dir}/README.md`);
    replace.sync({
      files: [`${buildDir}/${dir}/README.md`],
      from: '{name}',
      to: dir,
    })
    fs.copySync(`${webpackBuildDir}/${dir}.js`, `${buildDir}/${dir}/index.js`);
  });
}

async function replacePaths() {
  const from = componentsList.map(key => new RegExp(`(\\.{2}\\/)+${key}(?![\\w\\d])`, 'g'));
  const to = componentsList.map(key => `${name}.${components[key]}`);
  await replace({
    from,
    to,
    files: [`${buildDir}/**/index.js`, `${buildDir}/**/*.d.ts`],
  })
}

postBuild();
