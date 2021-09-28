import React, {useState} from 'react';
import './App.css';
import ItemPage from './ItemPage';
import { items } from './static-data';
import Nav from './Nav.js';
import CartPage from './CartPage';


const summarizeCart =(cart) => 

{

  const groupItems = cart.reduce((summary, item) =>
  {
    summary[item.id] = summary[item.id] || 
    {
      ...item,
      count: 0
    }

    summary[item.id].count++;

    return summary;
  }, {});

  return Object.values(groupItems);

};

const App = () => 

{

  const [activeTab, setActiveTab] = useState('items');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => 
  {

    setCart(prevCart => [...prevCart, item])



  }


  return (

    <div className = "App">

      <Nav
      
      activeTab = {activeTab}
      onTabChange = {setActiveTab}
      
      
      />

      <div>

      {cart.length} items


      </div>

      <main className = "App-content">

        <Content tab = {activeTab} onAddToCart= {addToCart}
        cart = {summarizeCart(cart)}/>

      </main>


    </div>

  );

};

const Content = ({tab, onAddToCart, cart}) =>
{


  switch(tab)
  {
    
      case 'items':
        return <ItemPage items = {items} onAddToCart = {onAddToCart} />;
      case 'cart':
        return <CartPage item = {cart}/>
      default:
        break;





  }

};

export default App;