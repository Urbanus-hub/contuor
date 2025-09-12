import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactForm () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header with contact info */}
        <div className="bg-gray-50 px-6 sm:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#3B5D50] rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium">43 Raymouth Rd. Baltemoer,</div>
                <div>London 3910</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#3B5D50] rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="font-medium">info@yourdomain.com</div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#3B5D50] rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="font-medium">+1 294 3925 3939</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="px-6 sm:px-8 py-8">
          <div className="space-y-6">
            {/* Name fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3B5D50] focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Enter your first name"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3B5D50] focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3B5D50] focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3B5D50] focus:border-transparent transition-all duration-200 outline-none resize-vertical"
                placeholder="Enter your message here..."
                required
              />
            </div>

            {/* Submit button */}
            <div className="pt-4">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#3B5D50] hover:bg-[#294037] text-white font-medium py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 focus:ring-4 focus:ring-gray-300 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}