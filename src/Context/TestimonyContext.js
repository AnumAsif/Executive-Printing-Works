// TestimonyContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for testimonies
const TestimonyContext = createContext();

// Create a provider component
export const TestimonyProvider = ({ children }) => {
  const [testimonies, setTestimonies] = useState([]);

  // Function to add a new testimony
  const addTestimony = (testimony) => {
    setTestimonies((prevTestimonies) => [...prevTestimonies, testimony]);
  };

  return (
    <TestimonyContext.Provider value={{ testimonies, addTestimony }}>
      {children}
    </TestimonyContext.Provider>
  );
};

// Custom hook to use the TestimonyContext
export const useTestimony = () => useContext(TestimonyContext);
