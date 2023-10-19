import React from 'react';

interface Props {
  value: number;
}

const Circle: React.FC<Props> = ({value}) => {
  return (
    <div className="circle">
      {value}
    </div>
  );
};

export default Circle;