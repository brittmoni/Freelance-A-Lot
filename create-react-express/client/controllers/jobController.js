const db = require('../../models');

module.exports= {
  findAll: function(req, res) {
    db.Jobs
      .find(req.query)
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  },
  findById: function(req, res) {
    db.Jobs
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Jobs
      .create({
        name: req.body.name,
        description: req.body.description
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Jobs
      .findById({_id: req.params.id})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.JSON(dbModel))
      .catch(err => res.status(422).json(err));
  }
}