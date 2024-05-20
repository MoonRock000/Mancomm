import React from 'react';

import Part from './Part';

const Subtitle = ({ subtitle }) => {
  return (
    <div>
      <h2 className='mb-4'>{subtitle.subtitle}</h2>
      {subtitle.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

export default Subtitle;
