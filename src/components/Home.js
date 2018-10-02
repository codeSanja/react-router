import React from 'react';
import Card from './Card';

const Home = ({ cards }) => {
    return (
        <div className="Grid animated bounceInUp">
          {
              cards.map((card) => (
                  <Card
                      duration={150}
                      key={card.id}
                      card={card}
                  />
              ))
          }
        </div>
    );
};

export default Home;

