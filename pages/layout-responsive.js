import Image from 'next/image'
import ViewSource from '../components/view-source'
import mountains from '../public/IMG-20211103-WA0012.jpg'

const Responsive = () => (

  <div className={styles.container}>
  <div className={styles.card}>
    <ViewSource pathname="pages/layout-responsive.js" />
    <Image
      alt="ewergot"
      src={mountains}
      layout="responsive"
    />
  </div>
  </div>
)

export default Responsive
