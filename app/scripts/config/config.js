// Require.js Configurations
// -------------------------
require.config({

    // Sets the js folder as the base directory for all future relative paths
    //~~baseUrl: '/app/',

    paths: {

        // Core Libraries
        // ---------------
        backbone: '../vendor/backbone/backbone',

        bootstrap: '../vendor/bootstrap/bootstrap',

        jpanel: '../vendor/jpanelmenu/jquery.jpanelmenu',

        jquery: '../vendor/jquery/jquery',

        jqueryui: '../vendor/jqueryui/jquery-ui',

        underscore: '../vendor/lodash/lodash',

        respond: '../vendor/respond/respond.src',
        
        text: '../vendor/requirejs-text/text',

        selectize: '../vendor/selectize/selectize',

        sifter: '../vendor/sifter/sifter',

        microplugin: '../vendor/microplugin/microplugin',

        geocomplete: '../vendor/geocomplete/jquery.geocomplete',

        blockui: '../vendor/blockui/jquery.blockUI',

        sinon: '../vendor/sinonjs/sinon' ,

        backboneModelBinder: '../vendor/Backbone.ModelBinder/Backbone.ModelBinder',

        backboneValidateAll: '../vendor/Backbone.validateAll/Backbone.validateAll',

        backboneValidation: './helpers/backboneValidation',

        slider:'../vendor/bootstrap-slider/bootstrap-slider.min'
        
    },

    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {

        // Twitter Bootstrap jQuery plugins
        bootstrap: ['jquery'],

        // Backbone
        backbone: {

            // Depends on underscore/lodash and jQuery
            'deps': ['underscore', 'jquery'],

            // Exports the global window.Backbone object
            'exports': 'Backbone'

        },

        // jQuery UI
        jqueryui: ['jquery'],

        // jQuery Panel Menu plugin that depends on jQuery
        jpanel: ['jquery'],

        selectize: {
            deps: ['jquery', 'bootstrap', 'sifter', 'microplugin'],
            exports: 'Selectize'
        },

        geocomplete:{
            deps:['jquery'],
            exports:'geocomplete'
        },
        blockui: {
            "deps": ["jquery", "jqueryui"],
            "exports": "blockui"
        },
        sinon: {
            // Depends on underscore/lodash and jQuery
            'deps': ['jquery'],

            // Exports the global window.Backbone object
            'exports': 'sinon'
        },
        // Backbone.validateAll plugin that depends on Backbone
        backboneValidateAll: {
            'deps': ['jquery', 'underscore', 'backbone'],
            'exports': 'backboneValidateAll'
        },

        // Backbone.ModelBinder plugin that depends on Backbone
        backboneModelBinder: {
            'deps': ['jquery', 'underscore', 'backbone'],
            'exports': 'backboneModelBinder'
        },

        backboneValidation: {
            'deps': ['jquery', 'underscore', 'backbone', 'backboneValidateAll'],
            'exports': 'backboneValidation'
        },

        slider:{
            deps: ['jquery', 'bootstrap'],
            exports: 'slider'
        }
    }

});