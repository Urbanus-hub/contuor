import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, XCircle, RefreshCw, Eye, Download, Search } from 'lucide-react';

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Sample order data - in real app this would come from API
  const orders = [
    {
      id: 'ORD-2024-1234',
      date: '2024-01-15',
      status: 'delivered',
      total: 579.97,
      items: [
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
          quantity: 1,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
        },
        {
          id: 3,
          name: "Organic Cotton T-Shirt",
          price: 29.99,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop",
        }
      ],
      shippingAddress: {
        name: "John Doe",
        address: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "United States"
      },
      trackingNumber: "1Z9999W99999999999",
      estimatedDelivery: "2024-01-20"
    },
    {
      id: 'ORD-2024-1235',
      date: '2024-01-20',
      status: 'shipped',
      total: 149.99,
      items: [
        {
          id: 1,
          name: "Premium Wireless Headphones",
          price: 149.99,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
        }
      ],
      shippingAddress: {
        name: "John Doe",
        address: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "United States"
      },
      trackingNumber: "1Z9999W99999999998",
      estimatedDelivery: "2024-01-25"
    },
    {
      id: 'ORD-2024-1236',
      date: '2024-01-25',
      status: 'processing',
      total: 89.97,
      items: [
        {
          id: 3,
          name: "Organic Cotton T-Shirt",
          price: 29.99,
          quantity: 3,
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop",
        }
      ],
      shippingAddress: {
        name: "John Doe",
        address: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "United States"
      },
      estimatedDelivery: "2024-02-01"
    },
    {
      id: 'ORD-2024-1237',
      date: '2024-01-28',
      status: 'cancelled',
      total: 299.99,
      items: [
        {
          id: 2,
          name: "Smart Fitness Watch",
          price: 299.99,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
        }
      ],
      shippingAddress: {
        name: "John Doe",
        address: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "United States"
      }
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-blue-600" />;
      case 'processing':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Package className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleReorder = (orderItems) => {
    // In a real app, this would add items to cart
    console.log('Reordering items:', orderItems);
    alert('Items added to cart!');
  };

  const handleDownloadInvoice = (orderId) => {
    // In a real app, this would download an invoice
    console.log('Downloading invoice for order:', orderId);
    alert(`Invoice for ${orderId} downloaded!`);
  };

  const OrderDetailsModal = ({ order, onClose }) => {
    if (!order) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Order Details</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <XCircle className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Order Information</h4>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-600">Order ID:</span> {order.id}</p>
                  <p><span className="text-gray-600">Date:</span> {new Date(order.date).toLocaleDateString()}</p>
                  <p><span className="text-gray-600">Status:</span> 
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </p>
                  <p><span className="text-gray-600">Total:</span> ${order.total.toFixed(2)}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Shipping Address</h4>
                <div className="space-y-1 text-sm">
                  <p>{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.address}</p>
                  <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                  <p>{order.shippingAddress.country}</p>
                </div>
              </div>
            </div>
            
            {order.trackingNumber && (
              <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Tracking Information</h4>
                <p className="text-sm text-gray-600">Tracking Number: {order.trackingNumber}</p>
                {order.estimatedDelivery && (
                  <p className="text-sm text-gray-600">Estimated Delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}</p>
                )}
              </div>
            )}
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Order Items</h4>
              <div className="space-y-3">
                {order.items.map((item) => (
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
            
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => handleReorder(order.items)}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Reorder
              </button>
              <button
                onClick={() => handleDownloadInvoice(order.id)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage your orders</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders by ID or product name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Orders</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-16">
              <Package className="mx-auto h-24 w-24 text-gray-300 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders found</h2>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors font-semibold">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <div key={order.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Order Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        {new Date(order.date).toLocaleDateString()} • {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                      </p>
                      <p className="text-lg font-bold text-gray-900">${order.total.toFixed(2)}</p>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </button>
                      <button
                        onClick={() => handleReorder(order.items)}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors"
                      >
                        <RefreshCw className="h-4 w-4" />
                        Reorder
                      </button>
                    </div>
                  </div>
                  
                  {/* Order Items Preview */}
                  <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                    {order.items.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg border border-gray-200" />
                      </div>
                    ))}
                    {order.items.length > 3 && (
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                        <span className="text-sm text-gray-600">+{order.items.length - 3}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Status Progress */}
                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      {getStatusIcon(order.status)}
                      <span>
                        {order.status === 'delivered' && 'Delivered on ' + new Date(order.estimatedDelivery).toLocaleDateString()}
                        {order.status === 'shipped' && 'Shipped • Tracking: ' + order.trackingNumber}
                        {order.status === 'processing' && 'Processing • Estimated delivery: ' + new Date(order.estimatedDelivery).toLocaleDateString()}
                        {order.status === 'cancelled' && 'Order cancelled'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Details Modal */}
        <OrderDetailsModal 
          order={selectedOrder} 
          onClose={() => setSelectedOrder(null)} 
        />
      </div>
    </div>
  );
};

export default Orders;