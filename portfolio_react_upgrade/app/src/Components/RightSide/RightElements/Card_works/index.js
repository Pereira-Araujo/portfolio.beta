import { Card,ImageGallery } from './style'

import Carousel from 'react-bootstrap/Carousel'
import Astromach from '../../../../assets/works/astromach.png'
import Chat from '../../../../assets/works/chat.png'
import ChuckJoke from '../../../../assets/works/joke.png'
import Upfour from '../../../../assets/works/upfour.png'



function Works() {
  return (
    <Card className={'blocks block_right'}>
      {/* bootstrap */}
      <div>
      <ImageGallery
      src={Astromach}/>
      </div>
      {/* bootstrap */}
    </Card>
  )
}

export default Works
