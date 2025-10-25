"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * App state context
 */

const AppContext = createContext<any>(null);

export const useAppContext = () => useContext(AppContext);

interface contextProps {
  children: ReactNode;
}

export const AppContextWrapper: React.FC<contextProps> = ({ children }) => {
  // define device type
  const [isMobile, setIsMobile] = useState<any>(null);

  useEffect(() => {
    const handleResize = () => {
      // Assuming a width less than 768px is a mobile device
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call the function to set the initial state
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          isMobile,
          activeSection,
          setActiveSection,
          scrollToSection,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
