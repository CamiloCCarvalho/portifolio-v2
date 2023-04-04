import {ContainerAbout, CardAbout, Text, Title3, TextBox} from './styles'

const AboutPage = () => {

    return (
        <ContainerAbout>

            <CardAbout className="card">
                <Title3>Sobre Min</Title3>

                <TextBox className="card-body">
                    <Text className="card-text">Desenvolvedor Front-end, tenho 29 anos, com experiência em React.js, JavaScript, Html, Css, Sass, TypeScript, Styled Components, BootStrap e consumo de APIs REST. Amante de tecnologia desde criança. Já com bagagem profissional de outras áreas, e bom desenvolvimento de SoftSkills. Formado em outra área porem cursando Especialização em FullStack.</Text>
                </TextBox>
            </CardAbout>

            <CardAbout className="card">
                <Title3>Formação</Title3>

                <TextBox className="card-body">
                    <ul>
                        <li>
                            <Text className="card-text">Ensino Médio Técnico pela, ETEP - Professor Everardo Passos - (2009 - 2011)</Text>
                        </li>
                        <li>
                            <Text className="card-text">Médio Tecnico ETEP - Mecanica Industrial - (2009 - 2011)</Text>
                        </li>
                        <li>
                            <Text className="card-text">Superior Concluido Gestão de Recursos Humanos, Anhanguera Educacional (2013 - 2015)</Text>
                        </li>
                    </ul>
                </TextBox>
            </CardAbout>

            <CardAbout className="card">
                <Title3>Experiência</Title3>

                <TextBox className="card-body">
                    <ul>
                        <li>
                            <Text className="card-text">TIVIT - Operador de CallCenter Receptivo - (2012 - 2015)</Text>
                        </li>
                        <li>
                            <Text className="card-text">C&A - Operador de Caixa - (2015 - 2016)</Text>
                        </li>
                        <li>
                            <Text className="card-text">Transporte Público Alternativo - Motorista(D) - (2016 - 2021)</Text>
                        </li>
                        <li>
                            <Text className="card-text">ATENTO - Analista de CallCenter Receptivo - (2022 - Presente)</Text>
                        </li>
                    </ul>
                </TextBox>
            </CardAbout>

            <CardAbout className="card">
                <Title3>Certificação</Title3>
                <TextBox className="card-body">

                    <ul>
                        <li>
                            <Text className="card-text">DATABYTE - Informática Administrativa Comum: Curso de Office usando as principais aplicações windows para trabalho. PowerPoint, Excell, Access, Word. (2012 - Certificado)</Text>
                        </li>
                        <li>
                            <Text className="card-text">TIVIT - GERA: Curso Interno da Empresa com foto no desenvolvimento de softskils. Comunicação, Trabalho em Equipe, Apresentação de Projetos e Cases. (2014 - Certificado)</Text>
                        </li>
                        <li>
                            <Text className="card-text">ONEBITCODE - FULLSTACK JAVASCRIPT: Especialização em Front-End e BackEnd usando as principais ferramentas do mercado. React, BootStrap, Node, Vue, Next, MongoDB, PostMan, PostGree entre outras. (2023 - Em curso)</Text>
                        </li>
                    </ul>
                </TextBox>
            </CardAbout>

        </ContainerAbout>
    )

}

export default AboutPage
