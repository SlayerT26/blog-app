import './Home.css'
import PostsCard from '../../components/PostsCard/PostsCard'
import Layout from '../../components/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <PostsCard />
      </div>
    </Layout>
  )
}

export default Home