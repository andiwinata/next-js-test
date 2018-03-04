import axios from 'axios'
import Link from 'next/link'
import Header from '../components/Header/Header'
import css from './indexo.scss'
import css2 from './indexo2.scss'

const Index = (props) => (
  <main className={css.main}>
    <Header />
    <p>Hello</p>

    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </main>
)

Index.getInitialProps = async function () {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
  const { data } = res

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
