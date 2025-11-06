import React from 'react';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      onUpdateQuantity(item._id, newQuantity);
    }
  };

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
      />
      
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-semibold text-gray-900 truncate">
          {item.name}
        </h4>
        <p className="text-sm text-gray-600 mt-1">
          ${item.price.toFixed(2)} each
        </p>
      </div>
      
      <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-2 py-1">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-primary-500 transition-colors text-gray-700 font-bold"
        >
          −
        </button>
        
        <span className="w-12 text-center font-semibold text-gray-900">
          {item.quantity}
        </span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-primary-500 transition-colors text-gray-700 font-bold"
        >
          +
        </button>
      </div>
      
      <div className="text-right min-w-[80px]">
        <p className="text-lg font-bold text-gray-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      
      <button
        onClick={() => onRemove(item._id)}
        className="w-9 h-9 flex items-center justify-center bg-red-100 hover:bg-red-200 rounded-lg transition-colors text-red-600 hover:text-red-700"
        aria-label="Remove item"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
