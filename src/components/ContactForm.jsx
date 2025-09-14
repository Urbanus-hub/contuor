import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
// import { createdummyAccount } from '../utils/appwrite';
import { saveContact } from '../utils/contactAction';

export default function ContactForm() {
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    
   const response=await saveContact(formData); 
   console.log(response); 
    
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-[#EFF2F1] flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-6xl">
        {/* Contact Info Header - Glass Effect */}
        <div className="bg-white/20 backdrop-blur-lg rounded-t-2xl lg:rounded-2xl lg:mb-6 border border-white/30 shadow-lg">
          <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-12 text-sm text-gray-700">
              <div className="flex items-center gap-3 lg:flex-1">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#3B5D50] rounded-lg flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium lg:font-semibold">43 Raymouth Rd. Baltemoer,</div>
                  <div className="text-gray-600">London 3910</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 lg:flex-1">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#3B5D50] rounded-lg flex items-center justify-center shadow-lg">
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="font-medium lg:font-semibold">info@yourdomain.com</div>
              </div>
              
              <div className="flex items-center gap-3 lg:flex-1">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#3B5D50] rounded-lg flex items-center justify-center shadow-lg">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="font-medium lg:font-semibold">+1 294 3925 3939</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section - Glass Effect */}
        <div className="bg-white/30 backdrop-blur-lg rounded-b-2xl lg:rounded-2xl border border-white/30 shadow-xl">
          <div className="px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 lg:space-y-8">
                {/* Name fields */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm lg:text-base font-medium text-gray-800 mb-2 lg:mb-3">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 lg:px-5 py-3 lg:py-4 bg-white/60 backdrop-blur-sm border border-white/50 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-[#3B5D50] focus:border-[#3B5D50] focus:bg-white/80 transition-all duration-300 outline-none placeholder-gray-500 text-gray-800 shadow-sm"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm lg:text-base font-medium text-gray-800 mb-2 lg:mb-3">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 lg:px-5 py-3 lg:py-4 bg-white/60 backdrop-blur-sm border border-white/50 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-[#3B5D50] focus:border-[#3B5D50] focus:bg-white/80 transition-all duration-300 outline-none placeholder-gray-500 text-gray-800 shadow-sm"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm lg:text-base font-medium text-gray-800 mb-2 lg:mb-3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 lg:px-5 py-3 lg:py-4 bg-white/60 backdrop-blur-sm border border-white/50 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-[#3B5D50] focus:border-[#3B5D50] focus:bg-white/80 transition-all duration-300 outline-none placeholder-gray-500 text-gray-800 shadow-sm"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm lg:text-base font-medium text-gray-800 mb-2 lg:mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 lg:px-5 py-3 lg:py-4 bg-white/60 backdrop-blur-sm border border-white/50 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-[#3B5D50] focus:border-[#3B5D50] focus:bg-white/80 transition-all duration-300 outline-none placeholder-gray-500 text-gray-800 shadow-sm resize-vertical min-h-[120px] lg:min-h-[150px]"
                    placeholder="Enter your message here..."
                    required
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4 lg:pt-6 flex justify-center lg:justify-start">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-[#3B5D50] hover:bg-[#294037] text-white font-medium lg:font-semibold py-3 lg:py-4 px-8 lg:px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-[#3B5D50]/30 focus:outline-none shadow-md active:scale-95"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}