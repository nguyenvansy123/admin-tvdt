import { useEffect, useRef } from 'react';

const useOnceEffect = (func, deps) => {
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            func();
            isMounted.current = true;
        }
    }, deps);
};

export default useOnceEffect;