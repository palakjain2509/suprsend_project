// Assuming you are using Node.js and have installed the SuprSend SDK

const suprsend = require("suprsend-node");

// Initialize SuprSend with your environment variables
const suprsendClient = new suprsend.Client(
  process.env.SUPRSEND_API_KEY,
  process.env.SUPRSEND_API_SECRET
);

// Function to send notification
async function sendNotification(userId, event) {
  try {
    const response = await suprsendClient.send({
      user_id: userId,
      event: event,
    });
    console.log("Notification sent successfully:", response);
  } catch (error) {
    console.error("Error sending notification:", error);
  }
}

// Example usage
sendNotification("user123", {
  title: "New Notification",
  message: "This is a test notification.",
});
