import './Post.css';
import { Link } from 'react-router-dom'

const Post = (props) => {
    return (
        <>
            <Link className="post" to={`/posts/${props._id}`}>
                <div className="title">{props.title}</div>
                <img className="post-image" src={props.image_url} alt={props.title} />
                <div className="post-description">{props.description}</div>
            </Link>
        </>
    )
}
export default Post