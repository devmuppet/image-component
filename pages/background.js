import Image from 'next/image'
import ViewSource from '../components/view-source'
import { bgWrap, bgText } from '../styles.module.css'
import styles from '../styles.module.css'


const Code = (p) => <code className={styles.inlineCode} {...p} />

const Background = () => (
  <div>
    <ViewSource pathname="pages/background.js" />
    <div className={styles.container}>
      <Image
        alt="ewergot"
        src="/IMG-20211103-WA0012.jpg"
        quality={100}
      />
    </div>
    <p className={bgText}>
      EWERGOT
    </p>
  </div>
)

export default Background
