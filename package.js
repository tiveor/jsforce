Package.describe({
  summary: "Meteor wrapper around jsforce library",
  version: '1.9.2',
  name: 'tiveor:jsforce',
  git: 'https://github.com/tiveor/jsforce.git',
  documentation: 'README.md'
});

Npm.depends({
  jsforce: '1.9.2'
});

Package.on_use(function (api) {
  api.versionsFrom('1.0.1');

  if (api.export) {
    api.export('jsforce');
  }

  api.add_files(['tiveor:jsforce.js'], 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tiveor:jsforce');
  api.addFiles('tiveor:jsforce-tests.js');
});
