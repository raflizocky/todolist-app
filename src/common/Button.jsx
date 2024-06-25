import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

/**
 * A React component for rendering a button.
 *
 * @param {object} children - The content to display inside the button.
 * @param {string} variant - The variant of the button (default is 'primary').
 * @param {object} props - Additional props to pass to the button component.
 * @return {JSX.Element} The rendered button component.
 */
function Button({ children, variant = 'primary', ...props }) {
  return (
    <BootstrapButton variant={variant} {...props}>
      {children}
    </BootstrapButton>
  );
}

export default Button;