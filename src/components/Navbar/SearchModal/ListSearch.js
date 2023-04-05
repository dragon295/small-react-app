import React from 'react';

const listItems = [
  {
    id: 1,
    name: 'God Of War',
  },
  {
    id: 2,
    name: 'Total War Warhammer III',
  },
  {
    id: 3,
    name: 'Elden Ring',
  },
  {
    id: 4,
    name: 'Tom Clancys Rainbow Six Extraction',
  },
  {
    id: 5,
    name: 'Monster Hunter Rise',
  },
  {
    id: 6,
    name: 'Dying Light 2',
  },
  {
    id: 7,
    name: 'Elex II',
  },
];

const ListSearch = ({ searchValue }) => {
  return (
    <>
      {searchValue && (
        <main>
          {listItems.some((val) =>
            val.name.toLowerCase().includes(searchValue)
          ) ? (
            <ul style={{ listStyleType: 'none' }}>
              {listItems.map((item) => {
                const { id, name } = item;
                if (name.toLowerCase().includes(searchValue)) {
                  return <li key={id}>{name}</li>;
                } else return '';
              })}
            </ul>
          ) : (
            <p>Sorry, we couldn't find your criteria. Please try again!</p>
          )}
        </main>
      )}
    </>
  );
};

export default ListSearch;
