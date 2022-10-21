import * as React from "react";
import PropTypes from 'prop-types';
import { DropDownList} from "@progress/kendo-react-dropdowns";

export const SSelect = ({  ...props }) => {
      return (
        <div>
            <DropDownList {...props}/>
          </div>
      );
    };
    SSelect.propTypes = {
 
      /**
       * How large it should be?
       */
      size: PropTypes.oneOf(['small', 'medium', 'large']),

    };
    
    SSelect.defaultProps = {
      
      size: 'medium',
    };