import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
/*

    Yes 

*/


function About() {
    return (
    
    <div className={styles.container}>
      <Head>
        <title>About | Wellcome to the SinanZone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          About
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
        lorem ipsum dolor sit amet ten ten lorem ipsum dolor sit amet ten  ipsum dolor <br></br>
        lorem ipsum dolor sit amet ten ten lorem ipsum dolor sit et ten  ipsum dolor <br></br>
        lorem ipsum dolor sit amet ten ten lorem ipsum dolor sit amet ten  ipsum dolor <br></br>
        lorem ipsum dolor   ipsum dolor <br></br>
        lorem ipsum dolor sit amet ten ten lorem ipsum dolor sit amet ten  ipsum dolor <br></br>
        lorem ipsum dolor sit amet ten teorem ipsum dolor sit amet ten  ipsum dolor <br></br>
        lorem ipsum dolor sit amet tenen lorem ipsum dolor sit amet ten  ipsum dolor <br></br>
        lorem ipsum dolor sit amen ten lorem ipsum dolor sit amet ten  ipsum dolor <br></br>
        </p>
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
  
  export default About