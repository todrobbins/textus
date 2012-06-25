define([ 'jquery', 'underscore', 'backbone', 'text!templates/listTextsView.html' ], function($, _, Backbone,
		layoutTemplate) {
	return Backbone.View.extend({

		el : '.main',

		intialize : function() {
		},

		render : function() {
			$(this.el).html(layoutTemplate);
			$('#facetText').facetview({
				search_url : '/api/texts-es?',
				search_index : 'elasticsearch',
				facets : [ {
					'field' : 'author.name',
					'display' : 'author'
				}, {
					'field' : 'year',
					'display' : 'year'
				} ],
			});
		}

	});

});