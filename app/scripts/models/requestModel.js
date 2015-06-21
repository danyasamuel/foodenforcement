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
			searchTerms:'',
			classification:'',
			recallFirm:'',
			distributionPattern:'',
			recallStatus:''
		},

		clearModel: function() {
			this.set({
				searchTerms:'',
				classification:'',
				recallFirm:'',
				distributionPattern:'',
				recallStatus:''
			});
		},

		generateURL: function() {
			var serviceURL = '';
			serviceURL = window.gblResults + 'search=product_description:' + this.get('searchTerms').replace(',','+');
			serviceURL = serviceURL + '&limit=5'

			return serviceURL
		}
	});

	// Returns the Model class
	return RequestModel;
});