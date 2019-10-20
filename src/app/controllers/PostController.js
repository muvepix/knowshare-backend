import Post from '../models/Post';

class PostController {
  async index(req, res) {
    const posts = await Post.findAll({
      where: { active: 1 },
    });

    return res.status(200).json(posts);
  }

  async store(req, res) {
    const { title, author, description, hashtags, link } = req.body;

    const post = await Post.create({
      title,
      author,
      description,
      hashtags,
      link,
    });

    return res.status(201).json(post);
  }
}

export default new PostController();
