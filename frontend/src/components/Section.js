import React from 'react';

const Section = ({ section }) => {
  return (
    <div>
      {section.title && <h4>{section.title}</h4>}
      {section.content && <p>{section.content}</p>}
      {section.subsections && (
        <ul className='list-group'>
          {section.subsections.map((sub, index) => (
            <div key={index}>
              {sub.text && (
                <li className='list-group-item list-group-item-secondary'>
                  {sub.text}
                </li>
              )}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Section;
