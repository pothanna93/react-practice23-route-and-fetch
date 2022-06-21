import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = blogDetails

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="link-item">
        <div className="blog-item-container">
          <img src={imageUrl} alt={`item ${id}`} className="blog-image" />
          <div className="blog-item-info">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="author-container">
              <img src={avatarUrl} alt={`avatar${id}`} className="author-img" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
