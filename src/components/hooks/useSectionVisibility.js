import { useLocation } from 'react-router-dom';
import { successSectionData } from '../commonSection/SuccessSectionData';
import { transformSectionData } from '../commonSection/TransformSectionData';

/**
 * Custom hook to manage the visibility and data for SuccessSection and TransformSection
 * based on the current URL pathname.
 */
const useSectionVisibility = () => {
  const { pathname } = useLocation();

  // Pages that require NEITHER section
  const noSectionPages = ['/careers', '/not-found'];

  // Pages that require ONLY TransformSection
  const onlyTransformPages = ['/success-stories'];

  // Check if the current page is a 404/NotFound (simplified for this structure)
  // In a more complex app, this might need more robust checking  !Important for Future-Reference
  const isNotFound = !successSectionData[pathname] && !transformSectionData[pathname] && !noSectionPages.includes(pathname);

  const showSuccess = !noSectionPages.includes(pathname) && !onlyTransformPages.includes(pathname) && !isNotFound;
  const showTransform = !noSectionPages.includes(pathname) && !isNotFound;

  const successData = successSectionData[pathname] || null;
  const transformData = transformSectionData[pathname] || null;

  return {
    showSuccess,
    showTransform,
    successData,
    transformData
  };
};

export default useSectionVisibility;
