// This is a simple mock of the Stripe service for frontend
// In a real application, you would call your backend API which would use Stripe Node.js SDK

export const currencyConfig = {
  INR: {
    symbol: '₹',
    minAmount: 20,
    name: 'Indian Rupee',
    rate: 1,
  },
  USD: {
    symbol: '$',
    minAmount: 0.5,
    name: 'US Dollar',
    rate: 0.012, // Approximate conversion rate from INR to USD
  }
};

export const formatAmount = (amount, currency) => {
  const config = currencyConfig[currency];
  return `${config.symbol}${parseFloat(amount).toFixed(2)}`;
};

export const convertAmount = (amount, fromCurrency, toCurrency) => {
  if (fromCurrency === toCurrency) return amount;
  
  const fromRate = currencyConfig[fromCurrency].rate;
  const toRate = currencyConfig[toCurrency].rate;
  
  // Convert to base currency (INR) and then to target currency
  return (amount / toRate) * fromRate;
};

export const validateAmount = (amount, currency) => {
  const parsedAmount = parseFloat(amount);
  const minAmount = currencyConfig[currency].minAmount;
  
  if (isNaN(parsedAmount) || parsedAmount < minAmount) {
    return {
      isValid: false,
      message: `The minimum donation amount is ${formatAmount(minAmount, currency)}.`
    };
  }
  
  return { isValid: true };
};

export const initiatePayment = async (paymentData) => {
  // This would typically call your backend, which would create a Stripe Checkout Session
  console.log('Initiating payment with Stripe', paymentData);
  
  // Validate the payment data before proceeding
  if (!paymentData.amount || !paymentData.currency || !paymentData.email) {
    return {
      success: false,
      message: 'Missing required payment information'
    };
  }
  
  const validation = validateAmount(paymentData.amount, paymentData.currency);
  if (!validation.isValid) {
    return {
      success: false,
      message: validation.message
    };
  }
  
  // In a real implementation, your backend would return a session ID or URL
  // This is a mock implementation for demo purposes
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate a successful payment 90% of the time
      const isSuccessful = Math.random() < 0.9;
      
      if (isSuccessful) {
        resolve({
          success: true,
          message: 'Payment processed successfully',
          // This would be a redirect URL to Stripe Checkout in a real implementation
          redirectUrl: '#payment-success',
          transactionId: 'tr_' + Math.random().toString(36).substr(2, 9),
          amount: paymentData.amount,
          currency: paymentData.currency
        });
      } else {
        resolve({
          success: false,
          message: 'Payment processing failed. Please try again.',
          errorCode: 'payment_failed'
        });
      }
    }, 1500);
  });
};