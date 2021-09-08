import { useState, useEffect } from 'react'
import './PostEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getPost, updatePost } from '../../services/posts'

const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: '',
    description: '',
    image_url: '',
  })

  const [isUpdated, setUpdated] = useState(false)
  let { _id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(_id)
      setPost(post)
    }
    fetchPost()
  }, [_id])

  const handleChange = (event) => {
    const { title, value } = event.target
    setPost({
      ...post,
      [title]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updatePost(_id, post)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/posts/${_id}`} />
  }

  return (
    <Layout>
      <div className='post-edit'>
        <div className='image-container'>
          <img
            className='edit-post-image'
            src={post.image_url}
            alt={post.title}
          />
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={post.image_url}
              name='image_url'
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-title'
            placeholder='Title'
            value={post.title}
            name='name'
            required
            autoFocus
            onChange={handleChange}
          />
          <textarea
            className='textarea-description'
            rows={10}
            cols={78}
            placeholder='Description'
            value={post.description}
            name='description'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default PostEdit