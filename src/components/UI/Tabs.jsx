import { useState, useRef, useEffect } from 'react';

export default function Tabs({ tabs = [], defaultActive = 0, onChange }) {
  const [activeTab, setActiveTab] = useState(defaultActive);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef([]);

  useEffect(() => {
    const currentTab = tabsRef.current[activeTab];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onChange) onChange(index);
  };

  return (
    <div className="flex max-w-full space-x-1  p-1.5 rounded-full relative w-fit   overflow-x-scroll sm:overflow-hidden sm:w-[90%] sm-p-4">
      <div className='flex space-x-1 bg-surface-2 p-1.5 rounded-full relative w-fit bg-surface-2  rounded-full '>

      
      <div 
        className="absolute top-1.5 bottom-1.5 bg-tab rounded-full transition-all duration-300 ease-linear shadow-sm"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`
        }}
      />

      {tabs.map((tab, index) => (
        <button
          key={index}
          ref={(el) => (tabsRef.current[index] = el)}
          onClick={() => handleTabClick(index)}
          className={`relative z-10 px-5 py-2 text-sm text-ink font-medium transition-colors  duration-300 cursor-pointer ${
            activeTab === index ? 'text-slate-900' : 'text-slate-400 hover:text-muted'
          }`}
        >
          {typeof tab === 'string' ? tab : tab.label}
        </button>
      ))}
      </div>
    </div>
  );
}