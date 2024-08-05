const express = require('express');
const router = express.Router();
const mediaController = require('../../controllers/media.controller');

router.post('/', mediaController.createMedia);
router.get('/', mediaController.getAllMedia);
router.get('/:media_id', mediaController.getMediaById);
router.put('/:media_id', mediaController.updateMedia);
router.delete('/:media_id', mediaController.deleteMedia);

module.exports = router;
