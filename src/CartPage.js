import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({ items, onAddOne, onRemoveOne, onRemoveAll }) {
    return (
        <ul className="CartPage-items">
            {items.map(item => (
                <li key={item.id} className="CartPage-item">
                    <Item item={item}>
                        <div className="CartItem-controls">
                            <button 
                                className="CartItem-removeOne"
                                onClick={() => onRemoveOne(item)}
                            >−</button>
                            <span className="CartItem-count">{item.count}</span>
                            <button 
                                className="CartItem-addOne"
                                onClick={() => onAddOne(item)}
                            >+</button>
                            <button 
                                className="CartItem-removeAll"
                                onClick={() => onRemoveAll(item)}
                            >Remove All</button>
                        </div>
                    </Item>
                </li>    
            ))}
        </ul>
    );
}


CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired,
    onRemoveAll: PropTypes.func.isRequired
};

export default CartPage;
