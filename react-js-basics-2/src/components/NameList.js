import React from 'react';

function NameList() {
  const names = ['Gresa', 'Mario', 'Luixhi'];

  const nameList = names.map((name, index) => (
    <h2 key={index}>{`Index: ${index}, Name: ${name}`}</h2>
  ));

  return (
    <div>
      {nameList}
    </div>
  );
}

export default NameList;