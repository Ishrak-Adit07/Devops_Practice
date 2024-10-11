import { PaymentProfile } from "../models/paymentProfile.model.js"; // Import the PaymentProfile model

const createPaymentProfile = async (event) => {
  try {
    const { user_id, name } = event;

    // Check if the payment profile already exists (optional)
    const existingProfile = await PaymentProfile.findOne({ user_id });
    if (existingProfile) {
      console.log(`Payment profile for user ${name} already exists.`);
      return;
    }

    // Create a new payment profile for the user
    const paymentProfile = await PaymentProfile.create({
      user_id,
      name,
      subscription_status: "inactive", // Initially, they might not have an active subscription
    });

    console.log(`Payment profile created for user ${name}`);
  } catch (error) {
    console.error("Error creating payment profile:", error);
  }
};

export { createPaymentProfile };
