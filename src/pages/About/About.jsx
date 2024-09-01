import { Link } from 'react-router-dom'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.about}>
      <h2>sOBRE O Mini <span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito com react e firebase</p>
      <Link to={"/posts/create"} className='btn'>Criar post</Link>
    </div>
  )
}

export default About
