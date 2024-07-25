// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  const notificationList = document.getElementById("notification-list");

  function addNotification(message) {
    const listItem = document.createElement("li");
    listItem.className = "notification-item";
    listItem.textContent = message;
    notificationList.appendChild(listItem);
  }

  // Simulate receiving notifications
  setTimeout(() => addNotification("You have a new message!"), 1000);
  setTimeout(() => addNotification("Your order has been shipped."), 3000);
  setTimeout(() => addNotification("New comment on your post."), 5000);
});
