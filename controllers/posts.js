import Post from '../models/post.js'

export const getPosts = async (req, res) => {
  try {
    const post = await Post.find()
    res.json(post)
  } catch (error) {
    // res.status(500).json({ error: error.message })
    res.status(500).send(error.message)
  }
}

export const getPost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    if (post) {
      return res.json(post)
    }
    res.status(404).json({ message: 'Post not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}