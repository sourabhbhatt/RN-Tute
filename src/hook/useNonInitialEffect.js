import {useEffect, useRef} from 'react';

export default function useNonInitialEffect(effect, deps) {
  const initial = useRef(true); // initial.current = true

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
    } else {
      return effect();
    }
  }, deps);
}
