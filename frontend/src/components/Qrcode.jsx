
import React, { useState } from 'react';
import './ex.css';
import { Drawer, Button, Form, Input, Select } from 'antd';
import QRCode from 'qrcode.react';

const Example = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const qrData = 'https://www.kyo.com';

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log('User registration values:', values);
    onClose();
    form.resetFields();
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h1>My Static Navbar</h1>
      </nav>
      <div className="main-content">

        <div>
          <Button onClick={showDrawer}>Open Drawer</Button>
        </div>
        <div>
          <h1>QR Code Generator</h1>
          <QRCode value={qrData} />
        </div>
        <Drawer
          title="User Registration"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Form form={form} onFinish={onFinish}>
         
           <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: 'Please select a role!' }]}
          >
            <Select>
              <Select.Option value="admin">Admin</Select.Option>
              <Select.Option value="user">User</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
          </Form>
        </Drawer>
      </div>






      
    </div>
  );
};

export default Example;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import './ex.css';
// // import './Card.css'; // Import the card styles

// const Navbar = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li><Link to="/qr">Home</Link></li>
//           <li><Link to="/cart">Cart</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>

//       <div className="card4-row">
//          <div className="card4">
        
//         </div>
       



//         <div className="card5">
        
//         </div>
//         <div className="card6">
         
//         </div>
//         <div className="card7">
         
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

