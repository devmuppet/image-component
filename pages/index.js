import styles from '../styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ViewSource from '../components/view-source'
import vercel from '../public/vercel.png'

const Code = (p) => <code className={styles.inlineCode} {...p} />

const Index = () => (
  <div className={styles.container}>
    <ViewSource pathname="pages/index.js" />
    <div className={styles.card}>
          <Link href="pages/layout-responsive.js">
            <a><h1>WERE YOU GOT?</h1></a>
          </Link>
    </div>
  </div>
)

export default Index
