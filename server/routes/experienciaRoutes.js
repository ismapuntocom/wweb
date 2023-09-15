const  express = require('express');
const router = express.Router();
const expController = require('../controllers/expController');
const getExpController = require('../controllers/getExpController');



router.get('/experiencias', expController.obtenerExperiencias);
router.get('/experiencias/:id', getExpController.obtenerExperienciaPorId);

module.exports = router;