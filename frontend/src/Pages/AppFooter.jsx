
// import React, { useState, useEffect } from 'react';
// import './A.css';
// import { Button } from 'antd';
// import { IoIosSunny, IoMdMoon } from 'react-icons/io';

// const AppFooter = () => {
//   const [isSun, setIsSun] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);

//   const handleSunMoonToggle = () => {
//     setIsSun((prevIsSun) => !prevIsSun);
//   };

//   useEffect(() => {
//     setDarkMode(!isSun);
//   }, [isSun]);

//   return (
//     <>
//       <div>
//         <button className="button">Button</button>
//       </div>

//       <div>
//         <Button className="button1" size="large">
//           Button
//         </Button>
//       </div>

//       <div>
//         <Button className="button2" size="large">
//           Button
//         </Button>
//       </div>

//       <div className="toggle-container">
//         <label className="toggle-switch">
//           <input type="checkbox" checked={isSun} onChange={handleSunMoonToggle} />
//           <span className="toggle-slider round">
//             {isSun ? <IoIosSunny className="sun" /> : <IoMdMoon className="moon" />}
//           </span>
//         </label>
//       </div>
//       <style>{`body { background-color: ${darkMode ? '#333' : '#fff'}; }`}</style>
//     </>
//   );
// };

// export default AppFooter;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './A.css';
import { Button } from 'antd';
import { IoIosSunny, IoMdMoon } from 'react-icons/io';

const AppFooter = () => {
  const [isSun, setIsSun] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSunMoonToggle = () => {
    setIsSun((prevIsSun) => !prevIsSun);
  };

  const handleNavigateToCard = () => {
    navigate('/card'); // Navigate to the 'card' page using navigate
  };

const handleSidebar=()=>{
  navigate('/side');
}
const handleH=()=>{
  navigate('/head');
}

  useEffect(() => {
    setDarkMode(!isSun);
  }, [isSun]);

  return (
    <>
      <div className='row' style={{marginTop: 70}}>
        <div className='col'>
        <button className="button" onClick={handleNavigateToCard}>
          Card
       
          </button>
         <Button className="button1" size="large" onClick={handleSidebar}> 
          Head
      
      </Button>
         <Button className="button2" size="large" onClick={handleH} >
          
          Footer
          </Button>
        
          
           
      </div>

      </div>

      <div className="toggle-container">
        <label className="toggle-switch">
          <input type="checkbox" checked={isSun} onChange={handleSunMoonToggle} />
          <span className="toggle-slider round">
            {isSun ? <IoIosSunny className="sun" /> : <IoMdMoon className="moon" />}
          </span>
        </label>
      </div>
      <style>{`body { background-color: ${darkMode ? '#333' : '#fff'}; }`}</style>
    </>
  );
};

export default AppFooter;
