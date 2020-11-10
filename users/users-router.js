const router = require('express').Router();
const Users = require('../users/users-model');

const restrictedRoute = require('../auth/restricted-middleware');

router.get("/", restrictedRoute, (req, res) => {
    Users.findUser()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => res.send(err));
  });



module.exports = router;