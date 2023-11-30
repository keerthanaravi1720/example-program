// import React from 'react';
// import { Layout, } from 'antd';
// // import { MessageOutlined, BellOutlined } from '@ant-design/icons';
// import './A.css'; 
// // import Typography from 'antd/es/typography/Typography';

// const { Header } = Layout;

// const AppHeader = () => {
//   return (
//     <Header className="app-header">
//       {/* Left side of the header */}
//       <div className="right-section">
//         {/* Message icon */}
//         {/* <Badge count={5}>
//           <MessageOutlined className="icon" />
//         </Badge>

//         {/* Notification icon */}
//         {/* <Space> */}
//         {/* <Badge dot>
//           <BellOutlined className="icon" />
//         </Badge>
//         </Space> * */}
 
       
//       </div>  
//     </Header>
//   );
// };

// export default AppHeader;





import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'; // Create a CSS file for styling if needed

const AppHeader = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Perform login authentication here
  };

  return (
    <>
  
    <div className="login-page">
    
    <div className="background"><h3>Example</h3>
    <div className='c'>
    <p className='p' style={{fontSize: 14, textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. 
       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
       and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
       </div>
    </div>
    <div className="login-container">
      <Form
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="login-form"
        
      >
        <h3>Login</h3>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            className="input-field"
          />
        </Form.Item>

        <Form.Item
          name="password"  className='style'
          rules={[{ required: true, message: 'Please input your Password!'
         }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            className="input-field"
          />
        </Form.Item>

        <Form.Item>
          <Button className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
      {/* Other login options (e.g., social media login) */}
    </div>
    </div>
    </>
  );
};

export default AppHeader;


// Your React component
// Your React component

