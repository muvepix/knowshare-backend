/* eslint-disable no-underscore-dangle */
import Post from '../models/Post';
import User from '../models/User';

class DislikeController {
  async store(req, res) {
    const { id } = req.params;
    const { user_id } = req.headers;

    const post = await Post.findById(id);
    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not exists' });
    }

    if (post.dislikes.map(p => p === user.id)) {
      return res.status(400).json({ error: 'Já deu dislike' });
    }

    post.dislikes.push(user._id);

    await post.save();

    return res.json(post);
  }
}

export default new DislikeController();
