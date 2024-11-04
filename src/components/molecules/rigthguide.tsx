import { useEffect, useState } from "react";
import TypingAnimation from "../atoms/typing";
import LeftGuide from "./leftguide";

interface RightGuideProps {
    portugues?: boolean
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    currentPage?: number
    scrollData?: any
}

const RightGuide = ({portugues , setCurrentPage, currentPage, scrollData} : RightGuideProps) => {

    const [animateAB, setAnimateAB] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [animateUN, setAnimateUN] = useState(false);
    
    useEffect(() => {
        if(currentPage){
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
        }
    }, []);

    const [animate1, setAnimate1] = useState(false);
    const [animate2, setAnimate2] = useState(false);
    const [animate3, setAnimate3] = useState(false);
    const [animate4, setAnimate4] = useState(false);
    
    useEffect(() => {
        if(currentPage){
            const timer1 = setTimeout(() => setAnimate1(true), 0);
            const timer2 = setTimeout(() => setAnimate2(true), 100);
            const timer3 = setTimeout(() => setAnimate3(true), 200);
            const timer4 = setTimeout(() => setAnimate4(true), 300);

            const resetTimer = setTimeout(() => {
                setAnimate(false);
                setAnimate2(false);
                setAnimate3(false);
                setAnimate4(false);
            }, 2000);

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
                clearTimeout(timer4);
                clearTimeout(resetTimer);
            };
        }
    }, []);

    const handleNav = ( number : number ) => {
        setCurrentPage(number)
    }

    return <>
        <div className="block lg:hidden">
            <LeftGuide portugues={portugues}></LeftGuide>
        </div>
        <div className="w-full h-full pr-0 lg:pr-7">
            <div className="grid grid-cols-12 grid-rows-5 bg-black border-[1px] border-white w-full h-full rounded-3xl">
                <div className="row-start-1 row-end-1 col-span-12">
                    <ul className="flex py-4 font-semibold justify-evenly text-white">
                        <li className={`cursor-pointer transition-colors duration-200 hover:text-pf-red ${animate1 ? 'li-animate' : ''}`} onClick={() => handleNav(1)}>
                            {portugues ? "Início" : "Home"}
                        </li>
                        <li className={`cursor-pointer transition-colors duration-200 hover:text-pf-red ${animate2 ? 'li-animate' : ''}`} onClick={() => handleNav(2)}>
                            {portugues ? "Habilidades" : "Skills"}
                        </li>
                        <li className={`cursor-pointer transition-colors duration-200 hover:text-pf-red ${animate3 ? 'li-animate' : ''}`} onClick={() => handleNav(3)}>
                            {portugues ? "Projetos" : "Projects"}
                        </li>
                        <li className={`cursor-pointer transition-colors duration-200 hover:text-pf-red ${animate4 ? 'li-animate' : ''}`} onClick={() => handleNav(4)}>
                            {portugues ? "Linha do Tempo" : "Timeline"}
                        </li>
                    </ul>
                </div>
                <div className="row-start-2 row-end-2 col-span-12">
                        <div className="flex gap-3 flex-col w-full h-full align-middle justify-self-center justify-center">
                            <h1 className="text-5xl font-bold">{portugues ? "Bem vindo ao meu portfólio" : "Welcome to my portfolio"}</h1>
                            <TypingAnimation portugues={portugues}/>                            
                            <p className="text-xl glow-text font-light">{portugues ? "Em evolução constante" : "In constant evolution"}</p>
                        </div>
                </div>
                <div className=" row-start-3 row-end-3 col-start-12 col-end-12">
                    <div className="w-full h-full p-2 flex flex-col justify-center items-end gap-2">
                        <span className={`bg-white w-[50%] h-[2px] ${animate ? "scaleup" : "" } `}></span>
                        <span className={`bg-white transition-all duration-1000 h-[1px] ${animateUN ? "scaledown" : "" } w-[25%]`}></span>
                        <span className={`bg-white h-[1px] w-[25%]`}></span>
                        <span className={`bg-white h-[1px] w-[25%]`}></span>
                    </div>
                </div>
                <div className="h-full w-full row-start-4 row-end-6 col-start-1 col-end-1 flex items-center justify-center">
                    <div className="flex flex-col h-full w-full justify-start align-top justify-items-start items-center">
                        <h1 className="rotated-text text-xl h-full w-[150px] flex justify-end align-end items-center whitespace-nowrap font-normal ">{portugues ? "ROLE ABAIXO" : "SCROLL DOWN"}</h1>
                        <div className="w-0.5 h-[100%] bg-white mt-2" /> 
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default RightGuide