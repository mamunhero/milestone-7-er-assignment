
import PropTypes from 'prop-types';

const Cart = ({selectButton, remainingHour, totalHour, totalPrice}) => {
  // console.log(selectButton)
  return (
    <div className='md:w-1/4 mt-10 ml-10 text-center'>
      <h1 className='text-xl text-[#2F80ED] font-bold'>Credit Hour Remaining: {remainingHour}</h1>
      <hr />
      <h2 className='text-2xl text-[#1C1B1B] font-bold'>Course Name: {selectButton.length}</h2>
      <ol style={{listStyle:"decimal"}}>
          {
            selectButton.map(courseInfo => (
              <li key={courseInfo.id}>{courseInfo.title}</li>
            ))
          }
      </ol>
      <h1 className='text-base text-[#1C1B1B] font-medium'>Total Credit Hour : {totalHour}</h1>
      <hr />
      <h1 className='text-base text-[#1c1b1b] font-semibold'>Total Price : {totalPrice} USD</h1>
    </div>
  );
};

Cart.propTypes = {
  
};
 
export default Cart;


