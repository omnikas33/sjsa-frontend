import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const FontSizeContext = createContext();

// Create provider component
export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16); // Default font size

  useEffect(() => {
    // Update CSS variable when fontSize changes
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
  }, [fontSize]);

  const increaseFontSize = () => setFontSize(prevSize => prevSize + 1);
  const decreaseFontSize = () => setFontSize(prevSize => Math.max(prevSize - 1, 12)); // Prevent font size from being too small

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

// Custom hook for using the font size context
export const useFontSize = () => useContext(FontSizeContext);
