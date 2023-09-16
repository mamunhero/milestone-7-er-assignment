
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header'
// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // select button usestate
  const [selectButton, setSelectButton] = useState([]);
  // remaining usestate
  const [remainingHour, setRemainingHour] = useState(0);
  // total hour usestate
  const [totalHour, setTotalHour] = useState(0);
  // total price
  const [totalPrice, setTotalPrice] = useState(0)
  // add select button
  const handleAddSelectButton  = courseName =>{
    const isExist = selectButton.find(item=> item.id === courseName.id);
    let count = parseFloat(courseName.credit);
    let sum = parseFloat(courseName.price);
    if (isExist) {
        return toast.error("Once added, cannot be added again")
    } 
    else {
      selectButton.forEach((item) => {
        count = count+ parseFloat(item.credit);
      });
      // console.log(count);
      const totalRemainingHour = 20-count;
      // console.log(totalRemainingHour);
      selectButton.forEach((item) => {
        sum = sum + parseFloat(item.price)
      });
      // console.log(sum);
      if (count > 20 ){
        return toast.error("Your limited time is over time, can't add new time")
        
      }
      if (sum > 150000) {
        return toast("Your balance is insufficient")
      }
      const newSelectButton = [...selectButton, courseName];
      setRemainingHour(totalRemainingHour);
      setTotalHour(count);
      setTotalPrice(sum);
      setSelectButton(newSelectButton);
      
    }
    
  }
  
  
  return (
    <>
      <Header></Header>
      <div className='flex max-w-6xl mx-auto'>
        <Cards handleAddSelectButton={handleAddSelectButton}></Cards>
        <Cart 
          selectButton={selectButton} 
          remainingHour={remainingHour}
          totalHour={totalHour}
          totalPrice={totalPrice}
          >
          
        </Cart>
      </div>
      <ToastContainer 
        position="top-center"
      />
    </>
  )
}

export default App


