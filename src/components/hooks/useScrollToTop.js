import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook that automatically scrolls to the top of the page
 * whenever the route changes.
 */
const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
};

export default useScrollToTop;
