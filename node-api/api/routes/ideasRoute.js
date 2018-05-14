'use strict';
module.exports = function(app) {
  var ideas = require('../controllers/ideasController');

  // ideas Routes
  app.route('/ideas')
    .get(ideas.list_all_ideas)
    .post(ideas.create_a_idea);


  app.route('/ideas/:ideaId')
    .get(ideas.read_a_idea)
    .put(ideas.update_a_idea)
    .delete(ideas.delete_a_idea);
};
