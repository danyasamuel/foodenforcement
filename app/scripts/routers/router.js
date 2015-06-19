
define([
    'jquery',
    'backbone',
    'models/requestModel',
    'views/searchView'
], function ($, Backbone, RequestModel, SearchView) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        initialize: function() {
                this.requestModel = new RequestModel();
                Backbone.history.start();
            },

        routes: {
            '':'index'
        },

        index:function(){
            this.searchView = new SearchView({model:this.requestModel});
            $('#main-content').html(this.searchView.render().el);
        }
    });

    return RouterRouter;
});
