import styles from '../styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ViewSource from '../components/view-source'

const Code = (p) => <code className={styles.inlineCode} {...p} />

const Index = () => (
  <div className={styles.container}>
    <ViewSource pathname="pages/index.js" />
    <div className={styles.card}>
          <Link href="/background">
            <a><h1>WERE YOU GOT?</h1></a>
          </Link>
    </div>
  </div>
)

export default Index
