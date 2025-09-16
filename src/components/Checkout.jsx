import React, { useState } from 'react';
import { Lock, CreditCard, MapPin, Truck, Shield, CheckCircle, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    saveInfo: true,
    
    // Payment Information
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    saveCard: false,
    
    // Shipping Method
    shippingMethod: 'standard',
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  // Sample order data - in real app this would come from cart
  const orderItems = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 149.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 299.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop",
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const shipping = formData.shippingMethod === 'express' ? 14.99 : (subtotal > 100 ? 0 : 9.99);
  const total = subtotal + tax + shipping;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = () => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (!formData.address) newErrors.address = 'Address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zipCode) newErrors.zipCode = 'Zip code is required';
    } else if (step === 2) {
      if (!formData.cardName) newErrors.cardName = 'Name on card is required';
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep(4); // Success step
    }, 2000);
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-center">
        {[1, 2, 3].map((stepNumber) => (
          <React.Fragment key={stepNumber}>
            <div className={`flex items-center ${stepNumber > 1 ? 'ml-4' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step >= stepNumber 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {step > stepNumber ? <CheckCircle className="h-5 w-5" /> : stepNumber}
              </div>
              <div className="ml-2 text-sm font-medium">
                {stepNumber === 1 ? 'Shipping' : stepNumber === 2 ? 'Payment' : 'Review'}
              </div>
            </div>
            {stepNumber < 3 && (
              <div className={`w-16 h-1 mx-2 ${step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderShippingForm = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <MapPin className="h-5 w-5" />
        Shipping Information
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="John"
          />
          {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Doe"
          />
          {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Apartment (optional)</label>
          <input
            type="text"
            name="apartment"
            value={formData.apartment}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Apt 123"
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.address ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="123 Main Street"
          />
          {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.city ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="New York"
          />
          {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.state ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="NY"
          />
          {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.zipCode ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="10001"
          />
          {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>Australia</option>
          </select>
        </div>
      </div>
      
      <div className="mt-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="saveInfo"
            checked={formData.saveInfo}
            onChange={handleInputChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-700">Save this information for next time</span>
        </label>
      </div>
    </div>
  );

  const renderPaymentForm = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <CreditCard className="h-5 w-5" />
        Payment Method
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.cardName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="John Doe"
          />
          {errors.cardName && <p className="mt-1 text-sm text-red-600">{errors.cardName}</p>}
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.cardNumber ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="1234 5678 9012 3456"
          />
          {errors.cardNumber && <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.expiryDate ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="MM/YY"
          />
          {errors.expiryDate && <p className="mt-1 text-sm text-red-600">{errors.expiryDate}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.cvv ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="123"
          />
          {errors.cvv && <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>}
        </div>
      </div>
      
      <div className="mt-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="saveCard"
            checked={formData.saveCard}
            onChange={handleInputChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-700" onClick={()=>(toast.success("Saved successfully!", {
            style: { backgroundColor: "#22c55e", color: "white" }
          }))}>Save card for future purchases</span>
        </label>
      </div>
      
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Truck className="h-5 w-5" />
          Shipping Method
        </h4>
        
        <div className="space-y-3">
          <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              name="shippingMethod"
              value="standard"
              checked={formData.shippingMethod === 'standard'}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <div className="ml-3 flex-1">
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">Standard Shipping</span>
                <span className="font-medium text-gray-900">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <p className="text-sm text-gray-500">5-7 business days</p>
            </div>
          </label>
          
          <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              name="shippingMethod"
              value="express"
              checked={formData.shippingMethod === 'express'}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <div className="ml-3 flex-1">
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">Express Shipping</span>
                <span className="font-medium text-gray-900">$14.99</span>
              </div>
              <p className="text-sm text-gray-500">2-3 business days</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderOrderReview = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Review</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Shipping Address</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">{formData.firstName} {formData.lastName}</p>
            <p className="text-gray-600">{formData.address}</p>
            {formData.apartment && <p className="text-gray-600">{formData.apartment}</p>}
            <p className="text-gray-600">{formData.city}, {formData.state} {formData.zipCode}</p>
            <p className="text-gray-600">{formData.country}</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Payment Method</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">Card ending in {formData.cardNumber?.slice(-4) || '1234'}</p>
            <p className="text-gray-600">Expires {formData.expiryDate || '12/25'}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Order Items</h4>
        <div className="space-y-3">
          {orderItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
              <div className="flex-1">
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
              <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOrderSummary = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({orderItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between text-xl font-bold text-gray-900">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 text-blue-800">
          <Shield className="h-5 w-5" />
          <span className="font-medium">Secure Checkout</span>
        </div>
        <p className="text-sm text-blue-700 mt-1">Your payment information is encrypted and secure</p>
      </div>
      
      {step === 1 && (
        <button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
        >
          Continue to Payment
        </button>
      )}
      
      {step === 2 && (
        <div className="flex gap-3">
          <button
            onClick={handleBack}
            className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <button
            onClick={handleNext}
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Review Order
          </button>
        </div>
      )}
      
      {step === 3 && (
        <div className="flex gap-3">
          <button
            onClick={handleBack}
            className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <button
            onClick={handlePlaceOrder}
            disabled={isProcessing}
            className={`flex-1 py-4 px-4 rounded-xl font-semibold text-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 ${
              isProcessing
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 hover:shadow-xl'
            }`}
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              <>
                <Lock className="h-5 w-5" />
                Place Order
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );

  const renderSuccess = () => (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h2>
        <p className="text-gray-600 mb-8">Thank you for your purchase. Your order has been received and is being processed.</p>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-sm text-gray-600">Order Number</p>
              <p className="font-semibold">#ORD-2024-{Math.floor(Math.random() * 10000)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Amount</p>
              <p className="font-semibold">${total.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Estimated Delivery</p>
              <p className="font-semibold">
                {formData.shippingMethod === 'express' ? '2-3 business days' : '5-7 business days'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Payment Method</p>
              <p className="font-semibold">Card ending in {formData.cardNumber?.slice(-4) || '1234'}</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold">
            View Order Details
          </button>
          <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your order in just a few steps</p>
        </div>

        {step !== 4 && renderStepIndicator()}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 1 && renderShippingForm()}
            {step === 2 && renderPaymentForm()}
            {step === 3 && renderOrderReview()}
          </div>
          
          <div className="lg:col-span-1">
            {step !== 4 && renderOrderSummary()}
          </div>
        </div>

        {step === 4 && renderSuccess()}
      </div>
    </div>
  );
};

export default Checkout;