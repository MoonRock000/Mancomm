import React from 'react';

import Section from './Section';

const Subpart = ({ subpart }) => {
  return (
    <div>
      <h2 className='my-4 ms-5'>{subpart.name}</h2>
      {subpart.sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </div>
  );
};

export default Subpart;
