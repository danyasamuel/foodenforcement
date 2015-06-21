// MainViews.spec.js
// ----------
define([
	'jquery', 'backbone', 'routers/router', 'sinon','selectize','views/mainView', 
	'text!templates/main.html', 
	'text!locale/main.json', 
	'text!locale/es_mx/main.json',
	'models/requestModel',
	'text!templates/classificationTemplate.html',
	'collections/itemsCollection'
], function($, Backbone, Router, sinon, selectize,MainView, template, content, contentES,RequestModel,
	ClassificationTemplate, ItemsCollection ) {
	'use strict';
	var classResults =[{
		"name": "Class I"
	}, {
		"name": "Class II"
	}, {
		"name": "Class III"
	}];

	var collResults = {
					meta: {
						disclaimer: "openFDA is a beta research project and not for clinical use. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated.",
						license: "http://open.fda.gov/license",
						last_updated: "2015-05-31"
					},
					results: [
						{
							term: "Class II",
							count: 3978
						},
						{
							term: "Class I",
							count: 3767
						},
						{
							term: "Class III",
							count: 271
						}
					]
				};
	// Jasmine View Test suite for mainView  
	describe('mainView: ', function() {

		// Runs before every View spec
		beforeEach(function() {
			this.model = new RequestModel();
			// Instantiates a new View instance
			this.view = new MainView({
				model: this.model
			});

			this.language = 'en_us';

		});

		// Tests if the view is properly defined
		it('should be defined', function() {

			expect(this.view).toBeDefined();

		});
		//Load the classification template
		it("should load the classification template", function() {
			this.view.loadTemplate('classificationSection', ClassificationTemplate, classResults, this.model);
		});

		// Runs after every view spec
		afterEach(function() {
			this.model = null;
			// Destroys view instance
			this.view = null;

		});
	});


});