import { useState, useEffect } from 'react'
import './PostDetail.css'
import Layout from '../../components/Layout/Layout'
import { getPost, deletePost } from '../../services/posts'
import { useParams, Link } from 'react-router-dom'

const PostDetail = (props) => {

  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { _id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(_id)
      setPost(post)
      setLoaded(true)
    }
    fetchPost()
  }, [_id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <div className="post-detail">
        <img className="post-detail-image" src={post.image_url} alt={post.title} />
        <div className="detail">
          <div className="name">{post.title}</div>
          <div className="description">{post.description}</div>
          <div className="button-container">
            <button className="edit-button"><Link className="edit-link" to={`/posts/${post._id}/edit`}>Edit</Link></button>
            <button className="delete-button" onClick={() => deletePost(post._id)}>Delete</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostDetail