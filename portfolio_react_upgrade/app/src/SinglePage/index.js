import Apresentation from '../Components/Apresentation/index'
import About from '../Components/About/index'
import {Container} from './style'
function SinglePage() {
    return (
        <Container>
            <Apresentation />
            <About/>
        </Container>
    )
}

export default SinglePage