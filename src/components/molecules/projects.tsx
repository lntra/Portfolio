import soundspace from '../assets/Soundspace.png'
import soundspacealt from '../assets/soundspacealt.png'
import soundspacealtblack from '../assets/soundspacealtblack.png'
import github from '../assets/cat.png'
import githubalt from '../assets/CATALT.png'

import { useEffect, useState } from "react";

interface RightGuideProps {
    portugues?: boolean
    setCurrentPage : React.Dispatch<React.SetStateAction<number>>
    currentPage: number
    scrollData: any
}

const Projects = ({portugues , currentPage , setCurrentPage, scrollData} : RightGuideProps) => {

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
                        <h1 className="absolute top-[14.5%] left-[69.5%] sm:left-[77.5%] text-2xl transform -translate-x-1/2 -translate-y-1/2 bg-black px-3 py-3 text-white font-bold">
                            {portugues ? "<Projetos/>" : "<Projects/>"}
                        </h1>
                        <div className="flex flex-col w-full h-full align-middle justify-self-center justify-center border-[2px] border-white">
                            <ul className="h-full p-2 grid grid-cols-9 lg:grid-cols-12 grid-rows-2 w-full text-lg justify-center">
                                <a href='https://sound-space.vercel.app/' className='group row-start-1 row-end-1 col-span-12  sm:col-span-5 lg:col-start-1 lg:col-end-7 h-full w-full'>
                                    <div className='w-full h-full flex justify-end'>
                                        <img className='grayscale-[1] object-cover  transition-all duration-300 ease-in-out group-hover:grayscale-0 border-b-[1px] z-10 lg:h-[90%] rounded-3xl border-r-[1px] border-white' src={soundspacealt} alt="" />
                                        <div 
                                            className='top-[24.5%] lg:top-[19%] right-[20.5%] sm:right-[18.5%] lg:left-[11.5%] hidden sm:block sm:h-[262px] sm:w-[307px] absolute rounded-3xl border-white bg-pf-black' 
                                        />
                                    </div>
                                </a>   
                                <div className='col-start-1 p-1 col-end-12 row-start-2 row-end-2 lg:row-start-1 lg:row-end-1 lg:p-7 lg:col-start-6 z-20 lg:col-end-13 h-full w-full flex align-middle items-center'>
                                    <a href='https://sound-space.vercel.app/' className='w-full h-fit bg-pf-crimsonbg border-b-2 border-pf-darkestred rounded-3xl'
                                    style={{ backgroundColor: 'rgba(55, 6, 23, 0.9)' }}
                                    >
                                        <div className='flex opacity-100 flex-col h-full justify-center align-top items-start p-4'>
                                            <h1 className='text-4xl font-bold'>Soundspace</h1>
                                            <div className='flex gap-2'>
                                                <div className='px-2 py-1 text-sm bg-pf-black rounded-xl'>
                                                    <p>React.js</p>
                                                </div>
                                                <div className='px-2 py-1 text-sm bg-pf-black rounded-xl'>
                                                    <p>Trpc</p>
                                                </div>
                                                <div className='px-2 py-1 text-sm bg-pf-black rounded-xl'>
                                                    <p>Next.js</p>
                                                </div>
                                                <div className='hidden xl:block px-2 py-1 text-sm bg-pf-black rounded-xl'>
                                                    <p>Vercel</p>
                                                </div>
                                            </div>
                                            <p className='text-base text-left'>
                                                {portugues 
                                                ? "Uma rede social sobre músicas, com um site funcional localmente, crie contas, envie ícones, banners, posts, comentários."
                                                : "A musical social network with a local functional website, create accounts, upload icons, banners, posts, comments."
                                                }     
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <a href='https://github.com/lntra/Paper-Cook'  className='hidden lg:block group row-start-2 row-end-2 col-start-7 col-end-13 h-full w-full'>
                                    <div className='w-full h-full flex justify-start'>
                                        <img className='grayscale-[1] transition-all duration-300 ease-in-out group-hover:grayscale-0 border-t-[1px] z-10 h-[90%] rounded-3xl border-l-[1px] border-white' src={githubalt} alt="" />
                                         <div 
                                            className='bottom-[14.6%] right-[14.1%] h-[262px] w-[307px] absolute rounded-3xl border-white bg-pf-black' 
                                        />
                                    </div>
                                </a>   
                                <div className='hidden row-start-2 row-end-2 p-7 col-start-1 z-20 col-end-8 h-full w-full lg:flex align-middle items-center'>
                                    <a href='https://github.com/lntra/Paper-Cook' className='w-full h-fit bg-pf-crimsonbg border-b-2 border-pf-darkestred rounded-3xl'
                                    style={{ backgroundColor: 'rgba(55, 6, 23, 0.9)' }}
                                    >
                                        <div className='flex opacity-100 flex-col h-full justify-center align-top items-end p-4'>
                                            <h1 className='text-4xl font-bold'>Paper Cook</h1>
                                            <div className='flex gap-2'>
                                                <div className='px-2 py-1 text-sm bg-pf-black rounded-xl'>
                                                    <p>React Native</p>
                                                </div>
                                                <div className='px-2 py-1 text-sm bg-pf-black rounded-xl'>
                                                    <p>Typescript</p>
                                                </div>
                                            </div>
                                            <p className='text-base text-right'>
                                                {portugues 
                                                ? "Um projeto disponível em mobile sobre culinária, lida com criações de receitas, usuários e seus perfis"
                                                : "A mobile focused project focused on culinary exploration, with features for recipe creation and personalized user profiles."
                                                }                                                 </p>
                                        </div>
                                    </a>
                                </div>
                            </ul>
                        </div>
                </div>
                
                <div className=" row-start-4 row-end-4 col-start-12 col-end-12">
                        <div className="w-full h-full p-2 flex flex-col justify-center items-end gap-2">
                            <span className={`bg-white h-[1px] w-[25%]`}></span>
                            <span className={`bg-white transition-all duration-1000 h-[1px] ${animateAB ? "scaledown" : "" } w-[25%]`}></span>
                            <span className={`bg-white w-[50%] h-[2px] ${animate ? "scaleup" : "" } `}></span>
                            <span className={`bg-white transition-all duration-1000 h-[1px] ${animateUN ? "scaledown" : "" } w-[25%]`}></span>
                        </div>
                </div>
            </div>
        </div>
    </>
}

export default Projects