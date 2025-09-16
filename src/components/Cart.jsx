import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, Tag, Lock, CreditCard, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Sample cart data - in real app this would come from state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 149.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      color: "Black",
      size: "One Size",
      brand: "AudioTech"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 299.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      color: "Space Gray",
      size: "42mm",
      brand: "FitPro"
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      color: "Navy Blue",
      size: "Medium",
      brand: "EcoWear"
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [isApplying, setIsApplying] = useState(false);
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (!promoCode) return;
    
    setIsApplying(true);
    // Simulate API call
    setTimeout(() => {
      setIsApplying(false);
      setPromoApplied(true);
    }, 1000);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = promoApplied ? subtotal * 0.1 : 0; // 10% discount
  const tax = (subtotal - discount) * 0.08;
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal - discount + tax + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-lg p-8 md:p-12 transform transition-all hover:scale-[1.02]">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Start shopping to fill it up!</p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto">
            <ShoppingBag className="h-5 w-5" />
            <Link to={"/shop"}>Continue Shopping</Link>
            
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Shopping Cart</h1>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <ShoppingBag className="h-5 w-5" />
            <p>{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Cart Items
                </h2>
              </div>
              
              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="relative group">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-32 h-32 object-cover rounded-xl border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow"
                          />
                          <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-1 text-red-500 hover:text-red-700 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{item.brand}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                          <span className="bg-gray-100 px-3 py-1 rounded-full">Color: {item.color}</span>
                          <span className="bg-gray-100 px-3 py-1 rounded-full">Size: {item.size}</span>
                        </div>
                        
                        {/* Price and Controls */}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden shadow-sm">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-3 hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="h-4 w-4 text-gray-600" />
                            </button>
                            <span className="px-4 py-3 min-w-[3rem] text-center font-semibold bg-gray-50">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-3 hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="h-4 w-4 text-gray-600" />
                            </button>
                          </div>
                          
                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors px-3 py-2 rounded-lg hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="text-sm font-medium">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 sticky top-6">
              <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Order Summary
                </h2>
              </div>
              
              <div className="p-6">
                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Promo code"
                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <button 
                      onClick={applyPromoCode}
                      disabled={isApplying || !promoCode}
                      className={`px-4 py-3 rounded-xl font-medium transition-all ${
                        isApplying || !promoCode 
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {isApplying ? 'Applying...' : 'Apply'}
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
                      <Shield className="h-4 w-4" /> Promo code applied successfully!
                    </p>
                  )}
                </div>
                
                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? (
                      <span className="text-green-600 font-medium">Free</span>
                    ) : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between text-xl font-bold text-gray-900">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Free Shipping Message */}
                {subtotal < 100 && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
                    <p className="text-sm text-blue-800 font-medium mb-2">
                      Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                    <div className="w-full bg-blue-200 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${(subtotal / 100) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
                
                {/* Checkout Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4 flex items-center justify-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  <Link to={"/checkout"}> 
                  Proceed to Checkout
                   </Link>
                </button>
                
                <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium flex items-center justify-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  <Link to={"/shop"}>Continue Shopping</Link>
                 
                </button>
                
                {/* Security Badge */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-center text-sm text-gray-500 mb-3">Secure checkout powered by</p>
                  <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Lock className="h-4 w-4 text-green-600" />
                      <span>SSL Encrypted</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>Secure Payment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;