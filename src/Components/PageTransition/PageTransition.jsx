import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

const PageTransition = ({ children, onTransitionEnd }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
      setCurrentPath(location.pathname);
    } else if (location.pathname !== currentPath) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setIsExiting(false);
        setCurrentPath(location.pathname);
        setDisplayChildren(children);
        if (onTransitionEnd) {
          onTransitionEnd();
        }
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [location, currentPath, children, onTransitionEnd, isInitialLoad]);

  return (
    <div className="curtain-wrapper">
      <div className={`curtain ${isExiting ? 'curtain-exit' : 'curtain-enter'}`} />
      <div className="page-content">{displayChildren}</div>
    </div>
  );
};

export default PageTransition;
