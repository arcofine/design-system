import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@progress/kendo-react-buttons';
/**
 * Primary UI component for user interaction
 */
export const SButton = ({ primary, label, ...props }) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <Button
      {...props}
    >
      {label}
    </Button>
  );
};

SButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  shape: PropTypes.oneOf(['null','square', 'rectangle']),
  /**
   * What background color to use
   */
  themeColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

  rounded: PropTypes.oneOf(['small', 'medium', 'full','large']),
};

SButton.defaultProps = {
  themeColor: null,
  primary: false,
  size: null,
  onClick: undefined,
  shape:null,
  rounded:null
};
