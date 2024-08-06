const router = require('express').Router();

const {createMedia, getAllMedia, getMediaById, updateMedia, deleteMedia} = require('../../controllers/media.controller');

router.post('/', createMedia);
router.get('/', getAllMedia);
router.get('/:media_id', getMediaById);
router.put('/:media_id', updateMedia);
router.delete('/:media_id', deleteMedia);

module.exports = router;
