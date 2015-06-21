// RecalledFoodModel.spec.js
// ----------
define([
	'jquery', 'backbone', 'models/recalledFoodModel'
], function($, Backbone, RecalledFoodModel ) {
	'use strict';

	// Jasmine Model Test suite for recalledFoodModel  
	describe('recalledFoodModel: ' , function() {
		
		// Runs before every Model spec
		beforeEach(function() {
			
			// Instantiates a new Model instance
			this.model = new RecalledFoodModel() ;

		});

		// Tests if the model is properly defined
		it('should be defined', function() {
			
			expect(this.model).toBeDefined();

		});

		// Runs after every model spec
		afterEach(function() {

			// Destroys model instance
			this.model = null;

		});
	});


});