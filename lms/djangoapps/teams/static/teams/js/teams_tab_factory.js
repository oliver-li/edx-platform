;(function (define) {
    'use strict';

    define(['jquery', 'teams/js/views/teams_tab', 'teams/js/models/topic'],
        function ($, TeamsTabView, TopicModel) {
            return function () {
                var view = new TeamsTabView({
                    el: $('.teams-content'),
                    topicCollection: new Backbone.Collection([
                        new TopicModel({
                            name: 'Team One',
                            description: 'Team One Description',
                            team_count: 1,
                            id: 'team_one'
                        }),
                        new TopicModel({
                            name: 'Team Two',
                            description: 'Team Two Description',
                            team_count: 2,
                            id: 'team_two'
                        }),
                        new TopicModel({
                            name: 'Team Three',
                            description: 'Team Three Description',
                            team_count: 3,
                            id: 'team_three'
                        })
                    ])
                });
                view.render();
            };
        });
}).call(this, define || RequireJS.define);
