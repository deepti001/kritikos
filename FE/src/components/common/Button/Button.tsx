import React from 'react';

// Define the props interface
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

// Functional component with typed props
const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
