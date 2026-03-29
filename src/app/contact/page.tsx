'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual backend integration
      console.log('Contact form submission:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Thank you for contacting AFADU! We will respond within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Message failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Office',
      details: [
        'AFADU Headquarters',
        'Nairobi, Kenya',
        'Monday - Friday: 8:00 AM - 5:00 PM'
      ]
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: [
        '+254 700 000 000',
        '+254 722 000 000 (Hotline)',
        'Available 24/7 for emergencies'
      ]
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: [
        'info@afadu.org',
        'partnerships@afadu.org',
        'support@afadu.org'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact AFADU
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to learn more about our programs, partnerships, or how you can support our mission
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inquiry Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="donation">Donation Question</option>
                  <option value="media">Media Request</option>
                  <option value="volunteer">Volunteer Information</option>
                </select>
              </div>

              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="254 XXX XXX XXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleTextAreaChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">{info.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-700">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Links */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                <a href="/donate" className="block text-blue-600 hover:text-blue-700 font-medium">
                  💝 Make a Donation
                </a>
                <a href="/programs" className="block text-blue-600 hover:text-blue-700 font-medium">
                  🎯 View Our Programs
                </a>
                <a href="/about" className="block text-blue-600 hover:text-blue-700 font-medium">
                  📖 Learn About AFADU
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-700 font-medium">
                  📊 Download Annual Report
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Find Us in Nairobi
          </h2>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📍</span>
              </div>
              <p className="text-gray-600">
                Interactive map coming soon<br />
                Located in Nairobi CBD, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
