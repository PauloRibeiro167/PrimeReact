const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Por favor, forneça um nome para o componente.');
  process.exit(1);
}

const controllerTemplate = `import React from 'react';

const ${componentName}Controller = () => {
    return (
        <div>
            <h1>${componentName} Page</h1>
            {/* Adicione mais componentes aqui */}
        </div>
    );
};

export default ${componentName}Controller;
`;

const modelTemplate = `// Defina o modelo ${componentName} aqui
`;

const routeTemplate = `import ${componentName}Controller from './controllers/${componentName}Controller';`;

const controllerPath = path.join(__dirname, '..', 'controllers', `${componentName}Controller.jsx`);
const modelPath = path.join(__dirname, '..', 'models', `${componentName}Model.js`);
const routesPath = path.join(__dirname, '..', 'routes.jsx');

// Criar o controlador
fs.writeFileSync(controllerPath, controllerTemplate);
console.log(`Controlador ${componentName} criado em ${controllerPath}`);

// Criar o modelo
fs.writeFileSync(modelPath, modelTemplate);
console.log(`Modelo ${componentName} criado em ${modelPath}`);

// Atualizar as rotas
fs.readFile(routesPath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Erro ao ler o arquivo de rotas: ${err}`);
    process.exit(1);
  }

  const importStatement = `import ${componentName}Controller from './controllers/${componentName}Controller';\n`;
  const routeStatement = `<Route path="/${componentName.toLowerCase()}" component={${componentName}Controller} />\n`;

  const updatedData = data.replace(
    /(import .* from '.*';\n)(?!.*import .* from '.*';)/,
    `$1${importStatement}`
  ).replace(
    /(<Switch>\n)(?!.*<Switch>)/,
    `$1${routeStatement}`
  );

  fs.writeFile(routesPath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error(`Erro ao atualizar o arquivo de rotas: ${err}`);
      process.exit(1);
    }

    console.log(`Rotas atualizadas com o controlador ${componentName}`);
  });
});