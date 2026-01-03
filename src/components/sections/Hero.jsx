import Button from "../ui/Button";
import imageprofil from '../../assets/images/photo-profil.png'

export default function Hero(){
    return (
        <section id="hero">
            <div className="img-container">
                <div className="circle"></div>
                <img src={imageprofil} alt="image profil" />
            </div>

            <div className="content">
                <h1>Hi, aku Arsya</h1>
                    <h2>Front-End Developer</h2>
                
                <p>Berawal dari Figma dan memulai membuat project HTML & CSS, sekarang saya fokus mendalami Front-End Development menggunakan React JS. Saya terbiasa menulis kode JavaScript modern (ES6+) yang bersih untuk membangun solusi digital yang fungsional dan responsif.</p>
                <a href="#contact">
                    <Button variant="primary">Contact Aku!</Button>
                </a>
            </div>
            
        </section>
    )
}