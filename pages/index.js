import Login from './login'
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main>
        <Navbar />

        <Login />


      </main>

      <footer>
        
      </footer>
    </div>
  )
}
