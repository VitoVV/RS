import {createContext, useContext, useState} from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success'  ,
    // Message to be displayed, can be any string
    message: 'Extra contextual information about the response '  ,
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: 'error', message: 'Extra contextual information about the response ' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
