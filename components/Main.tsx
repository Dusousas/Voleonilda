import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Main() {

    const iconVariant = {
        hidden: { opacity: 0, transform: "translateX(30px)" },
        visible: { opacity: 1, transform: "translateX(0px)", transition: { duration: 1, delay: 1.5 } }
    };

    return (
        <>
            <section id="main" className="hrela mainBG flex flex-col items-center justify-center">
                <div className="textwhite maxWidth">
                    <motion.h1 className="font-Bitter text-6xl text-center font-bold text-white lg:text-7xl"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>Bem vindo ao</motion.h1>

                    <motion.h1 className="font-Bitter text-5xl text-center font-bold text-white mt-2 lg:text-7xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}>Café Vó Leonilda</motion.h1>
                    
                    <div className="text-center mt-4">
                        <motion.button className="bg-GreenS py-2 px-5 rounded font-bold uppercase text-white"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 1 }}>Saiba mais</motion.button>
                    </div>

                    <motion.div
                        className="text-white flex flex-col absolute bottom-20 right-8"
                        variants={iconVariant}
                        initial="hidden"
                        animate="visible">
                        <a href="#" aria-label="Instagram"><FontAwesomeIcon className="text-GreenS text-3xl mb-2" icon={faSquareInstagram} /></a>
                        <a href="#" aria-label="Whatsapp"><FontAwesomeIcon className="text-GreenS text-3xl mb-2" icon={faSquareWhatsapp} /></a>
                        <a href="#" aria-label="Facebook"><FontAwesomeIcon className="text-GreenS text-3xl mb-2" icon={faSquareFacebook} /></a>
                    </motion.div>

                </div>
            </section>

        </>
    );
}
