import React from 'react';

import Subpart from './Subpart';

const Part = ({ part }) => {
  return (
    <div>
      <h1 className='mb-4'>{part.name}</h1>
      {part.authority && (
        <div>
          <strong>Authority:</strong> {part.authority}
        </div>
      )}
      {part.source && (
        <div>
          <strong>Source:</strong> {part.source}
        </div>
      )}
      {part.subparts.map((subpart, index) => (
        <Subpart key={index} subpart={subpart} />
      ))}
    </div>
  );
};

export default Part;
