import React, { useState }  from 'react';
import ItemPage from './ItemPage';
import {items} from './static-data';
import Nav from './Nav';
import './App.css';
import CartPage from './CartPage';

const summarizeCart = cart => 
{
    const groupItems = cart.reduce((summary, item) => 
    {
        summary[item.id] = summary[item.id] || {
            ...item, 
            count: 0
        };
        summary[item.id].count++;

        return summary;
    }, {});
    return Object.values(groupItems);

};

const App = () => 
{
    const [activeTab, setActiveTab] = useState('items');
    const [cart, setCart] = useState([]);

    const addToCart = item => 
    {
        setCart(prevCart => [...prevCart, item]);
    };

 /**
     * Removes an item from the cart.
     * If 'removeAll' is true, removes all instances of the item.
     * Otherwise, decrements the quantity by one. If the item quantity is 1, it removes the item completely.
     * @param {object} item - The item to remove.
     * @param {boolean} removeAll - Flag to indicate removal of all instances of the item.
     */
  const removeItem = (item, removeAll = false) => 
  {
    setCart(currentCart => {
        if (removeAll) 
        {
            return currentCart.filter(i => i.id !== item.id);
        } 
        else 
        {
            const index = currentCart.findIndex(i => i.id === item.id);
            if (index !== -1) 
            {
                let newCart = [...currentCart];
                newCart.splice(index, 1);
                return newCart;
            }

            return currentCart;
        }
    });
};


    return (
        <div className="App">
            <Nav 
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
            
            <main className="App-content">
                <Content tab={activeTab} onAddToCart={addToCart} 
                onRemoveItem={removeItem}
                cart={summarizeCart(cart)}/>
            </main>
        </div>
    );
};

const Content = ({tab , onAddToCart, cart, onRemoveItem}) => {
    switch (tab) {
        case 'items':
            return <ItemPage items={items} onAddToCart={onAddToCart} />;
        case 'cart':
            return (
                <CartPage 
                    items={cart} 
                    onAddOne={onAddToCart} 
                    onRemoveOne={item => onRemoveItem(item, false)}  // Single item removal
                    onRemoveAll={item => onRemoveItem(item, true)}  // Remove all instances
                />
            );
        default:
            return <ItemPage items={items} onAddToCart={onAddToCart} />;
    }
};


export default App;
