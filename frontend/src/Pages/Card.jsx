// import React from 'react';
// import { Row, Col, Input, Button } from 'antd';
// import './Card.css';

// const Card = () => {
//   return (
//     <div className="card-container">
//       <Row justify="center" align="middle" style={{ height: '100vh' }}>
//         <Col xs={20} sm={16} md={12} lg={8}>
//           <div className="card">
//             <h2>Login</h2>
//             <Input placeholder="Username" />
//             <Input.Password placeholder="Password" />
//             <Button type="primary" block>
//               Login
//             </Button>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Card;






import React, { useState } from 'react';
// import { Row, Col, Card ,  Input, Button as AntdCard } from 'antd';
import { Row, Col, Card as AntdCard, Input, Button } from 'antd';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { IoLogoWindows, IoLogoAndroid } from 'react-icons/io5';
import './Card.css';

const CardC = () => {
  const [showNewCard, setShowNewCard] = useState(false);
  const [showNew, setShow] = useState(false);
  const [showCard, setCard] = useState(false);

  const handleCardHover = () => {
    setShowNewCard(true);
  };

  const handleCardHover1 = () => {
    setShow(true);
  };

  const handleCardHover2 = () => {
    setCard(true);
  };

  const handleCardLeave2 = () => {
    setCard(false);
  };
  const handleCardLeave1 = () => {
    setShow(false);
  };

  const handleCardLeave = () => {
    setShowNewCard(false);
  };

  return (
    <div className="card-container">
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={20} sm={16} md={8} lg={6}>
          <div
            className="card-wrapper"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <AntdCard className="card">
              <div className="card-content">
                <AiFillGoogleCircle className="card-icon" />
                <h2>Google</h2>
              </div>
            </AntdCard>
          </div>
          {showNewCard && (
            <div className="card-wrapper">
              <AntdCard className="new-card">
                <div className="content">
                  <p>this is a new card.This paragraph contains a lot of lines in the source code, but the browser ignores it.</p>
                </div>
              </AntdCard>
            </div>
          )}
        </Col>
        <Col xs={20} sm={16} md={8} lg={6}>
          <div
            className="card-wrapper"
            onMouseEnter={handleCardHover1}
            onMouseLeave={handleCardLeave1}
          >
            <AntdCard className="card">
              <div className="card-content">
                <IoLogoWindows className="card-icon" />
                <h2>Windows</h2>
              </div>
            </AntdCard>
          </div>
          {showNew && (
            <div className="card-wrapper">
              <AntdCard className="new-card">
                <div className="content">
                  <p>this is a new card.This paragraph contains a lot of lines in the source code, but the browser ignores it.</p>
                </div>
              </AntdCard>
            </div>
          )}
        </Col>
        <Col xs={20} sm={16} md={8} lg={6}>
          <div
            className="card-wrapper"
            onMouseEnter={handleCardHover2}
            onMouseLeave={handleCardLeave2}
          >
            <AntdCard className="card">
              <div className="card-content">
                <IoLogoAndroid className="card-icon" />
                <h2>Android</h2>
              </div>
            </AntdCard>
          </div>
          {showCard && (
            <div className="card-wrapper">
              <AntdCard className="new-card">
                <div className="content">
                  <p>this is a new card.This paragraph contains a lot of lines in the source code, but the browser ignores it.</p>
                </div>
              </AntdCard>
            </div>
          )}
        </Col>
      </Row>

      <Row justify="center" align="middle" style={{ height: '100vh' }}>
         <Col xs={20} sm={16} md={12} lg={8}>
          <div className="card" style={{height:'200px' }}>
            <h2>Login</h2>           
              <Input placeholder="Username" style={{marginTop:'10px'}}/>
            <Input.Password placeholder="Password"  style={{marginTop:'10px'}} />        
                <Button   style={{marginTop:'10px', backgroundColor:'aqua'}} block>
              Login
             </Button>
           </div>
        </Col>
       </Row>
    </div>
   
  );
};

export default CardC;
