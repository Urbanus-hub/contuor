import React, { useState, useEffect } from 'react'
import { account } from '../utils/appwrite';
import {Link} from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await account.get();
        setUser(userData);
        setFormData({
          name: userData.name || '',
          email: userData.email || '',
          phone: userData.phone || ''
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await account.updateName(formData.name);
      setUser(prev => ({ ...prev, name: formData.name }));
      setEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || ''
    });
    setEditing(false);
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await account.deleteSession('current');
      // After successful logout
 window.dispatchEvent(new Event("appwrite-logout")); 
      window.location.href = '/login';
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center'>
        <div className='flex flex-col items-center gap-4'>
          <div className='w-12 h-12 border-4 border-[#3B5D50] border-t-transparent rounded-full animate-spin'></div>
          <p className='text-[#3B5D50] font-medium'>Loading your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-8'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-[#3B5D50] mb-4'>Profile Settings</h1>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Manage your personal information and account preferences with ease
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-[#3B5D50] to-[#4A6B5E] mx-auto mt-6 rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-4 gap-8'>
          {/* Profile Sidebar */}
          <div className='xl:col-span-1 space-y-6'>
            {/* Profile Card */}
            <div className='bg-white rounded-3xl p-8 border border-gray-100 relative overflow-hidden shadow-lg'>
              {/* Cover Image */}
              <div className='absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-[#3B5D50] to-[#4A6B5E] rounded-t-3xl'></div>
              
              <div className='text-center relative pt-12'>
                <div className='w-28 h-28 bg-gradient-to-br from-[#3B5D50] to-[#4A6B5E] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl ring-4 ring-white relative z-10'>
                  <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h2 className='text-2xl font-bold text-[#3B5D50] mb-2'>
                  {user?.name || 'Welcome User'}
                </h2>
                <p className='text-gray-500 mb-6'>
                  {user?.email || 'user@example.com'}
                </p>
                <div className='flex items-center justify-center gap-2 text-sm font-semibold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full'>
                  <div className='w-3 h-3 bg-emerald-500 rounded-full animate-pulse'></div>
                  Active Account
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className='bg-white rounded-3xl shadow-xl p-6 border border-gray-100'>
              <h3 className='text-lg font-bold text-[#3B5D50] mb-6'>Quick Actions</h3>
              <div className='space-y-3'>
                <button className='w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#3B5D50]/5 to-[#4A6B5E]/5 hover:from-[#3B5D50]/10 hover:to-[#4A6B5E]/10 transition-all duration-300 group'>
                  <div className='w-10 h-10 bg-[#3B5D50] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className='font-semibold text-[#3B5D50]'>Edit Profile</span>
                </button>
                
                <button className='w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#3B5D50]/5 to-[#4A6B5E]/5 hover:from-[#3B5D50]/10 hover:to-[#4A6B5E]/10 transition-all duration-300 group'>
                  <div className='w-10 h-10 bg-[#3B5D50] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className='font-semibold text-[#3B5D50]'>Security</span>
                </button>
                
                <button className='w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#3B5D50]/5 to-[#4A6B5E]/5 hover:from-[#3B5D50]/10 hover:to-[#4A6B5E]/10 transition-all duration-300 group'>
                  <div className='w-10 h-10 bg-[#3B5D50] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className='font-semibold text-[#3B5D50]'>Preferences</span>
                </button>
                
                {/* Logout Button */}
                <button 
                  onClick={handleLogout}
                  className='w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-red-500/5 to-red-600/5 hover:from-red-500/10 hover:to-red-600/10 transition-all duration-300 group'
                >
                  <div className='w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </div>
                  <span className='font-semibold text-red-500'>Logout</span>
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div className='bg-white rounded-3xl shadow-xl p-6 border border-gray-100'>
              <h3 className='text-lg font-bold text-[#3B5D50] mb-6'>Account Stats</h3>
              <div className='space-y-4'>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600 font-medium'>Member Since</span>
                  <span className='font-bold text-[#3B5D50] text-lg'>
                    {user?.$createdAt ? new Date(user.$createdAt).getFullYear() : '2024'}
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600 font-medium cursor-pointer' >
                    <Link to={"/orders"}>Orders</Link>
                    </span>
                  <span className='font-bold text-[#3B5D50] text-lg'>12</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600 font-medium'>Reviews</span>
                  <span className='font-bold text-[#3B5D50] text-lg'>8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className='xl:col-span-3 space-y-8'>
            {/* Personal Information */}
            <div className='bg-white rounded-3xl p-8 border border-gray-100 relative overflow-hidden shadow-lg'>
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#3B5D50]/5 to-[#4A6B5E]/5 rounded-full -mr-32 -mt-32"></div>
              
              <div className='relative z-10'>
                <div className='flex items-center justify-between mb-8'>
                  <div>
                    <h3 className='text-2xl font-bold text-[#3B5D50] mb-2'>Personal Information</h3>
                    <p className='text-gray-600'>Update your personal details and information</p>
                  </div>
                  {!editing ? (
                    <button 
                      onClick={() => setEditing(true)}
                      className='px-6 py-3 bg-gradient-to-r from-[#3B5D50] to-[#4A6B5E] text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2'
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit Profile
                    </button>
                  ) : (
                    <div className='flex gap-3'>
                      <button 
                        onClick={handleCancel}
                        className='px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300'
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={handleSave}
                        className='px-6 py-3 bg-gradient-to-r from-[#3B5D50] to-[#4A6B5E] text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300'
                      >
                        Save Changes
                      </button>
                    </div>
                  )}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div className='space-y-2'>
                    <label className='block text-sm font-bold text-[#3B5D50] mb-3'>
                      Full Name
                    </label>
                    {editing ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className='w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#3B5D50] focus:ring-4 focus:ring-[#3B5D50]/10 transition-all duration-300 text-[#3B5D50] font-medium'
                        placeholder="Enter your full name"
                      />
                    ) : (
                      <div className='w-full px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-100 rounded-xl text-[#3B5D50] font-semibold'>
                        {user?.name || 'Not provided'}
                      </div>
                    )}
                  </div>

                  <div className='space-y-2'>
                    <label className='block text-sm font-bold text-[#3B5D50] mb-3'>
                      Email Address
                    </label>
                    <div className='w-full px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-100 rounded-xl text-gray-600 font-medium'>
                      {user?.email || 'Not provided'}
                    </div>
                    <p className='text-xs text-gray-500 mt-2 italic'>Email cannot be changed for security reasons</p>
                  </div>

                  <div className='space-y-2'>
                    <label className='block text-sm font-bold text-[#3B5D50] mb-3'>
                      Phone Number
                    </label>
                    {editing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className='w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#3B5D50] focus:ring-4 focus:ring-[#3B5D50]/10 transition-all duration-300 text-[#3B5D50] font-medium'
                        placeholder="Enter your phone number"
                      />
                    ) : (
                      <div className='w-full px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-100 rounded-xl text-[#3B5D50] font-semibold'>
                        {formData.phone || 'Not provided'}
                      </div>
                    )}
                  </div>

                  <div className='space-y-2'>
                    <label className='block text-sm font-bold text-[#3B5D50] mb-3'>
                      Account ID
                    </label>
                    <div className='w-full px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-100 rounded-xl text-gray-600 font-mono text-sm'>
                      {user?.$id || 'Loading...'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className='bg-white rounded-3xl p-8 border border-gray-100 relative overflow-hidden shadow-lg'>
              {/* Decorative Background */}
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#3B5D50]/5 to-[#4A6B5E]/5 rounded-full -ml-32 -mb-32"></div>
              
              <div className='relative z-10'>
                <div className='mb-8'>
                  <h3 className='text-2xl font-bold text-[#3B5D50] mb-2'>Security & Privacy</h3>
                  <p className='text-gray-600'>Manage your account security settings</p>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='p-6 bg-gradient-to-br from-[#3B5D50]/5 to-[#4A6B5E]/5 rounded-2xl border border-[#3B5D50]/10 hover:shadow-lg transition-all duration-300'>
                    <div className='flex items-center gap-4 mb-4'>
                      <div className='w-12 h-12 bg-gradient-to-br from-[#3B5D50] to-[#4A6B5E] rounded-xl flex items-center justify-center'>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-bold text-[#3B5D50] text-lg'>Change Password</h4>
                        <p className='text-sm text-gray-600'>Update your account password</p>
                      </div>
                    </div>
                    <button className='w-full px-4 py-3 bg-[#3B5D50] text-white font-semibold rounded-xl hover:bg-[#2A4A3D] transition-all duration-300 transform hover:scale-105'>
                      Update Password
                    </button>
                  </div>
                  
                  <div className='p-6 bg-gradient-to-br from-[#3B5D50]/5 to-[#4A6B5E]/5 rounded-2xl border border-[#3B5D50]/10 hover:shadow-lg transition-all duration-300'>
                    <div className='flex items-center gap-4 mb-4'>
                      <div className='w-12 h-12 bg-gradient-to-br from-[#3B5D50] to-[#4A6B5E] rounded-xl flex items-center justify-center'>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-bold text-[#3B5D50] text-lg'>Two-Factor Auth</h4>
                        <p className='text-sm text-gray-600'>Add extra security layer</p>
                      </div>
                    </div>
                    <button className='w-full px-4 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105'>
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className='bg-white rounded-3xl p-8 border border-gray-100 relative overflow-hidden shadow-lg'>
              {/* Decorative Background */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#3B5D50]/5 to-[#4A6B5E]/5 rounded-full -ml-32 -mt-32"></div>
              
              <div className='relative z-10'>
                <div className='mb-8'>
                  <h3 className='text-2xl font-bold text-[#3B5D50] mb-2'>Notification Preferences</h3>
                  <p className='text-gray-600'>Choose how you want to receive updates</p>
                </div>
                
                <div className='space-y-6'>
                  <div className='flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 bg-gradient-to-br from-[#3B5D50] to-[#4A6B5E] rounded-xl flex items-center justify-center'>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-bold text-[#3B5D50] text-lg'>Email Notifications</h4>
                        <p className='text-sm text-gray-600'>Receive updates about your orders and account</p>
                      </div>
                    </div>
                    <label className='relative inline-flex items-center cursor-pointer'>
                      <input type="checkbox" className='sr-only peer' defaultChecked />
                      <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3B5D50]/20 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#3B5D50]"></div>
                    </label>
                  </div>
                  
                  <div className='flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 bg-gradient-to-br from-[#3B5D50] to-[#4A6B5E] rounded-xl flex items-center justify-center'>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                          <circle cx="4" cy="4" r="2" stroke="none" fill="currentColor"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-bold text-[#3B5D50] text-lg'>Marketing Communications</h4>
                        <p className='text-sm text-gray-600'>Get exclusive offers and product updates</p>
                      </div>
                    </div>
                    <label className='relative inline-flex items-center cursor-pointer'>
                      <input type="checkbox" className='sr-only peer' />
                      <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3B5D50]/20 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#3B5D50]"></div>
                    </label>
                  </div>

                  <div className='flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 bg-gradient-to-br from-[#3B5D50] to-[#4A6B5E] rounded-xl flex items-center justify-center'>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7H4l5-5 5 5H9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7v10M9 17V7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-bold text-[#3B5D50] text-lg'>Push Notifications</h4>
                        <p className='text-sm text-gray-600'>Receive real-time updates on your device</p>
                      </div>
                    </div>
                    <label className='relative inline-flex items-center cursor-pointer'>
                      <input type="checkbox" className='sr-only peer' defaultChecked />
                      <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3B5D50]/20 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#3B5D50]"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;