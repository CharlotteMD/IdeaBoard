const Idea = require('../models/idea');

function ideasCreate(req, res, next) {
  req.body.uniqueID = Math.floor(1000 + Math.random() * 9000);
  Idea

    .create(req.body)
    .then(idea => res.status(201).json(idea))
    .catch(next);
}

function ideasIndex(req, res, next) {
  Idea
    .find()
    .exec()
    .then(ideas => res.json(ideas))
    .catch(next);
}

function ideasShow(req, res, next) {
  Idea
    .findById(req.params.id)
    .exec()
    .then((idea) => {
      if(!idea) return res.notFound();
      res.json(idea);
    })
    .catch(next);
}

function ideasUpdate(req, res, next) {
  Idea
    .findById(req.params.id)
    .exec()
    .then((idea) => {
      if(!idea) return res.notFound();
      idea = Object.assign(idea, req.body);
      return idea.save();
    })
    .then(idea => res.json(idea))
    .catch(next);
}

function ideasDelete(req, res, next) {
  Idea
    .findById(req.params.id)
    .exec()
    .then((idea) => {
      if(!idea) return res.notFound();
      return idea.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  create: ideasCreate,
  index: ideasIndex,
  show: ideasShow,
  update: ideasUpdate,
  delete: ideasDelete
};
