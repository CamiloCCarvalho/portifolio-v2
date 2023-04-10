import {ContainerHome} from './styles'
import ContainerIntro from './intro'
import ContainerStacks from './stacks'
import ContainerPort from './port'


const HomePage:React.FC = () => {
    return (
        <ContainerHome className="container-fluid m-0 p-0">
            <ContainerIntro/>
            <ContainerStacks/>
            <ContainerPort/>
        </ContainerHome>
    )
}
export default HomePage