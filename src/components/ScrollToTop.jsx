import { ArrowUpOutlined, UpOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'



export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);
    
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} title="Ir arriba">
          <ArrowUpOutlined/>
        </button>
      )}
    </div>
  )
}
