import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children, to, href, variant = 'primary', className = '', onClick, type = 'button', ...props }) => {
  const baseClasses = `btn btn-${variant} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;

