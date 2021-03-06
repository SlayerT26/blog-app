import { useState } from 'react'
import './PostCreate.css'
import Layout from '../../components/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createPost } from '../../services/posts'

const PostCreate = (props) => {

  const [post, setPost] = useState({
    title: '',
    description: '',
    image_url: ''
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { title, value } = event.target
    setPost({
      ...post,
      [title]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createPost(post)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/posts`} />
  }
  return (
    <Layout>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-title"
          placeholder='Title'
          value={post.title}
          name='title'
          required
          autoFocus
          onChange={handleChange}
        />
        <textarea
          className="textarea-description"
          rows={10}
          placeholder='Description'
          value={post.description}
          name='description'
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder='Image Link'
          value={post.image_url}
          name='image_url'
          required
          onChange={handleChange}
        />
        <button type='submit' className="submit-button">Submit</button>
      </form>
    </Layout>
  )
}

export default PostCreate