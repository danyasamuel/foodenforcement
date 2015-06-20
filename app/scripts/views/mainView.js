// MainView.js
// ----------
define([
	'jquery', 'backbone', 'text!templates/main.html', 'text!locale/main.json', 'text!locale/es_mx/main.json',
	'text!templates/classificationTemplate.html','text!templates/distributionPattern.html','text!templates/recallFirmTemplate.html','text!templates/recallStatusTemplate.html',
	'collections/itemsCollection'
], function($, Backbone, template, content, contentES,ClassificationTemplate, DistributionPatternTemplate,RecallFirmTemplate, RecallStatusTemplate,
	ItemsCollection) {
	'use strict';

	// Creates a new Backbone View class object
	var MainView = Backbone.View.extend({
		// The Model associated with this view
		model: '',
		// View constructor
		initialize: function(options) {

			// Set language attribute to support localization
			this.language = (options && options.language) || 'en_us';


		},

		// View Event Handlers
		events: {

		},

		// Renders the view's template to the UI
		render: function() {

			// Setting the view's template property using the Underscore template method
			this.template = _.template(template, {
				content: JSON.parse((this.language == 'en_us') ? content : contentES)
			});

			this.distPattern = _.template(DistributionPatternTemplate,{});
			// Dynamically updates the UI with the view's template
			this.$el.html(this.template);
			this.$el.find('#select-fooditem').selectize();

			//load the advanced search items
			this.loadCollection(window.gblClassificationList,'classificationSection', ClassificationTemplate,this.classficiationCollection,this.model);
			this.loadCollection(window.gblRecallStatusList,'recallStatusSection', RecallStatusTemplate,this.recallStatusCollection,this.model);
			this.loadCollection(window.gblRecallingFirmList,'recallFirmSection', RecallFirmTemplate,this.recallingFirmCollection,this.model);
			this.$el.find('#distributionPatternSection').html(this.distPattern);
			// Maintains chainability
			return this;

		},
		loadCollection: function(selectServiceURL, sectionId, templateName, collectionName, reqModel) {
			collectionName = new ItemsCollection();
			//collectionName.url = (Helper.getEnvironment() === Constants.prodEnv) ? window.gblProdServiceURL : window.gblDevServiceURL + '&' + selectServiceURL;
			collectionName.url = selectServiceURL;
			var self = this;
			collectionName.fetch({
				async: false
			}).done(function() {
				self.loadTemplate(sectionId, templateName, collectionName.sort().toJSON(), collectionName.length, reqModel);
			});
		},
		//load the respective templates
		loadTemplate: function(id, templateName, collectionOfData, maxCount, reqModel) {

			this.subTemplate = _.template(templateName, {
				content: JSON.parse((this.language === 'en_us') ? content : contentES),
				data: collectionOfData,
				reqModel: reqModel,
				maxCount: maxCount
			});

			this.$el.find('#' + id).html(this.subTemplate);
		},
	});

	// Returns the View class
	return MainView;
});