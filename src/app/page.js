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


export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Scene />
    </main>
  )
}
