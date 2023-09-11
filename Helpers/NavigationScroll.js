// Import the necessary dependencies from the React library and react-router-dom.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Create a functional component called NavigationScroll that takes children as a prop.
const NavigationScroll = ({ children }) => {
  // Use the useLocation hook from react-router-dom to get information about the current location.
  const location = useLocation();
  const { pathname } = location;

  // Use the useEffect hook to execute code when the pathname changes.
  useEffect(() => {
    // Scroll to the top of the page with a smooth scrolling effect.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]); // This effect runs whenever the pathname changes.

  // Return the children (if any) or null if there are no children.
  return children || null;
};

// Export the NavigationScroll component as the default export of this module.
export default NavigationScroll;
