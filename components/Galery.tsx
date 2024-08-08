export default function Galery() {
    return (
        <>
            <section id="galery" className="hrela bg-BrownP py-14">
                <div className="maxWidth">
                    <h1 className="text-center uppercase text-white font-semibold pt-[54px]">Um pouco mais do</h1>
                    <h1 className="font-Bitter text-6xl uppercase text-GreenP mt-2 text-center font-bold lg:text-7x">Nosso Café em Imagens</h1>

                    <article className=" flex flex-wrap gap-4 justify-center items-center mt-8 mx-auto">
                        <div className="md:w-1/3 lg:w-1/5">
                            <img className="object-cover w-[350px] h-[360px]" src="foto1.jpeg" alt="" />
                        </div>

                        <div className="md:w-1/3 lg:w-1/5">
                            <img className="object-cover w-[350px] h-[360px]" src="foto2.jpeg" alt="" />
                        </div>

                        <div className="md:w-1/3 lg:w-1/5">
                            <img className="object-cover w-[350px] h-[360px]" src="foto3.jpeg" alt="" />
                        </div>

                        <div className="md:w-1/3 lg:w-1/5">
                            <img className="object-cover w-[350px] h-[360px]" src="foto4.jpeg" alt="" />
                        </div>

                        <div className="md:w-1/3 lg:w-1/5">
                            <img className="object-cover w-[350px] h-[360px]" src="foto5.jpeg" alt="" />
                        </div>

                        <div className="md:w-1/3 lg:w-1/5">
                            <img className="object-cover w-[350px] h-[360px]" src="foto1.jpeg" alt="" />
                        </div>

                        <div className="md:w-1/3 lg:w-1/5">
                            <img className="object-cover w-[350px] h-[360px]" src="foto2.jpeg" alt="" />
                        </div>

                        <div className="md:w-1/3 lg:w-1/5">
                            <img className="object-cover w-[350px] h-[360px]" src="foto3.jpeg" alt="" />
                        </div>

                    </article>
                </div>
            </section>
        </>
    );
}