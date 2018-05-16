const router = require('express').Router();

const ideas  = require('../controllers/ideas');

router.route('/ideas')
  .get(ideas.index)
  .post(ideas.create);

router.route('/ideas/:id')
  .get(ideas.show)
  .put(ideas.update)
  .delete(ideas.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
