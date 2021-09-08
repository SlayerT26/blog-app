import './PostCard.css';
import { Link } from 'react-router-dom'

const PostCard = (props) => {
    return (
        <div className="post-card">
            <Link className="card" to={`/posts/${props._id}`}>
                <img className="post-card-image" src={props.image_url} alt={props.name} />
                <div>View</div>
            </Link>
        </div>
    )
}
export default PostCard