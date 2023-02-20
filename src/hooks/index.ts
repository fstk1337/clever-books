import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '../app/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useClickOutside = (handler: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            const target = event.target as HTMLDivElement;
            
            if (document.querySelector('.burger-btn.cross')?.contains(target)) {
                return;
            }
            if (!ref.current?.contains(target)) {
                handler();
            }
        }

        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        }
        
    }, [handler]);

    return ref;
}

export const useWindowWidth = () => {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
      function updateWidth() {
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', updateWidth);
      updateWidth();

      return () => window.removeEventListener('resize', updateWidth);
    }, []);
    
    return width;
}