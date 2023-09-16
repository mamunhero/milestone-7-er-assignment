
import PropTypes from 'prop-types';
import price from "../../../src/assets/dollar-sign 1.svg";
import frame from "../../../src/assets/Frame.png";

const Card = ({cardInfo, handleAddSelectButton}) => {
  return (
    <div className='mb-5'>
          <div className="card card-compact bg-base-500 shadow-xl" style={{height:"100%"}}>
            <figure className=" px-5 pt-5">
                <img  className='w-full' src={cardInfo.cover} alt="card-img" />
            </figure>
            <div className="card-body">
              <h2 className="text-base text-[#1C1B1B] font-semibold ">{cardInfo.title}</h2>
              <p className="text-sm font-normal text-gray-500">{cardInfo.description}</p>
              <div className="flex gap-5">
                <div className="flex gap-3">
                  <span><img src={price} alt="price-svg"  /></span>
                  <p className="text-gray-500 font-medium text-base">{cardInfo.price}</p>
                </div>
                <div className="flex gap-3">
                  <span><img src={frame} alt="frame-png"  /></span>
                  <p className="text-gray-500 font-medium text-base">{cardInfo.credit}</p>
                </div>
              </div>
              <div className="w-full">
                <button 
                 onClick={()=>handleAddSelectButton(cardInfo)}
                 className=" text-white font-semibold text-lg bg-[#2F80ED] border-2 border-[#2F80ED] rounded-lg px-2 py-2 w-full mt-2 mb-2">Select</button>
              </div>
            </div>
          </div>
    </div>
  );
};

Card.propTypes = {
  
};

export default Card;





