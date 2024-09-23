import React from 'react'

const getCols = (length) => {
  const array = Array.from({ length }, (_, i) => ({name: `column #${i}`}));
  return array;
}

function Grid() {
  const cols = getCols(6);
  return (
    <div className={`z-50 fixed top-0 right-0 bottom-0 left-0 0 grid grid-cols-${cols.length} p-md lg:px-[64px] gap-lg`}>
       {cols.map((col) => {
        return (
          <div key={col.name} className='bg-gray-400 opacity-30'></div>
        )
       })}
    </div>
  )
}

export default Grid