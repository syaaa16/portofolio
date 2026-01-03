import Button from "../../components/ui/Button"
export default function Contact (){
    return (
        <section id="contact">
            <div className="contact-container">
                <h2>Contact me</h2>
                
                <p>
                    Tertarik bekerja sama atau ingin berdiskusi?  
                    Silakan hubungi saya melalui:
                </p>

                <div className="contact-link">
                    <a href="mailto:ajiarsyaa6@email.com"><Button variant="secondary">Email</Button></a>

                    <a 
                    href="https://github.com/syaaa16"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Button variant="secondary">
                             Github
                        </Button>
                    </a>

                    <a 
                    href="https://www.instagram.com/bung.jieee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><Button variant="secondary">Instagram</Button></a>
                </div>
            </div>
        </section>
    )
}