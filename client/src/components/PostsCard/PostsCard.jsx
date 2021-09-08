import { useState, useEffect } from 'react'
import './PostsCard.css'
import PostCard from '../PostCard/PostCard'
import { getPosts } from '../../services/posts'

const PostsCard = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])

  const CARDS = posts
    .reverse()
    .map((post, index) =>
      index < 8 ? (
        <PostCard
        name={post.title}
        image_url={post.image_url}
        description={post.description}
          key={index}
        />
      ) : null
    )

  return (
    <div className='post-cards'>
      <div className='latest'>LATEST</div>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default PostsCard
