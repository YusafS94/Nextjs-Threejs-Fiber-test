import styles from './page.module.css'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
})

function Nav() {
  return (
    <>
      <nav>
        <ul className='nav'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

    </>
  )
}

function Footer() {
  return (
    <>
      <Footer className="footer">
        <h3>Test footer</h3>
        <p>Sitemap</p>
        <ul>
          <li>Page 1</li>
          <li>Page 2</li>
          <li>Page 3</li>
        </ul>
      </Footer>
    </>
  )
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Scene />
      <Footer />
    </main>
  )
}
