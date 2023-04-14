import {useEffect, useRef} from 'react';

const useNonInitialEffect = (effect, dependencies) => {
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      effect();
    }
  }, dependencies);
};

export default useNonInitialEffect;
