import Link from 'next/link'
import styles from './styles.scss'

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </header>
)

export default Header