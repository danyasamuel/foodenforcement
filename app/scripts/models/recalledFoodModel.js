// RecalledFoodModel.js
// ----------
define([
	'jquery', 'backbone'
], function($, Backbone) {
	'use strict';

	// Creates a new Backbone Model class object
	var RecalledFoodModel = Backbone.Model.extend({

		// Default values for all of the Model attributes
		defaults: {
			recallNumber:'',
			reasonForRecall:'',
			productDescription:'',
			status:'',
			classification:'',
			distributionPattern:'',
			recallingFirm:'',
			country:'',
			city:'',
			state:'',
			reportDate:''
		},

		// Model Constructor
		initialize: function(details) {
			this.parse(details);
		},

		// Parse model attributes 
		parse: function(data) {
			this.set ({
	            "recallNumber":data.recall_number,
	            "reasonForRecall":data.reason_for_recall,
	            "productDescription":data.product_description,
	            "status":data.status,
	            "classification":data.classification,
	            "distributionPattern":data.distribution_pattern,
	            "recallingFirm":data.recalling_firm,
	            "country":data.country,
	            "city": data.city,
	            "state":data.state,
	            "reportDate":data.report_date
            });
		}

	});

	// Returns the Model class
	return RecalledFoodModel;
});