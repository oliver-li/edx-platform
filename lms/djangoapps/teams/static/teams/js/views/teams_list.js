;(function (define) {
    'use strict';
    define(['backbone', 'common/js/components/views/paging', 'teams/js/views/topic_card'],
        function (Backbone, PagingView, TopicCardView) {
            var TeamsListView = Backbone.View.extend({
                tagName: 'div',
                className: 'topic-list',

                initialize: function() {
                    this.paging_topic_view = new this.PagingTopicView({
                        el: this.el,
                        collection: this.collection
                    });
                },

                render: function() {
                    this.$el.html(this.paging_topic_view.render().$el);
                },

                PagingTopicView: PagingView.extend({
                    renderPageItems: function () {
                        this.collection.each(function(topic) {
                            var topic_card_view = new TopicCardView({model: topic, el: $(".topic-list")});
                            topic_card_view.render();
                        });
                    }
                })
            });
            return TeamsListView;
        });
}).call(this, define || RequireJS.define);
