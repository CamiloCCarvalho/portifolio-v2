import {ContainerAbout, CardAbout, Text, Title3, TextBox, TextLink} from './styles'

const my_personal_text_part1 = "Me chamo Camilo, fiz transição de carreira recentemente em 2023 e atuo como Desenvolvedor RPA com Python e BotCity e também tenho um pequeno conhecimento em Front-End."

const my_personal_text_part2 = " Sou apaixonado por tecnologia desde a infância. Possuo experiência profissional em outras áreas o que me permitiu desenvolver SoftSkills. Tenho formação em Recursos Humanos e atualmente atuo como Dev RPA pela "

const empresa = "Tria Software "
const repos = "Ver Repositórios "

const AboutPage = () => {


    return (
        <ContainerAbout>

            <CardAbout className="card">
                <Title3>Sobre</Title3>

                <TextBox className="card-body">
                    <Text className="card-text"> {my_personal_text_part1}</Text>
                    <Text className="card-text"> {my_personal_text_part2} <TextLink target="_blank" role="link" to="https://triasoftware.com.br/">{empresa}&#x2191;.</TextLink></Text>
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
                            <Text className="card-text">MOTORISTA (D) - Transporte Passageiros (2016 - 2021)</Text>
                        </li>
                        <li>
                            <Text className="card-text">ATENTO - Analista de Call Center Receptivo (2022 - 2023)</Text>
                        </li>
                        <li>
                            <Text className="card-text">TRIA SOFTWARE - Estagio desenvolvedor RPA (05/23 - 08/23)</Text>
                        </li>
                        <li>
                            <Text className="card-text">TRIA SOFTWARE - Desenvolvedor RPA - Python | BotCity (09/23 - atuando)</Text>
                        </li>
                    </ul>
                </TextBox>
            </CardAbout>

            <CardAbout className="card">
                <Title3>Certificação</Title3>
                <TextBox className="card-body">

                    <ul>
                        <li>
                            <Text className="card-text">UDEMY - [30h] LÓGICA DE PROGRAMAÇÃO: Algoritmos e lógica: C, C++, C#, Java e Python. (2023).
                            <TextLink target="_blank" role="link" to="https://github.com/CamiloCCarvalho?tab=repositories"> {repos}&#x2191;
                            </TextLink>
                            </Text>
                        </li>
                        <li>
                            <Text className="card-text">UDEMY - [65h] PYTHON ESSENCIAL: Curso completo de Python incluindo exercicios, manipulação de arquivos e sistema. (2023).
                            <TextLink target="_blank" role="link" to="https://github.com/CamiloCCarvalho?tab=repositories"> {repos}&#x2191;
                            </TextLink>
                            </Text>
                        </li>
                        <li>
                            <Text className="card-text">UDEMY - [5h] BOTCITY RPA COM PYTHON: Curso de BotCity para Devs que ja atuam com outras ferramentas/ linguagens. (2023).
                            <TextLink target="_blank" role="link" to="https://github.com/CamiloCCarvalho?tab=repositories"> {repos}&#x2191;
                            </TextLink>
                            </Text>
                        </li>
                        <li>
                            <Text className="card-text">UDEMY - [5h] PYTHON DRIVEN AI WITH BOTCITY: BotCity integrado a IAs via API. (2023).
                            <TextLink target="_blank" role="link" to="https://github.com/CamiloCCarvalho?tab=repositories"> {repos}&#x2191;.
                            </TextLink>
                            </Text>
                        </li>
                        <li>
                            <Text className="card-text">UDEMY - [12h] CHATGPT COMPLETO + GUIA PROMPTS: Curso de prompts para chatGPT de forma acertiva e personalizada. (2023).
                            </Text>
                        </li>
                        <li>
                            <Text className="card-text">ONEBITCODE - [100h] FULLSTACK JAVASCRIPT: Especialização em Front-End, Back-End + Banco de Dados. (2023 - Em curso).
                            <TextLink target="_blank" role="link" to="https://github.com/CamiloCCarvalho?tab=repositories"> {repos}&#x2191;.
                            </TextLink>
                            </Text>
                        </li>
                    </ul>
                </TextBox>
            </CardAbout>

        </ContainerAbout>
    )

}

export default AboutPage
