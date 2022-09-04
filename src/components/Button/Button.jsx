import React from 'react';

function Button(props) {
  return (
    <button
      className="Button"
      type="button"
      onClick={() => {
        props.onClick();
      }}
    >
      Load more
    </button>
  );
}

export default Button;
