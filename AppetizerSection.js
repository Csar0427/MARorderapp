import React, { useState } from 'react';
import './App.css';

const AppetizerSection = ({ addToBasket }) => {
  const appetizers = [
    {
      name: 'BLACK HUMAN',
      price: '59 pesos',
      description: 'Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.',
      image: 'https://via.placeholder.com/300x200', // Dummy image URL
    },
    {
      name: 'WHITE HUMAN',
      price: '69 pesos',
      description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.',
      image: 'https://via.placeholder.com/300x200', // Dummy image URL
    },
    {
      name: 'WHITE HUMAN',
      price: '69 pesos',
      description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.',
      image: 'https://via.placeholder.com/300x200', // Dummy image URL
    },
    {
      name: 'WHITE HUMAN',
      price: '69 pesos',
      description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.',
      image: 'https://via.placeholder.com/300x200', // Dummy image URL
    },
  ];

  const [selectedAppetizer, setSelectedAppetizer] = useState(null);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [quantity, setQuantity] = useState(1); // State for quantity

  const handleItemClick = (index) => {
    setSelectedAppetizer(appetizers[index]);
    setDescriptionVisible(true);
  };

  const handleCloseDescription = () => {
    setSelectedAppetizer(null);
    setDescriptionVisible(false);
  };

  const handleOrder = () => {
    if (selectedAppetizer && quantity > 0) {
      addToBasket({ ...selectedAppetizer, quantity });
      setSelectedAppetizer(null);
      setQuantity(1);
    }
  };

  return (
    <div className="appetizer-section">
      <h2>Appetizers</h2>
      <p>Explore our delicious appetizers.</p>
     
      <div className="appetizer-menu">
        
        {appetizers.map((appetizer, index) => (
          <div key={index} className="appetizer-item" onClick={() => handleItemClick(index)}>
            <div className="column-left">
              <h3>{appetizer.name}</h3>
              <p>{appetizer.price}</p>
              <button>View</button>
              <button onClick={() => { setSelectedAppetizer(appetizer); setDescriptionVisible(true); }}>Order</button>
            </div>
            <div className="column-right">
              <img src={appetizer.image} alt={appetizer.name} />
            </div>
          </div>
        ))}
      </div>
      {selectedAppetizer && descriptionVisible && (
        <div className="appetizer-description">
          <div className="description-content">
            <h3>{selectedAppetizer.name}</h3>
            <p>{selectedAppetizer.description}</p>
            <div className="quantity-counter">
              <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} style={{ width: '50px', fontSize: '14px' }} />
            </div>
            <div className="button-group">
              <button onClick={handleCloseDescription}>Close</button>
              <button onClick={handleOrder}>Order</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppetizerSection;
