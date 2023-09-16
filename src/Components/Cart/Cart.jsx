
import PropTypes from 'prop-types';

const Cart = ({selectButton, remainingHour, totalHour, totalPrice}) => {
  // console.log(selectButton)
  return (
    <div className='md:w-1/4 mt-10 ml-10 text-center bg-white rounded-xl px-5 py-5'>
      <h1 className='text-xl text-[#2F80ED] font-bold mt-5 mb-5'>Credit Hour Remaining: {remainingHour}</h1>
      <hr />
      <h2 className='text-2xl text-[#1C1B1B] font-bold mt-5 mb-5'>Course Name: {selectButton.length}</h2>
      <ol style={{listStyle:"decimal"}}>
          {
            selectButton.map(courseInfo => (
              <li className='text-base font-normal text-gray-500' key={courseInfo.id}>{courseInfo.title}</li>
            ))
          }
      </ol>
      <h1 className='text-base text-[#1C1B1B] font-medium mt-5 mb-5'>Total Credit Hour : {totalHour}</h1>
      <hr />
      <h1 className='text-base text-[#1c1b1b] font-semibold mt-5'>Total Price : {totalPrice} USD</h1>
    </div>
  );
};

Cart.propTypes = {
  
};
 
export default Cart;


