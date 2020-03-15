import BlogLayout from '../../layouts/BlogLayout'
import BlogPostCell from '../../components/BlogPostCell'

const BlogPostPage = ({ id }) => {
  return (
    <BlogLayout>
      <BlogPostCell id={id} />
    </BlogLayout>
  )
}

export default BlogPostPage
