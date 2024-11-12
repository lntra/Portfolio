import rectangle from '../assets/Rectangle 22.png'
import { useEffect, useState } from "react";

interface RightGuideProps {
    portugues?: boolean
    setCurrentPage : React.Dispatch<React.SetStateAction<number>>
    currentPage: number
    scrollData: any
}

const Timeline = ({portugues , currentPage , setCurrentPage, scrollData} : RightGuideProps) => {

    const [animateAB, setAnimateAB] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [animateUN, setAnimateUN] = useState(false);
    
    useEffect(() => {
        const timer1 = setTimeout(() => setAnimate(true), 0);
        let timer2: any
        if(scrollData.direction === 'down'
        ){
            timer2 = setTimeout(() => setAnimateAB(true), 0);
        }
        if(scrollData.direction === 'up'){
            timer2 = setTimeout(() => setAnimateUN(true), 0);
        }
      
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [currentPage]);

    const handleNav = ( number : number ) => {
        setCurrentPage(number)
    }

    return <>
        <div className="w-full h-full pr-0 lg:pr-7">
            <div className="grid grid-cols-12 grid-rows-7 bg-black border-[1px] border-white w-full h-full rounded-3xl">
                <div className="row-start-1 row-end-1  col-start-2 col-end-12">
                    <ul className="flex py-4 font-semibold justify-evenly text-white">
                        <li className="cursor-pointer transition-colors duration-200 hover:text-pf-red" onClick={() => (handleNav(1))}>
                            {portugues 
                            ? "Início" 
                            : "Home"
                            }
                        </li>
                        <li className="cursor-pointer transition-colors duration-200 hover:text-pf-red" onClick={() => (handleNav(2))}>
                            {portugues 
                            ? "Habilidades" 
                            : "Skills"
                            }
                        </li>
                        <li className="cursor-pointer transition-colors duration-200 hover:text-pf-red" onClick={() => (handleNav(3))}>
                            {portugues 
                            ? "Projetos" 
                            : "Projects"
                            }
                        </li>
                        <li className="cursor-pointer transition-colors duration-200 hover:text-pf-red" onClick={() => (handleNav(4))}>
                            {portugues 
                            ? "Linha do Tempo" 
                            : "Timeline"
                            }
                        </li>
                    </ul>
                </div>
                <div className="text-white row-start-2 row-end-7 col-start-2 col-end-12">
                        <h1 className="absolute top-[14.5%] left-[28%] sm:left-[20%] text-2xl transform -translate-x-1/2 -translate-y-1/2 bg-black px-3 py-3 text-white font-bold">
                            {portugues ? "<Linha do Tempo/>" : "<Timeline/>"}
                        </h1>
                        <div className="flex flex-col w-full h-full align-middle justify-self-center justify-center border-[2px] border-white">
                            <ul className="h-full p-10 grid grid-cols-5 xl:grid-cols-5 grid-rows-3 w-full text-lg justify-center">
                            
                            <div className='row-start-1 row-end-1 col-start-1 col-end-3'>
                                <div className='hidden xl:block top-[28%] xl:left-[39.8%] 2xl:left-[40.0%] 3xl:left-[40.2%] absolute'>
                                        <img src={rectangle} alt="" />
                                    </div>
                                <div className='rounded-xl p-5 w-full h-full bg-pf-crimsonbg border-b-2 border-pf-darkestred'>
                                    
                                    <div className='text-xs sm:text-base h-full font-normal bg-pf-crimsonbg flex flex-col items-center justify-center  gap-1'>
                                        <h1 className='hidden 2xl:block text-2xl font-medium'>{portugues ? "Tempo Presente" : "Present Time"}</h1>
                                        <p className='text-xs sm:text-base'>{portugues ? "Certificação EJPT" : "EJPT Certification"}</p>
                                        <p className='text-xs sm:text-base'>{portugues ? "Python" : "Python"}</p>
                                        <p className='text-xs sm:text-base'>{portugues ? "Next.js" : "Next.js"}</p>
                                        <p className='text-xs sm:text-base'>{portugues ? "Vercel" : "Vercel"}</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='row-start-2 row-end-3 col-start-2 col-end-2 flex items-center justify-end'>
                                <h1 className='font-bold'>2022 - 2023</h1>
                            </div>
                            
                            <div className='row-start-3 row-end-4 col-start-1 col-end-3'>
                                <div className='hidden xl:block bottom-[27.5%] xl:left-[39.8%] 2xl:left-[40.0%] 3xl:left-[40.2%] absolute'>
                                        <img src={rectangle} alt="" />
                                    </div>
                                <div className='rounded-xl px-5 w-full h-full bg-pf-crimsonbg border-b-2 border-pf-darkestred'>
                                    
                                    <div className='text-xs sm:text-base h-full font-normal bg-pf-crimsonbg flex flex-col items-center justify-center  gap-1'>
                                        <h1 className='hidden 2xl:block text-2xl font-medium'>{portugues ? "Começo dos Estudos" : "Beginning of Studies"}</h1>
                                        <p className='text-xs sm:text-base'>{portugues ? "Lógica de Programação" : "Logic programming"}</p>
                                        <p className='text-xs sm:text-base'>{portugues ? "Javascript" : "Javascript"}</p>
                                        <p className='text-xs sm:text-base'>{portugues ? "HTML5 e CSS3" : "HTML5 & CSS3"}</p>
                                        <p className='hidden sm:block text-xs sm:text-base'>{portugues ? "Arquitetura de Computadores" : "Computer architecture"}</p>
                                    </div>
                                    
                                </div>    
                            </div>

                            <div className='row-start-1 row-end-4 col-start-3 col-end-3 h-full flex justify-center'>
                                <span className='w-1 bg-gradient-to-br from-pf-red to-pf-crimsonbg'/>
                            </div>
                            <div className='row-start-1 row-end-1 col-start-3 col-end-3 h-full flex justify-center items-center'>
                                <span className='w-5 h-5 rounded-full bg-gradient-to-l from-pf-red to-pf-crimsonbg'/>
                            </div>
                            <div className='row-start-2 row-end-2 col-start-3 col-end-3 h-full flex justify-center items-center'>
                                <span className='w-5 h-5 rounded-full bg-gradient-to-l from-pf-red to-pf-crimsonbg'/>
                            </div>
                            <div className='row-start-3 row-end-3 col-start-3 col-end-3 h-full flex justify-center items-center'>
                                <span className='w-5 h-5 rounded-full bg-gradient-to-l from-pf-red to-pf-crimsonbg'/>
                            </div>

                            <div className='row-start-1 row-end-1 col-start-4 col-end-4 flex items-center justify-start'>
                                <h1 className='font-bold'>{portugues ? "2024 - Atual" : "2024 - Nowadays"}</h1>
                            </div>
                            <div className='row-start-2 row-end-3 col-start-4 col-end-6'>
                                <div className='hidden xl:block bottom-[48.25%] xl:left-[54.3%] 2xl:left-[54.8%] 3xl:left-[55.4%] absolute'>
                                        <img src={rectangle} alt="" />
                                    </div>
                                <div className='rounded-xl p-5 w-full h-full bg-pf-crimsonbg border-b-2 border-pf-darkestred'>
                                    
                                    <div className='text-xs sm:text-base h-full font-normal bg-pf-crimsonbg flex flex-col items-center justify-center  gap-1'>
                                        <h1 className='hidden 2xl:block text-2xl font-medium'>{portugues ? "Começo da Faculdade" : "Starting College"}</h1>
                                        <p className='text-xs sm:text-base'>{portugues ? "Começo graduação Engenharia de Software - INFNET" : "Starting software engineering - INFNET"}</p>
                                        <p className='text-xs sm:text-base'>{portugues ? "React.js" : "React.js"}</p>
                                        <p className='text-xs sm:text-base'>{portugues ? "Typescript" : "Typescript"}</p>
                                    </div>
                                    
                                </div>    
                            </div>
                            <div className='row-start-3 row-end-4 col-start-4 col-end-4 flex items-center justify-start'>
                                <h1 className='font-bold'>2021</h1>
                            </div>
                            </ul>
                        </div>
                </div>
                
                <div className=" row-start-4 row-end-4 col-start-12 col-end-12">
                        <div className="w-full h-full p-2 flex flex-col justify-center items-end gap-2">
                            <span className={`bg-white h-[1px] w-[25%]`}></span>
                            <span className={`bg-white h-[1px] w-[25%]`}></span>
                            <span className={`bg-white transition-all duration-1000 h-[1px] ${animateAB ? "scaledown" : "" } w-[25%]`}></span>
                            <span className={`bg-white w-[50%] h-[2px] ${animate ? "scaleup" : "" } `}></span>
                        </div>
                </div>
            </div>
        </div>
    </>
}

export default Timeline