import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Hello World', body: 'My first blog has...', author: 'momoko', id: 1 },
    { title: 'I am tired', body: 'Todday was such a busy...', author: 'momoko', id: 2 },
    { title: 'Studying English', body: 'English is a difficult...', author: 'momoko', id: 3 },
  ])
  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!" />
    </div>
  );
}

export default Home;