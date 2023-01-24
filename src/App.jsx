import { useState, useEffect } from 'react';
import PatternDividerMobile from './assets/pattern-divider-mobile.svg';
import PatternDividerDesktop from './assets/pattern-divider-desktop.svg';
import DiceIcon from './assets/icon-dice.svg';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    getNewAdvice();
  }, []);

  const getNewAdvice = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.adviceslip.com/advice', {
        cache: 'no-cache',
      });
      const data = await response.json();
      setData(data.slip);
    } catch (error) {
      setData({
        id: 999,
        advice: 'There was an error. Please try again later!',
      });
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <main className="grid place-items-center bg-blue-900 h-full p-4">
      <div
        className="bg-blue-500 text-center px-6 py-8 pb-16 sm:px-10 sm:py-12 sm:pb-20 rounded-xl shadow-md relative max-w-[540px] data-[loading='true']:animate-pulse"
        data-loading={isLoading}>
        <h1 className="text-xs text-neon-green uppercase tracking-[.25em] mb-6">
          Advice #{data?.id ?? '999'}
        </h1>
        <p className="text-2xl sm:text-[28px] text-light-cyan mb-6 md:mb-10">
          {data?.advice ?? 'Loading...'}
        </p>
        <picture className="block">
          <source media="(min-width: 500px)" srcSet={PatternDividerDesktop} />
          <img className="min-w-full" src={PatternDividerMobile} alt="" />
        </picture>
        <button
          className="bg-neon-green p-5 rounded-full absolute z-10 left-1/2 -bottom-8 -translate-x-1/2 shadow-lg hover:shadow-[0_0_30px_0px_rgba(82,255,168,1)] transition-shadow origin-center disabled:shadow-none"
          disabled={isLoading}
          onClick={getNewAdvice}>
          <img src={DiceIcon} alt="" />
        </button>
      </div>
    </main>
  );
}

export default App;
