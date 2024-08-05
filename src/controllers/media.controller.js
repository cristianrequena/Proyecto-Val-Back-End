const Media = require('../models/media.model');

const getAllMedia = async (req, res, next) => {
    try {
        const [media] = await Media.selectAll();
        res.json(media);
    } catch (err) {
        next(err);
    }
};

const getMediaById = async (req, res, next) => {
    try {
        const [media] = await Media.selectById(req.params.media_id);
        if (media.length === 0) {
            return res.status(404).json({ error: "Media not found" });
        }
        res.json(media[0]);
    } catch (err) {
        next(err);
    }
};

const createMedia = async (req, res, next) => {
    try {
        const [newMedia] = await Media.insert(req.body);
        const [[media]] = await Media.selectById(newMedia.insertId);
        res.json(media);
    } catch (err) {
        next(err);
    }
};

const updateMedia = async (req, res, next) => {
    try {
        const { media_id } = req.params;
        await Media.updateById(media_id, req.body);
        const [[media]] = await Media.selectById(media_id);
        res.json(media);
    } catch (err) {
        next(err);
    }
};

const deleteMedia = async (req, res, next) => {
    try {
        const { media_id } = req.params;
        const [result] = await Media.deleteById(media_id);
        if (result.affectedRows === 1) {
            res.json({ message: "Media deleted" });
        } else {
            res.status(404).json({ message: "Media not found" });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllMedia,
    getMediaById,
    createMedia,
    updateMedia,
    deleteMedia,
};
