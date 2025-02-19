import AboutImage from '../../assets/470195341_8909701755785116_6716337851733769640_n.jpg'
import CV from '../../assets/WILLIAM CELESTINO.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                🚀 Desenvolvedor Front-End | HTML5 | CSS3 | JAVASCRIPT | TYPESCRIPT | REACT | ANGULAR 🚀

Me chamo William, sempre me interessei por tecnologia e atualmente, estou cursando Análise e Desenvolvimento de Sistemas pela Unopar Centro Universitário Anhanguera Educacional, busco uma primeira experiência de trabalho na área de Tecnologia da Informação.

Sou dinâmico, com facilidade de aprendizado, ágil, proativo, autodidata. Motivado por desafios e trabalhos que possam ampliar meu conhecimento. Tenho um bom relacionamento interpessoal, adaptando a comunicação para diferentes públicos. 
Minhas habilidades incluem, forte conhecimento em linguagens como HTML, CSS e JavaScript e me especializando em Angular Framework.

Tive a oportunidade de atuar, durante 07 anos, Na área da Segurança privada e 03 anos na área de Segurança pública pelo Exército Brasileiro, assim desenvolvendo práticas de trabalho em equipe, comunicação, atenção, foco, disciplina e hierarquia.

Atualmente em transição de carreira focado em me tornar um Desenvolvedor Web Front-End profissional.


                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About