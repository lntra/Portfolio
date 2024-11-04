import { useEffect, useState } from "react";

interface RightGuideProps {
    portugues?: boolean
    setCurrentPage : React.Dispatch<React.SetStateAction<number>>
    currentPage?: number
    scrollData?: any
}

const Skills = ({portugues , setCurrentPage, currentPage, scrollData} : RightGuideProps) => {

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
    
    useEffect(() => {
        if(currentPage){
        const timer1 = setTimeout(() => setAnimate1(true), 0);
        const timer2 = setTimeout(() => setAnimate2(true), 100);
        const timer3 = setTimeout(() => setAnimate3(true), 200);

        const resetTimer = setTimeout(() => {
            setAnimate(false);
            setAnimate2(false);
            setAnimate3(false);
        }, 2000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(resetTimer);
        };
        }
    }, []);

    const handleNav = ( number : number ) => {
        setCurrentPage(number)
    }

    return <>
        <div className="w-full h-full pr-0 lg:pr-7">
            <div className="grid grid-cols-12 grid-rows-5 bg-black border-[1px] border-white w-full h-full rounded-3xl">
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
                <div className="text-white row-start-2 row-end-5 col-start-2 col-end-12">
                        <h1 className="absolute top-[20%] left-[20%] text-2xl transform -translate-x-1/2 -translate-y-1/2 bg-black px-3 py-3 text-white font-bold">
                            {portugues ? "<Habilidades/>" : "<Skills/>"}
                        </h1>
                        <div className="flex flex-col gap-5 w-full h-full align-middle justify-self-center justify-center border-[2px] border-white">
                            <ul className="grid grid-cols-9 xl:grid-cols-8 gap-5 w-full text-sm md:text-lg justify-center">
                                <span className="hidden xl:block lg:col-span-1"/>
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate1 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#E34F26" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
                                    </div>
                                    <p>HTML</p>
                                </li>
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate2 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#1572B6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>                                    </div>
                                    <p>CSS3</p>
                                </li>
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate3 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#F7DF1E" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>                                    </div>
                                    <p>Javascript</p>
                                </li>                                   
                                <span className="hidden xl:block lg:col-span-1"/>
                            </ul>
                            <ul className="grid grid-cols-9 xl:grid-cols-8 gap-5 w-full text-sm md:text-lgjustify-center">
                                <span className="hidden xl:block lg:col-span-1"/>
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate1 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#3178C6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TypeScript</title><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>                                    
                                    </div>
                                    <p>Typescript</p>
                                </li>
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate2 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#61DAFB" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>                                    
                                    </div>
                                    <p>React.js</p>
                                </li>
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate3 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#5FA04E" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>                                    
                                    </div>
                                    <p>Node.js</p>
                                </li>                                   
                                <span className="hidden xl:block lg:col-span-1"/>
                            </ul>
                            <ul className="grid grid-cols-9 xl:grid-cols-8 gap-5 w-full text-sm md:text-lg justify-center">
                                <span className="hidden xl:block lg:col-span-1"/>
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate1 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#ffffff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/></svg>                                    
                                    </div>
                                    <p>Next.js</p>
                                </li>
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate2 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#ffffff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vercel</title><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>                                    
                                    </div>
                                    <p>Vercel</p>
                                </li>
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate3 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#512BD4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>.NET</title><path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z"/></svg>
                                    </div>
                                    <p>.NET</p>
                                </li>                                   
                                <span className="hidden xl:block lg:col-span-1"/>
                            </ul>
                            <ul className="grid grid-cols-9 xl:grid-cols-8 gap-5 w-full text-sm md:text-lg justify-center">
                                <span className="hidden xl:block lg:col-span-1"/>
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate1 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#ffffff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>OpenJDK</title><path d="M11.915 0 11.7.215C9.515 2.4 7.47 6.39 6.046 10.483c-1.064 1.024-3.633 2.81-3.711 3.551-.093.87 1.746 2.611 1.55 3.235-.198.625-1.304 1.408-1.014 1.939.1.188.823.011 1.277-.491a13.389 13.389 0 0 0-.017 2.14c.076.906.27 1.668.643 2.232.372.563.956.911 1.667.911.397 0 .727-.114 1.024-.264.298-.149.571-.33.91-.5.68-.34 1.634-.666 3.53-.604 1.903.062 2.872.39 3.559.704.687.314 1.15.664 1.925.664.767 0 1.395-.336 1.807-.9.412-.563.631-1.33.72-2.24.06-.623.055-1.32 0-2.066.454.45 1.117.604 1.213.424.29-.53-.816-1.314-1.013-1.937-.198-.624 1.642-2.366 1.549-3.236-.08-.748-2.707-2.568-3.748-3.586C16.428 6.374 14.308 2.394 12.13.215zm.175 6.038a2.95 2.95 0 0 1 2.943 2.942 2.95 2.95 0 0 1-2.943 2.943A2.95 2.95 0 0 1 9.148 8.98a2.95 2.95 0 0 1 2.942-2.942zM8.685 7.983a3.515 3.515 0 0 0-.145.997c0 1.951 1.6 3.55 3.55 3.55 1.95 0 3.55-1.598 3.55-3.55 0-.329-.046-.648-.132-.951.334.095.64.208.915.336a42.699 42.699 0 0 1 2.042 5.829c.678 2.545 1.01 4.92.846 6.607-.082.844-.29 1.51-.606 1.94-.315.431-.713.651-1.315.651-.593 0-.932-.27-1.673-.61-.741-.338-1.825-.694-3.792-.758-1.974-.064-3.073.293-3.821.669-.375.188-.659.373-.911.5s-.466.2-.752.2c-.53 0-.876-.209-1.16-.64-.285-.43-.474-1.101-.545-1.948-.141-1.693.176-4.069.823-6.614a43.155 43.155 0 0 1 1.934-5.783c.348-.167.749-.31 1.192-.425zm-3.382 4.362a.216.216 0 0 1 .13.031c-.166.56-.323 1.116-.463 1.665a33.849 33.849 0 0 0-.547 2.555 3.9 3.9 0 0 0-.2-.39c-.58-1.012-.914-1.642-1.16-2.08.315-.24 1.679-1.755 2.24-1.781zm13.394.01c.562.027 1.926 1.543 2.24 1.783-.246.438-.58 1.068-1.16 2.08a4.428 4.428 0 0 0-.163.309 32.354 32.354 0 0 0-.562-2.49 40.579 40.579 0 0 0-.482-1.652.216.216 0 0 1 .127-.03z"/></svg>
                                    </div>
                                    <p>Java</p>
                                </li>
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate2 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#A8B9CC" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>C</title><path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z"/></svg>
                                    </div>
                                    <p>C</p>
                                </li>
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate3 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#F05032" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Git</title><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>
                                    </div>
                                    <p>Git</p>
                                </li>                                   
                                <span className="hidden xl:block lg:col-span-1"/>
                            </ul>
                            <ul className="grid grid-cols-9 xl:grid-cols-8 gap-5 w-full text-sm md:text-lg justify-center">
                                <span className="hidden xl:block lg:col-span-1"/>
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate1 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#DD2C00" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Firebase</title><path d="M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z"/></svg>
                                    </div>
                                    <p>Firebase</p>
                                </li>
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate2 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#F24E1E" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg>
                                    </div>
                                    <p>Figma</p>
                                </li>                         
                                <li className={`transition-all duration-200 hover:grayscale-0 grayscale-[1] w-full flex gap-2 col-span-3 xl:col-span-2 rounded-xl text-start px-2 sm:px-4 py-2 bg-pf-black border-[2px] border-white ${animate3 ? 'div-animate' : ''}`}>
                                   <div className="hidden w-5 h-full sm:flex flex-col align-middle items-center justify-center">
                                        <svg fill="#06B6D4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
                                    </div>
                                    <p>Tailwind</p>
                                </li>         
                                <span className="hidden xl:block lg:col-span-1"/>
                            </ul>
                        </div>
                </div>
                
                <div className=" row-start-3 row-end-3 col-start-12 col-end-12">
                        <div className="w-full h-full p-2 flex flex-col justify-center items-end gap-2">
                            <span className={`bg-white transition-all duration-1000 h-[1px] ${animateAB ? "scaledown" : "" } w-[25%]`}></span>
                            <span className={`bg-white w-[50%] h-[2px] ${animate ? "scaleup" : "" } `}></span>
                            <span className={`bg-white transition-all duration-1000 h-[1px] ${animateUN ? "scaledown" : "" } w-[25%]`}></span>
                            <span className={`bg-white h-[1px] w-[25%]`}></span>
                        </div>
                </div>
            </div>
        </div>
    </>
}

export default Skills