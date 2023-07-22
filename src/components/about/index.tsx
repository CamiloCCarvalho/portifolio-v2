import {ContainerAbout, CardAbout, Text, Title3, TextBox, TextLink} from './styles'

const AboutPage = () => {

    return (
        <ContainerAbout>

            <CardAbout className="card">
                <Title3>Sobre</Title3>

                <TextBox className="card-body">
                    <Text className="card-text">Sou desenvolvedor Front-end e RPA com 30 anos de idade. Tenho experiência em projetos pessoais utilizando tecnologias como React.js, JavaScript, HTML, CSS, Sass, TypeScript, Styled Components, BootStrap, consumo de APIs REST, Python, Flask e Botcity. Sou apaixonado por tecnologia desde a infância e possuo experiência profissional em outras áreas, o que me permitiu desenvolver excelentes SoftSkills. Tenho formação em Recursos Humanos e atualmente estou participando de um estagio como desenvolvedor RPA na empresa <TextLink target="_blank" role="link" to="https://triasoftware.com.br/">Tria Software &#x2191;.</TextLink></Text>
                </TextBox>
            </CardAbout>

            <CardAbout className="card">
                <Title3>Formação</Title3>

                <TextBox className="card-body">
                    <ul>
                        <li>
                            <Text className="card-text">Ensino Médio Técnico pela ETEP - Professor Everardo Passos (2009 - 2011)</Text>
                        </li>
                        <li>
                            <Text className="card-text">Técnico em Mecânica Industrial pela ETEP (2009 - 2011)</Text>
                        </li>
                        <li>
                            <Text className="card-text">Graduação em Gestão de Recursos Humanos pela Anhanguera Educacional (2013 - 2015)</Text>
                        </li>
                    </ul>
                </TextBox>
            </CardAbout>

            <CardAbout className="card">
                <Title3>Experiência</Title3>

                <TextBox className="card-body">
                    <ul>
                        <li>
                            <Text className="card-text">TIVIT - Operador de Call Center Receptivo (2012 - 2015)</Text>
                        </li>
                        <li>
                            <Text className="card-text">Transporte Público - Motorista (Categoria D) (2016 - 2021)</Text>
                        </li>
                        <li>
                            <Text className="card-text">ATENTO - Analista de Call Center Receptivo (2022 - Presente)</Text>
                        </li>
                        <li>
                            <Text className="card-text">TRIA SOFTWARE - Estagiário desenvolvedor RPA - Python (05/2023 - Presente)</Text>
                        </li>
                    </ul>
                </TextBox>
            </CardAbout>

            <CardAbout className="card">
                <Title3>Certificação</Title3>
                <TextBox className="card-body">

                    <ul>
                        <li>
                            <Text className="card-text">TIVIT - [20h] GERA: Curso interno da empresa focado no desenvolvimento de soft skills, incluindo comunicação, trabalho em equipe, apresentação de projetos e cases (2014 - Certificado).</Text>
                        </li>
                        <li>
                            <Text className="card-text">ONEBITCODE - [80h] FULLSTACK JAVASCRIPT: Especialização em Front-End e Back-End usando as principais ferramentas do mercado, incluindo React, BootStrap, Node, Next, MongoDB, PostGreeSQL entre outras (2023 - Em curso).</Text>
                        </li>
                        <li>
                            <Text className="card-text">UDEMY - [60h] LÓGICA DE PROGRAMAÇÃO: Curso básico de programação e lógica de programação com as linguagens C, C++, C#, Java e Python (2023 - Concluído pela Tria Software).<TextLink target="_blank" role="link" to="https://github.com/CamiloCCarvalho/learning-python#conte%C3%BAdo"> Veja mais aqui &#x2191;.</TextLink></Text>
                        </li>
                        <li>
                            <Text className="card-text">UDEMY - [90h] PYTHON ESSENCIAL: Curso sobre a linguagem Python abordando tópicos como variáveis, funções, listas, tuplas, dicionários, conjuntos, list comprehension, generators, decorators, módulos, POO, testes, lambda, manipulação de arquivos CSV e JSON, gerenciamento de memória e checagem de tipos (2023 - Concluído pela Tria Software).<TextLink target="_blank" role="link" to="https://github.com/CamiloCCarvalho/learning-python#conte%C3%BAdo"> Veja mais aqui &#x2191;.</TextLink></Text>
                        </li>
                    </ul>
                </TextBox>
            </CardAbout>

        </ContainerAbout>
    )

}

export default AboutPage
