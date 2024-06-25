import React from 'react';
import { Form } from 'react-bootstrap';

/**
 * Renders an input field with an optional label.
 *
 * @param {Object} props - The props object containing the label and other input properties.
 * @param {string} props.label - The label for the input field.
 * @param //{...Object} props.props - Additional properties to be spread onto the Form.Control component.
 * @return {JSX.Element} The rendered Form.Group component containing the input field and label.
 */
function Input({ label, ...props }) {
  return (
    <Form.Group className="mb-3">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...props} />
    </Form.Group>
  );
}

export default Input;