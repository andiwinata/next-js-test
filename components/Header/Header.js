import Link from 'next/link'
import styles from './styles.scss'

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <a className={styles.link}>Home</a>
    </Link>
    <Link href="/about">
      <a className={styles.link}>About</a>
    </Link>
  </header>
)

export default Header