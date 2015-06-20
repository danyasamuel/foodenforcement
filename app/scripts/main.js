// Main application 
require(['config/config'], function() {
    'use strict';
    require(['jquery', 'backbone', 'jqueryui', 'respond', 'bootstrap','geocomplete', 'selectize', 'config/globals','routers/router', 'views/headerView', 'views/footerView',
         'blockui'],
        function($, Backbone, jqueryui, respond, bootstrap, geocomplete,globals, selectize,Router, HeaderView, FooterView,
            ModelBinder, BBValidation, ValidationHelper, BBValidateAll, backboneHelper, BlockUI) {

            $(document).ready(function() {

                $.blockUI.defaults.message = "<h1>Please wait...</h1>";
                $(document).ajaxStart($.blockUI).ajaxSuccess($.unblockUI);
                
            	new HeaderView();
    			new FooterView();

                // initialize router
                new Router();
            });
          
        });
});