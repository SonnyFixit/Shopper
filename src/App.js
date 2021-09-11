import React, {useState} from 'react';
import './App.css';
import Nav from './Nav.js';


const App = () => 

{

  const [activeTab, setActiveTab] = useState('items');


  return (

    <div className = "App">

      <Nav
      
      activeTab = {activeTab}
      onTabChange = {setActiveTab}
      
      
      />

      <main className = "App-content">

        <Content tab = {activeTab}/>

      </main>


    </div>

  );

};

const Content = ({tab}) =>
{


  switch(tab)
  {
    
    default:
      case 'items':
        return <span> The Items </span>
      case 'cart':
        return <span> The Cart </span>





  }

}

export default App;