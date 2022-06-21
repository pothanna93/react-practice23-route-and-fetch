import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div className="blog-info">
        <h1 className="title-blog">{title}</h1>
        <div className="author-details">
          <img src={avatarUrl} alt={author} className="author-image" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-img" />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-info-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" width={50} height={50} />
          </div>
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
