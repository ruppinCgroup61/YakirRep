import React from 'react';
import { Link } from 'react-router-dom';

const BottomSelectionPage = ({ setSelectedBottom }) => {
  const bottoms = [
    { id: 1, name: 'Bottom 1', image: '00108412805-e1.jpg' },
    { id: 2, name: 'Bottom 2', image: '00108412800-e1.jpg' },
    // הוסיפי פריטים נוספים כפי שנדרש
  ];

  return (
    <div>
      <h2>Select a Bottom</h2>
      <div className="items-list">
        {bottoms.map(bottom => (
          <div key={bottom.id} className="item" >
            <Link to="/manual-look" onClick={() => setSelectedBottom(bottom)}>
              <img src={bottom.image} alt={bottom.name} />
              <p>{bottom.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomSelectionPage;
