import React from 'react';
import './page.css';
import { Card, Input, Button } from 'antd';
// import { FacebookOutlined, GoogleOutlined, InstagramOutlined } from '@ant-design/icons';
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';



const Page = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <h1>Ikigei</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        </nav>
      <div className='whole'>
      <div className="body-content">
        <h2 style={{color:'black'}}>Rough</h2>
        {/* <p>
        Nunc nibh lectus, malesuada vitae suscipit a, varius nec arcu. 
        Duis euismod nisi eget nunc sodales vulputate.
         Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nam sed aliquam orci, et pulvinar nunc. 
          Mauris eros neque, posuere et rhoncus eu, mattis vitae massa.
           Sed sed dapibus justo. Duis id lacus nec erat mattis vulputate at sit amet turpis. 
           Orci varius natoque penatibus et magnis dis parturient montes, 
           nascetur ridiculus mus. Fusce luctus vitae ante nec placerat.
            Etiam accumsan sed nulla vel condimentum. Etiam euismod eros ac dolor porttitor, 
            eget egestas nisi venenatis. Maecenas felis turpis, consectetur in dignissim dapibus, tincidunt eget magna.
             Fusce euismod, metus finibus euismod blandit, risus sem suscipit arcu, at egestas eros ante et orci.
         Donec feugiat dui nisl, eget tincidunt eros fringilla sit amet.
        </p> */}
        {/* <p>
          Quisque gravida purus vel erat sollicitudin, ac venenatis leo iaculis. Etiam fringilla vitae dolor vel
          efficitur. Sed at maximus enim, in posuere turpis. Vestibulum condimentum orci at ex fringilla congue.
          Integer non erat nulla. Aliquam et mattis felis. Suspendisse potenti.
        </p> */}


      </div>
      <div className="row">
  <div className="col">
    <Card className="cd">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
         It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum.</p>
    </Card>
  </div>
  <div className="col">
    <Card className="cd">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
         It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum.</p>
    </Card>
  </div>

  <div className="col">
    <Card className="cd">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
         It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum.</p>
    </Card>
  </div>
</div>



<div className="row">
  <div className="col">
    <Card className="cd1">
      <p>Content for Card 1...</p>
    </Card>
  </div>
  <div className="col">
    <Card className="cd2">
      <p>Content for Card 2...</p>
    </Card>
  </div>

  <div className="col">
    <Card className="cd3">
      <p>Content for Card 2...</p>
    </Card>
  </div>
</div>


<p className='body-content'>Nunc nibh lectus, malesuada vitae suscipit a, varius nec arcu. Duis euismod nisi eget nunc sodales vulputate. 
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\
     Nam sed aliquam orci, et pulvinar nunc. Mauris eros neque, posuere et rhoncus eu,
      mattis vitae massa. Sed sed dapibus justo. 
      Duis id lacus nec erat mattis vulputate at sit amet turpis.
       Orci varius natoque penatibus et magnis dis parturient montes, 
       nascetur ridiculus mus. Fusce luctus vitae ante nec placerat.
        Etiam accumsan sed nulla vel condimentum.
         Etiam euismod eros ac dolor porttitor, eget egestas nisi venenatis. 
         Maecenas felis turpis, consectetur in dignissim dapibus, tincidunt eget magna. 
         Fusce euismod, metus finibus euismod blandit, risus sem suscipit arcu, at egestas eros ante et orci.
          Donec feugiat dui nisl, eget tincidunt eros fringilla sit amet.</p>



          <div className="row">
  <div className="col">
    <Card className="cd1">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
         It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum.</p>
    </Card>
  </div>
  <div className="col">
    <Card className="cd2">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
         It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum.</p>
    </Card>
  </div>

  <div className="col">
    <Card className="cd3">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
         It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum.</p>
    </Card>
  </div>
</div>

<div className="social-sidebar">
      
        {/* Using React Icons */}
        <FaFacebook className="icon" />
        <FaGoogle className="icon" />
        <FaInstagram className="icon" />
      </div>

      <div className="row">
        {/* Registration Card */}
        <div className="col">
         
            <h3 >Register Now</h3>
            <Card className="registration-card">
            <form>
              <div className="form-group">
                <label>Username</label>
                <Input  type="text" placeholder="Enter your username" />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <Input type="password" placeholder="Enter your password" />
              </div>
              <div className="form-group">
                <label>Contact</label>
                <Input type="text" placeholder="Enter your contact number" />
              </div>
              <Button  className="register-button">Register</Button>
            </form>
          </Card>
        </div>

<div className='col'>
<h3 >Login</h3>
            <Card className="registration-card" style={{gap: 3}}>
            <form>
              <div className="form-group" style={{marginTop: 50, gap: 3}}>
                <label>Username</label>
                <Input  type="text" placeholder="Enter your username" />
              </div>

              <div className="form-group">
                <label>Password</label>
                <Input type="password" placeholder="Enter your password" />
              </div>

              <Button  className="register-button">Login</Button>
              </form> 
            </Card>

</div>







        </div>




       
    </div>
   
    </div>
  );
};


export default Page;
