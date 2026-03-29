'use client';

import { useState } from 'react';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // STK Push implementation - placeholder for actual integration
    const stkData = {
      businessShortCode: '174379',
      accountReference: 'AFADU',
      phoneNumber: phoneNumber,
      amount: amount,
      transactionDesc: 'Donation to AFADU',
      callbackURL: 'https://afadu.org/thank-you'
    };

    try {
      // Simulate STK Push - replace with actual M-Pesa integration
      console.log('Processing STK Push:', stkData);
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Thank you for your donation! This is a demo - actual STK Push integration needed.');
      setAmount('');
      setPhoneNumber('');
    } catch (error) {
      console.error('Donation error:', error);
      alert('Donation failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const quickAmounts = [500, 1000, 2000, 5000, 10000];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support AFADU's Mission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous donation helps us promote rational use of medicines and improve healthcare across Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donation Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Make a Donation
            </h2>
            
            <form onSubmit={handleDonate} className="space-y-6">
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Donation Amount (KES)
                </label>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {quickAmounts.map((quickAmount) => (
                    <button
                      key={quickAmount}
                      type="button"
                      onClick={() => setAmount(quickAmount.toString())}
                      className="py-2 px-4 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                    >
                      KES {quickAmount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter custom amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="1"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  M-Pesa Phone Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="254 XXX XXX XXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  pattern="254[0-9]{9}"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing || !amount || !phoneNumber}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isProcessing ? 'Processing...' : 'Donate Now with M-Pesa'}
              </button>
            </form>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">🔒 Secure Payment</h3>
              <p className="text-sm text-blue-700">
                Your donation is processed securely through M-Pesa STK Push. 
                AFADU does not store your payment information.
              </p>
            </div>
          </div>

          {/* Impact Information */}
          <div className="space-y-6">
            {/* Impact Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Your Impact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">💊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Medicines Access</h4>
                    <p className="text-gray-600">KES 1,000 provides essential medicines to 50 families</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">👥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Health Worker Training</h4>
                    <p className="text-gray-600">KES 2,000 trains 10 healthcare workers</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Outreach</h4>
                    <p className="text-gray-600">KES 5,000 reaches 5 communities with health education</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Ways to Give */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Other Ways to Support
              </h3>
              <div className="space-y-3">
                <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <h4 className="font-semibold text-gray-900 mb-1">Bank Transfer</h4>
                  <p className="text-gray-600">Direct bank deposits to AFADU account</p>
                </a>
                
                <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <h4 className="font-semibold text-gray-900 mb-1">Corporate Partnership</h4>
                  <p className="text-gray-600">Partner with us for corporate social responsibility</p>
                </a>
                
                <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <h4 className="font-semibold text-gray-900 mb-1">In-Kind Donations</h4>
                  <p className="text-gray-600">Donate medicines, equipment, or supplies</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
