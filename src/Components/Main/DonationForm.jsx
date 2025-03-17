import React, { useState } from "react";
import {
  formatAmount,
  currencyConfig,
  initiatePayment,
  validateAmount,
} from "@/services/stripeService";
import { CreditCard, LockIcon } from "lucide-react";
import { motion } from "framer-motion";
import CurrencySelector from "./CurrencySelector";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DonationForm = () => {
  const [amount, setAmount] = useState("100");
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currency, setCurrency] = useState("INR");
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const presetAmounts =
    currency === "INR"
      ? ["20", "50", "100", "500", "1000"]
      : ["5", "10", "25", "50", "100"];

  const handleAmountClick = (value) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
    setAmount(newCurrency === "INR" ? "100" : "10");
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setCustomAmount(value);
    setAmount("custom");
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setAmount(currency === "INR" ? "100" : "10");
    setCustomAmount("");
    setIsSuccess(false);
  };

  const handleRedirect = () => {
    resetForm();
    navigate("/home");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const donationAmount =
      amount === "custom" ? parseFloat(customAmount) : parseFloat(amount);
    const validation = validateAmount(donationAmount, currency);

    if (!validation.isValid) {
      toast.error(`Invalid Amount: ${validation.message}`);
      return;
    }

    if (!name.trim() || !email.trim()) {
      toast.error("Please provide your name and email address.");
      return;
    }

    toast.success(
      `Thank you, ${name}! You are sending ${formatAmount(
        donationAmount,
        currency
      )}.`
    );

    // Start loading
    setIsLoading(true);

    try {
      const paymentData = {
        amount: donationAmount,
        currency,
        name,
        email,
        description: `Donation to MeditateMe - ${name}`,
      };

      const response = await initiatePayment(paymentData);

      if (response.success) {
        setIsSuccess(true);
        toast.success(
          `Donation Successful: ${formatAmount(
            donationAmount,
            currency
          )} received.`
        );
      } else {
        throw new Error(response.message || "Payment failed.");
      }
    } catch (error) {
      toast.error(`Payment Error: ${error.message || "Please try again."}`);
    } finally {
      // Ensure loading stops
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-20 px-4 flex justify-center items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-8 md:p-10 text-center max-w-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Thank You for Your Contribution! 🎉
          </h2>
          <button
            onClick={handleRedirect}
            className="px-4 py-2 cursor-pointer rounded bg-white text-orange-900 hover:scale-102  transition-all hover:text-[#301C3B] hover:bg-[#F3F3B7]"
          >
            Go to home
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-r from-">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card max-w-4xl rounded-2xl p-8 md:p-10 shadow-xl"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white">Buy me a coffee</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-2">
            Your contribution helps us spread mindfulness and peace. Every
            contribution, no matter the size, makes a difference.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">
              Choose Currency
            </label>
            <CurrencySelector
              selectedCurrency={currency}
              onCurrencyChange={handleCurrencyChange}
            />

            <label className="block text-white font-medium mb-3 mt-6">
              Select Amount ({currencyConfig[currency].symbol})
            </label>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
              {presetAmounts.map((preset) => (
                <motion.button
                  key={preset}
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`py-3 cursor-pointer rounded-lg transition-all ${
                    amount === preset
                      ? "bg-white text-purple-600 shadow-md"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                  onClick={() => handleAmountClick(preset)}
                >
                  {currencyConfig[currency].symbol}
                  {preset}
                </motion.button>
              ))}
            </div>

            <label className="block text-white font-medium mb-2">
              Or Enter Custom Amount
            </label>
            <input
              type="text"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Enter amount"
              className="w-full py-3 px-4 rounded-lg bg-white text-purple-700 focus:outline-none"
              onClick={() => setAmount("custom")}
            />
          </div>

          <div className="space-y-4 mb-8">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full py-3 px-4 rounded-lg bg-white text-purple-700 focus:outline-none"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full py-3 px-4 rounded-lg bg-white text-purple-700 focus:outline-none"
              required
            />
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              size="lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg bg-purple-500 text-white cursor-pointer font-bold text-lg flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                "Processing..."
              ) : (
                <>
                  <CreditCard className="w-5 h-5" /> Contribute Now
                </>
              )}
            </motion.button>

            <p className="mt-4 text-sm text-gray-300 flex items-center justify-center gap-1">
              <LockIcon className="w-4 h-4" /> Secure payments powered by Stripe
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default DonationForm;
