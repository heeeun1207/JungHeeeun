import React from 'react';

interface NemoProps {
  name: string;
}

const Nemo: React.FC<NemoProps> = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};

export default Nemo;
