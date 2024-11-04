import photo from '../assets/foto.jpeg'

interface LeftGuideProps {
    portugues ?: boolean
}

const LeftGuide = ( {portugues} : LeftGuideProps ) => {

    return <>
        <div className="absolute w-[90vw] sm:w-[70vw] md:w-[50vw] bottom-0 right-0 lg:w-full lg:relative lg:h-full pl-0 lg:pl-7">
            <div className="bg-black border-[1px] border-white w-full h-full rounded-3xl grid grid-rows-4">
                <div className="row-span-5 lg:row-start-2 lg:row-end-4">
                    <div className="h-full w-full gap-2 grid auto-rows-auto auto-cols-auto p-0 xl:p-4 2xl:p-7">
                        <div className="flex justify-center items-center w-full row-start-1 row-end-1 col-start-1 col-end-1">
                            <div className="w-24 h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 max-w-32 max-h-32 aspect-square bg-blue-400 relative rounded-full">
                                <img className='w-full h-full rounded-full object-cover' src={photo} alt="" />
                                <div className="absolute inset-0 bg-pf-red mix-blend-multiply opacity-35 pointer-events-none"></div>
                            </div>
                        </div>
                        <div className="row-start-1 row-end-1 col-start-2 col-end-2">
                            <div className="flex flex-col items-start justify-center h-full">
                                <div>
                                    <h1 className={`text-4xl xl:text-5xl 2xl:text-6xl gradient font-bold pl-0 xl:pl-2 text-left`}>Fernando Araújo</h1>
                                </div>
                                <div className="flex items-center">
                                    <svg className='hidden xl:block' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 5.33334C12.2667 5.33334 9.33334 8.26667 9.33334 12C9.33334 15.7333 14.6667 26.6667 16 26.6667C17.3333 26.6667 22.6667 15.7333 22.6667 12C22.6667 8.26667 19.7333 5.33334 16 5.33334ZM16 16C13.7333 16 12 14.2667 12 12C12 9.73334 13.7333 8 16 8C18.2667 8 20 9.73334 20 12C20 14.2667 18.2667 16 16 16Z" fill="white"/>
                                    </svg>
                                    <h1 className="text-lg text-left">Rio de Janeiro, Brasil</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row-start-2 row-end-2 col-span-2">
                            <div className="flex flex-col justify-center align-middle bg-pf-crimsonbg h-full w-full border-l-[3px] px-7 border-pf-darkestred">
                                <p className="font-light">
                                    {portugues 
                                    ? "Apaixonado por tecnologia, exploro o campo de TI desde cedo. Sempre em busca de novos desafios, aprimoro minhas habilidades em projetos diversos para evoluir como profissional." 
                                    : "Passionate about technology, I've been exploring the field of IT from an early age. Continuously seeking new challenges, I hone my skills through diverse projects to grow as a professional." 
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="row-start-3 row-end-3 col-span-2 flex justify-center xl:justify-start ">
                            <div className="flex gap-2 xl:items-middle items-end align-bottom">
                                    <a href='https://github.com/lntra'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="32" height="32" rx="10" fill="#370617"/>
                                            <g clip-path="url(#clip0_6_79)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9642 4.2449C9.34833 4.2449 4 9.63265 4 16.298C4 21.626 7.42686 26.1361 12.1808 27.7323C12.7752 27.8523 12.9929 27.473 12.9929 27.1539C12.9929 26.8744 12.9733 25.9167 12.9733 24.9187C9.64514 25.6372 8.95208 23.4819 8.95208 23.4819C8.41722 22.085 7.62473 21.726 7.62473 21.726C6.53543 20.9876 7.70408 20.9876 7.70408 20.9876C8.91241 21.0674 9.54645 22.2248 9.54645 22.2248C10.6159 24.0606 12.3393 23.5419 13.0326 23.2225C13.1315 22.4442 13.4487 21.9055 13.7854 21.6062C11.1309 21.3268 8.33812 20.2891 8.33812 15.6593C8.33812 14.3423 8.81322 13.2647 9.56604 12.4267C9.44726 12.1274 9.03118 10.89 9.68506 9.23371C9.68506 9.23371 10.6953 8.91437 12.9731 10.4709C13.9483 10.2071 14.954 10.0729 15.9642 10.0718C16.9744 10.0718 18.0042 10.2116 18.9552 10.4709C21.2332 8.91437 22.2434 9.23371 22.2434 9.23371C22.8973 10.89 22.481 12.1274 22.3622 12.4267C23.1349 13.2647 23.5904 14.3423 23.5904 15.6593C23.5904 20.2891 20.7975 21.3067 18.1233 21.6062C18.5592 21.9853 18.9353 22.7036 18.9353 23.8411C18.9353 25.4575 18.9158 26.7547 18.9158 27.1536C18.9158 27.473 19.1337 27.8523 19.7278 27.7326C24.4818 26.1358 27.9087 21.626 27.9087 16.298C27.9282 9.63265 22.5603 4.2449 15.9642 4.2449Z" fill="white"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_6_79">
                                            <rect width="24" height="23.5102" fill="white" transform="translate(4 4.2449)"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a href='https://www.linkedin.com/in/fernando-ara%C3%BAjo-882b93223/'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_6_75)">
                                        <rect width="32" height="32" rx="20" fill="white"/>
                                        <path d="M0 0V32H32V0H0ZM10.6667 25.3333H6.66667V10.6667H10.6667V25.3333ZM8.66667 8.976C7.37867 8.976 6.33333 7.92267 6.33333 6.624C6.33333 5.32533 7.37867 4.272 8.66667 4.272C9.95467 4.272 11 5.32533 11 6.624C11 7.92267 9.956 8.976 8.66667 8.976ZM26.6667 25.3333H22.6667V17.8613C22.6667 13.3707 17.3333 13.7107 17.3333 17.8613V25.3333H13.3333V10.6667H17.3333V13.02C19.196 9.572 26.6667 9.31733 26.6667 16.3213V25.3333Z" fill="#370617"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_6_75">
                                        <rect width="32" height="32" rx="10" fill=""/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </a>
                                    <a href='mailto:intradevcontact@gmail.com'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="32" height="32" rx="10" fill="#370617"/>
                                            <path d="M5.33331 8H26.6666V11.2L16 16.5333L5.33331 11.2V8Z" fill="white"/>
                                            <path d="M5.33331 22.6667L12.6666 16.2667L16 18.1333L19.3333 16.2667L26.6666 22.6667H5.33331Z" fill="white"/>
                                            <path d="M11.4666 15.7333L5.33331 12.6667V21.3333L11.4666 15.7333Z" fill="white"/>
                                            <path d="M20.5333 15.7333L26.6667 12.6667V21.3333L20.5333 15.7333Z" fill="white"/>
                                        </svg>
                                    </a>
                                    <a href='tel:+5521976668760' className="gap-2 flex xl:align-middle xl:items-center">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="32" height="32" rx="10" fill="#370617"/>
                                            <path d="M21.6025 18.6316C20.1358 18.4983 19.3358 20.4983 18.2691 21.0316C16.5358 21.965 13.3358 18.6316 13.3358 18.6316C13.3358 18.6316 10.0025 15.4316 10.8025 13.6983C11.4691 12.6316 13.4691 11.8316 13.3358 10.365C13.2025 9.03163 10.2691 4.23163 8.80247 5.56496C5.60247 8.4983 5.3358 9.6983 5.3358 12.0983C5.20247 16.2316 10.5358 21.4316 10.5358 21.4316C11.0691 21.965 15.7358 26.765 19.8691 26.6316C22.2691 26.6316 23.4691 26.365 26.4025 23.165C27.7358 21.6983 23.0691 18.765 21.6025 18.6316V18.6316Z" fill="white"/>
                                        </svg>
                                        <p className='hidden xl:block'>(+55) (21) 97666-8760</p>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default LeftGuide