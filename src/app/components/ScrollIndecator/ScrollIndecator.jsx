'use client'
import React, { useState, useEffect } from 'react';
import './ScrollIndecator.css';

export default function ScrollIndecator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="scrollIndecator">
          <div className="aniWrap">
            <div className="mouse">
              <div className="scroller"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}