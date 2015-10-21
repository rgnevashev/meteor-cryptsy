Package.describe({
	summary: "cryptsy",
	version: "0.0.4",
	name: "rgnevashev:cryptsy",
	git: "",
  documentation: null
});

Npm.depends({ "cryptsy-api": "0.2.6", "cryptsyv2-api": "0.0.4" });

Package.onUse(function(api) {
	api.versionsFrom('1.2.0.2');
	api.addFiles('cryptsy_server.js', 'server');
	api.export('CryptsyAPI','server');
	api.export('Cryptsy2API','server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('rgnevashev:cryptsy');
  api.addFiles('cryptsy-tests.js');
});
