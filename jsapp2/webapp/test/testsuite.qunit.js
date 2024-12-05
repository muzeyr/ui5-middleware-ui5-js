sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: jsapp2",
		defaults: {
			page: "ui5://test-resources/jsapp2/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "jsapp2/",
				never: "test-resources/jsapp2/"
			},
			loader: {
				paths: {
					"jsapp2": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for jsapp2"
			},
			"integration/opaTests": {
				title: "Integration tests for jsapp2"
			}
		}
	};
});
