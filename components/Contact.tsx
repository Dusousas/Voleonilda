
import { faSquareFacebook, faSquareInstagram, faSquareWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <>
            <section id="contact" className="py-10 lg:py-32 hrela gradient contactBG ">
                <h1 className="hidden text-center uppercase text-white font-semibold lg:block mt-6">Alguma dúvida?</h1>
                <h1 className="hidden font-Bitter text-6xl uppercase text-GreenP text-center font-bold lg:text-7x lg:block">Entre em contato</h1>

                <div className="maxWidth lg:flex lg:mt-10">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-center text-white lg:text-left">Ficou com alguma dúvida?</h1>
                        <h1 className="text-center uppercase font-Marcellus text-4xl text-GreenP lg:text-left">Fale Conosco</h1>
                        <p className="text-center pt-6 lg:text-left text-GreenP">Não perca mais tempo e entre em contato com nossa equipe de especialistas.</p>
                        <p className="text-center  lg:text-left text-GreenP">Teremos o mais prazer em ajudar você.</p>


                        <article className="flex items-center justify-center pt-6 gap-4 lg:justify-start ">
                            <a href="#"><FontAwesomeIcon className="text-GreenP text-3xl mb-2" icon={faSquareInstagram} /></a>
                            <a href="#"><FontAwesomeIcon className="text-GreenP text-3xl mb-2" icon={faSquareWhatsapp} /></a>
                            <a href="#"><FontAwesomeIcon className="text-GreenP text-3xl mb-2" icon={faSquareFacebook} /></a>
                        </article>

                        <article className="flex justify-center gap-2 items-center pt-6 lg:justify-start">
                            <img src="/pin.png" alt="" />
                            <p className="lg:text-left text-GreenP">Rua Amitaba, 00. Torrinha, Brazil 05831055</p>
                        </article>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center ">
                        <form className="mt-6 border-[1px] border-GreenS rounded-md p-10 gap-4  max-w-[550px]" >
                            <h1 className="text-GreenP text-xl mb-2">Formulário de contato</h1>
                            <input className="border border-GreenS w-full py-2 px-2 rounded-md mb-4 outline-none" placeholder="Digite seu primeiro nome*" />
                            <input className="border border-GreenS w-full py-2 px-2 rounded-md mb-4 outline-none" placeholder="Digite um e-mail valido*" />
                            <input className="border border-GreenS w-full py-2 px-2 rounded-md mb-4 outline-none" placeholder="Ex: (11)9 1234-0000*" />
                            <textarea className="border border-GreenS rounded-md w-full py-6 px-2 resize-none mb-4 outline-none" placeholder="Conte-nos tudo*" />
                            <button className="bg-GreenS py-2 px-5 rounded font-bold uppercase text-white" type="submit">Enviar</button>

                        </form>
                    </div>

                </div>
            </section>
        </>
    );
}