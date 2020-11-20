import React from 'react';

function MuscleCount({ muscle }) {
  return (
    <div>
      <p>
        {muscle[0]}:{muscle[1]}
      </p>
    </div>
  );
}

export default MuscleCount;
