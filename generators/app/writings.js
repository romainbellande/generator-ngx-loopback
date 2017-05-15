module.exports = gen => {
  gen.fs.copyTpl(
    gen.templatePath('tpl/_package.json'),
    gen.destinationPath('package.json'), {
      name: gen.props.name
    }
  );

  gen.fs.copyTpl(
    gen.templatePath('tpl/_datasources.json'),
    gen.destinationPath('server/datasources.json'), {
      dbName: gen.props.dbName
    }
  );

  gen.fs.copy(
    [
      gen.templatePath('**'),
      '!**/tpl/**'
    ],
    gen.destinationPath('.'), {
      globOptions: {
        dot: true
      }
    }
  );
};
