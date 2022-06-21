import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {
    blogData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData} = this.state
    const {isLoading} = this.state
    return (
      <div className="blog-list-container">
        <ul className="blogs-list">
          {isLoading ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#00bfff" width={50} height={50} />{' '}
            </div>
          ) : (
            blogData.map(eachBlog => (
              <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default BlogList
