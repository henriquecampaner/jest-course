import React from 'react';

/**
 * Function react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} = Rendered component (or null if `success` props)
 */

export default (props) => {
  if(props.success) {
    return (      
    <div data-test="component-congrats">
    <span data-test="congrats-message">
      Congratulations! You guessed the word!
    </span>
  </div>
    )
  } else {
    return (
      <div data-test="component-congrats" />
    )
  }
}
