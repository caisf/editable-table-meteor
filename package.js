Package.describe({
  name: 'tejasmanohar:editable-tablee',
  summary: 'tiny jQuery/Bootstrap widget that makes a HTML table editable ',
  version: '1.0.0',
  git: 'https://github.com/tejas-manohar/editable-table-meteor'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery');
  api.addFiles('vendor/mindmup-editabletable.min.js');
});
