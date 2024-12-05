sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: jsapp1",
		defaults: {
			page: "ui5://test-resources/jsapp1/Test.qunit.html?testsuite={suite}&test={name}",
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
				only: "jsapp1/",
				never: "test-resources/jsapp1/"
			},
			loader: {
				paths: {
					"jsapp1": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for jsapp1"
			},
			"integration/opaTests": {
				title: "Integration tests for jsapp1"
			}
		}
	};
});
