import React from 'react';

const Button = ({ handleDownload, disabled }) => {
  return (
    <button
      className='btn btn-success'
      onClick={handleDownload}
      disabled={disabled}>
      Download Document
    </button>
  );
};

export default Button;
