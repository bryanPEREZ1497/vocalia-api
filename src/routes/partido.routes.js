const { Router } = require('express');
const router = Router();
const partidoControllers = require('../controllers/partido.controller');

router.get('/partidos/:id', partidoControllers.getPartido);
router.get('/partidos', partidoControllers.getPartidos);
router.post('/partidos', partidoControllers.savePartido);
router.put('/partidos/:id', partidoControllers.updatePartido);
// router.delete('/partidos/:id',);

module.exports = router;