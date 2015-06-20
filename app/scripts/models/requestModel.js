// RequestModel.js
// ----------
define([
	'jquery', 'backbone'
], function($, Backbone) {
	'use strict';

	// Creates a new Backbone Model class object
	var RequestModel = Backbone.Model.extend({

		// Model URL
		url: '',

		// Default values for all of the Model attributes
		defaults: {

		},

		// Model Constructor
		initialize: function() {

		},

		// Parse model attributes 
		parse: function(data) {
			
		}

	});

	// Returns the Model class
	return RequestModel;
});