// ServiceContext.js
import React, { createContext, useState,useContext } from 'react';
// import service_data from '../Components/Assets/servicedata';  
// Create a context
const ServiceContext = createContext();
// Create a provider component
export const ServiceProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <ServiceContext.Provider value={{ selectedService, setSelectedService }}>
      {children}
    </ServiceContext.Provider>
  );
};

// Create a custom hook to use the context
export const useService = () => useContext(ServiceContext);