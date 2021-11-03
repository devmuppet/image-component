import Image from 'next/image'
import ViewSource from '../components/view-source'
import { bgWrap, bgText } from '../styles.module.css'

const Background = () => (
  <div>
    <ViewSource pathname="pages/background.js" />
    <div className={bgWrap}>
      <Image
        alt="ewergot"
        src="/IMG-20211103-WA0012.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <p className={bgText}>
      EWERGOT
    </p>
  </div>
)

export default Background
