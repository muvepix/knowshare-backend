/* eslint-disable no-underscore-dangle */
import Post from '../models/Post';

class LikeController {
  async store(req, res) {
    await Post.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { likes: '5dabb5a130a22d41e0eec2e2' } },
      function(err, post) {
        console.log(post);
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: 'Inserido com sucesso!' });
      }
    );
  }
}

export default new LikeController();
