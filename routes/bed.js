const express = require('express');
const router = express.Router();
const bedController = require('../controllers/bedcontroller');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.post('/', bedController.createBed);
router.get('/', bedController.getBeds);
router.get('/:id', bedController.getBedById);
router.put('/:id', bedController.updateBed);
router.delete('/:id', bedController.deleteBed);

module.exports = router;
