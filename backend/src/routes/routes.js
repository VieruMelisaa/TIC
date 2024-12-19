const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/middlewares');

router.get('/', (req, res) => {
    res.send("Acasa");
});

router.get('/verificare', authenticate, async (req, res) => {
    res.json({ user: req.user });
  });

router.get('/toateSortimentele', authenticate, exports.getAllSortimente);
router.post('/toateSortimentele/add', authenticate, exports.addSortiment);

module.exports = router;
