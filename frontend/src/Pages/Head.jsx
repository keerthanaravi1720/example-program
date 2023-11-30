import React from 'react';
import { Form, Input, DatePicker, Upload, Button } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
import './head.css'


const head = () => {
    return (
      <div className="form-container">
        <Form className="glassmorphism-form" layout="vertical">
          <Form.Item label="Username"  >
            <Input placeholder="Enter your username" className="input1"  rules={[{ message: 'Please input your username' }]}  />
          </Form.Item>
               
      
    
          <Form.Item label="Model Number">
            <Input placeholder="Enter model number" className='input' />
          
          </Form.Item>
          <Form.Item label="Date">
            <DatePicker format='DD/MM/YYYY' style={{ width: '100%' }} className='input1' />
          </Form.Item>
          <Form.Item label="PDF">
            <Upload>
              <Button  className='input'>Upload PDF</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Description">
            <Input.TextArea rows={4} placeholder="Enter description" className='input1' />
          </Form.Item>
          <Form.Item>
            <Button className='b'>Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  };
  
  export default head;
  

