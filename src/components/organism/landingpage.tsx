import React, { useState, useEffect } from 'react';
import LeftGuide from '../molecules/leftguide';
import RightGuide from '../molecules/rigthguide';
import useScrollDirection from '../../hooks/scrolldirection';
import Skills from '../molecules/skills';
import Projects from '../molecules/projects';
import Timeline from '../molecules/timeline';

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [animationDirection, setAnimationDirection] = useState(''); 
  const scrollData = useScrollDirection(currentPage, setCurrentPage);
  const MAX_PAGE = 4;

  const [portugues, setPortugues] = useState(false);

  useEffect(() => {
      const language = navigator.language;

      if (language.startsWith('pt')) {
        setPortugues(true);
      }
  }, []);

  const startTransition = (targetPage : any , direction : string) => {
    setNextPage(targetPage);
    setAnimationDirection(direction === 'up' ? 'down' : 'up');
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentPage(targetPage);
      setIsAnimating(false);
      setNextPage(null); 
    }, 500); 
  };

  const handleNextPage = () => {
    if (currentPage < MAX_PAGE) {
      startTransition(currentPage + 1, 'down'); 
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      startTransition(currentPage - 1, 'up'); 
    }
  };

  const handleMenuPageChange = (targetPage: any) => {
    if (targetPage !== currentPage) {
      const direction = targetPage > currentPage ? 'down' : 'up';
      startTransition(targetPage, direction);
    }
  };

  useEffect(() => {
    if (scrollData.direction) {
      if (scrollData.direction === "up") {
        handlePreviousPage();
      } else if (scrollData.direction === "down") {
        handleNextPage();
      }
    }
  }, [scrollData]);

  return (
    <div className='grid grid-cols-12 gap-[28px] h-full w-full overflow-hidden'>
      <div className='col-span-12 hidden lg:block sm:col-start-1 sm:col-end-5 sm:row-start-2 sm:row-end-8'>
        <LeftGuide portugues={portugues} />
      </div>
      <div className='col-start-1 col-end-13 row-start-1 row-span-4 text-white lg:col-start-5 lg:col-end-13 lg:row-start-2 lg:row-end-8 relative'>
        <div
          className={`page-container ${
            isAnimating
              ? animationDirection === 'up'
                ? 'slide-out-up'
                : 'slide-out-down'
              : ''
          }`}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
          }}
        >
          {(() => {
              switch (currentPage) {
                  case 1:
                      return <RightGuide portugues={portugues} scrollData={scrollData} currentPage={currentPage}  setCurrentPage={handleMenuPageChange} />;
                  case 2:
                      return <Skills portugues={portugues} scrollData={scrollData} currentPage={currentPage}  setCurrentPage={handleMenuPageChange} />;
                  case 3:
                      return <Projects portugues={portugues} scrollData={scrollData} currentPage={currentPage} setCurrentPage={handleMenuPageChange} />;
                  case 4:
                      return <Timeline portugues={portugues} scrollData={scrollData} currentPage={currentPage} setCurrentPage={handleMenuPageChange} />;
                  default:
                      return <h1>Page not found</h1>;
              }
          })()}

        </div>

        {nextPage && (
        <div
          className={`page-container ${
            isAnimating
              ? animationDirection === 'up'
                ? 'slide-in-up'
                : 'slide-in-down'
              : ''
          }`}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: isAnimating ? 1 : -1,
          }}
        >
          {(() => {
            switch (nextPage) {
              case 1:
                return <RightGuide portugues={portugues} setCurrentPage={handleMenuPageChange} />;
              case 2:
                return <Skills portugues={portugues} setCurrentPage={handleMenuPageChange} />;
              case 3:
                return <Projects portugues={portugues} scrollData={scrollData} currentPage={currentPage} setCurrentPage={handleMenuPageChange} />;
              case 4:
                return <Timeline portugues={portugues} scrollData={scrollData} currentPage={currentPage} setCurrentPage={handleMenuPageChange} />;
              default:
                return <h1>Page not found</h1>;
            }
          })()}
        </div>
      )}

      </div>
      <span className='hidden lg:block row-start-8 row-span-1 col-span-12'></span>
    </div>
  );
};

export default LandingPage;
