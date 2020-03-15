import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <Link to={routes.home()}>
          <h1>Redwood Blog</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>{' '}
            <li>
              <Link to={routes.contact()}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
