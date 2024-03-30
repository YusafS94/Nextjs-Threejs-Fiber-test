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
      <div className='footer'>
        <h3>Footer links</h3>
        <ul className='footer-pages'>
          <li>Page 1</li>
          <li>Page 2</li>
          <li>Page 4</li>
        </ul>
      </div>
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
