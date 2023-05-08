// This is a React coding question from BFE.dev

import React, { useRef, useEffect } from 'react';

export function useClickOutside(callback) {
  // your code here
  const ref = useRef();

  useEffect(() => {
    if (!ref) {
      return;
    }

    const handleClick = (event) => {
      const clickTarget = event.target;
      const areaTarget = ref.current;

      if (!areaTarget) {
        return;
      }

      if (areaTarget !== clickTarget && !areaTarget.contains(clickTarget)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return ref;
}

// to try your code on the right panel
// export App() component like below

export function App() {
  const ref = useClickOutside(() => {
    console.log('clicked outside');
  });

  return <div ref={ref}>your app</div>;
}
