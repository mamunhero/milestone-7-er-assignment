import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Cards = ({handleAddSelectButton}) => {

  const [cards, setCards] = useState([]);
  useEffect( () => {
    fetch("data.json")
    .then( response => response.json())
    .then(data=> setCards(data))
  },[])
  // console.log(setCards);
  return (
    <div className='md:w-3/4 mt-10 mb-10 max-w-6xl mx-auto'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          cards.map(cardsDetailes => <Card
          key={cardsDetailes.id}
          cardInfo={cardsDetailes}
          handleAddSelectButton={handleAddSelectButton}>
          </Card>)
        }
      </div>
    </div>
  );
};

Cards.propTypes = {
  handleAddSelectButton:PropTypes.func,
};

export default Cards;




