const Post = require('../models/Post');

module.exports = {
  async indexedDB(req, res) {},

  async StorageEvent(req, res) {
    return res.json({ ok: true });
  }
};
