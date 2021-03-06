import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wellcome to the SinanZone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/sinanisler"  target='_blank' rel="noreferrer">SinanZone!</a>
        </h1>


        <nav className={styles.navmenu}>
        <Link href="/" replace>
            <a>Sinan Zone!</a>
          </Link>
          <Link href="/about" replace>
            <a>About us</a>
          </Link>
          <Link href="/contact" replace>
            <a>Contact</a>
          </Link>
        </nav>


        <p className={styles.description}>
          The NextJS SinanZone testing...<br></br>
          The SinanZone may include stupid amount of React tests for no reason whatsoever.<br></br>
          The SinanZone will find you in your dreams and will eat your code.<br></br>
        </p>

        <div className={styles.grid}>
          <a href="https://sinanisler.com" className={styles.card} target='_blank' rel="noopener noreferrer">
            <h2>Sinanisler.com &rarr;</h2>
            <p>The best blog in the planet Zartha.</p>
          </a>

          <a href="https://atarikafa.com" className={styles.card} target='_blank' rel="noopener noreferrer">
            <h2>AtariKafa.com &rarr;</h2>
            <p>MC gaming and modding website you will ever see!</p>
          </a>

          <a
            href="https://www.atarikafa.com/topluluk/" className={styles.card2} target='_blank' rel="noopener noreferrer">
            <h2>AtariKafa.com/Topluluk &rarr;</h2>
            <p>A gaming community forum and social space for prople to have chat and share some knowledge.</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://sinanisler.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/favicon.png" alt="Vercel Logo" width={16} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
