const express = require('express');
const router = express.Router();
const { authenticate, authorizeAdmin, getUserRoleFromDb } = require('../middlewares/middlewares');
const ctrl = require('../controllers/controllers')

router.get('/', (req, res) => {
    res.send("Acasa");
});

router.get('/toateSortimentele', ctrl.getAllSortimente);

router.get('/toateSortimentele/:sortimentId', ctrl.getSortimentById);


router.post('/toateSortimentele/add', authenticate, authorizeAdmin, (req, res, next) => {
    next();
}, ctrl.addSortiment);

router.post('/toateSortimentele/edit/:sortimentId', authenticate, authorizeAdmin, ctrl.editSortiment);

router.post('/toateSortimentele/generate', authenticate, authorizeAdmin, ctrl.generateSortimente);

router.delete('/toateSortimentele/:sortimentId', authenticate, authorizeAdmin, ctrl.deleteSortiment);


router.get('/verificare', authenticate, async (req, res) => {
  try {
    const rol = await getUserRoleFromDb(req.user.uid);
    return res.json({ rol });
  } catch (error) {
    console.error('Eroare de citire a rolului:', error);
    return res.status(500).json({ message: 'Eroare internă.' });
  }
});

module.exports = router;

