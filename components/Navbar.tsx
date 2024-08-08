import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import React from 'react';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <header className="py-1 bg-white fixed border-b-2 border-GreenP w-full z-20">
                <div className="flex justify-between items-center maxWidth">
                    <div>
                        <a id='main' href=""><img className='w-[90px]' src="logo.png" alt="" /></a>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-GreenS focus:outline-none">
                            <svg className="w-8 h-8 text-GreenP " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    <nav className={`lg:flex ${isOpen ? 'block' : 'hidden'} text-GreenP font-semibold bg-white custom-height text-center bg-second flex flex-col gap-10 items-center justify-center  absolute left-0 z-10 top-[99px] uppercase w-full lg:flex  lg:flex-row lg:static lg:w-auto `}>

                            <ScrollLink duration={500} offset={-900} to='main' smooth={true} onClick={closeMenu}>
                                <span className={`block  py-2 cursor-pointer  ${activeSection === 'main' ? 'border-b-[2px] lg:border-GreenP' : ''}`}>Início</span>
                            </ScrollLink>

                            <ScrollLink duration={500} offset={-100} to='about' smooth={true} onClick={closeMenu}>
                                <span className={`block  py-2 cursor-pointer  ${activeSection === 'about' ? 'border-b-[2px] lg:border-GreenP' : ''}`}>Sobre nós</span>
                            </ScrollLink>

                            <ScrollLink duration={500} offset={-10} to='production' smooth={true} onClick={closeMenu}>
                                <span className={`block  py-2 cursor-pointer  ${activeSection === 'production' ? 'border-b-[2px] lg:border-GreenP' : ''}`}>Produção</span>
                            </ScrollLink>

                            <ScrollLink duration={500} offset={-70} to='galery' smooth={true} onClick={closeMenu}>
                                <span className={`block  py-2 cursor-pointer  ${activeSection === 'galery' ? 'border-b-[2px] lg:border-GreenP' : ''}`}>Galeria</span>
                            </ScrollLink>

                            <ScrollLink duration={500} offset={0} to='contact' smooth={true} onClick={closeMenu}>
                                <span className={`block  py-2 cursor-pointer  ${activeSection === 'contact' ? 'border-b-[2px] lg:border-GreenP' : ''}`}>Contato</span>
                            </ScrollLink>

                    </nav>
                </div>
            </header>
        </>
    );
};

export default NavBar;
