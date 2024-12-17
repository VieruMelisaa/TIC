const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/middlewares');

router.get('/', (req, res) => {
    res.send("Acasa");
});

router.get('/verificare', authenticate, async (req, res) => {
    res.json({ user: req.user });
  });
  
module.exports = router;
