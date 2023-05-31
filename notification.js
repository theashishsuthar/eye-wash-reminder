// Function to handle the notification click event
function handleNotificationClick(notificationId) {
    if (notificationId) {
      chrome.notifications.clear(notificationId);
    }
  }
  
  // Add an event listener for notification click events
  chrome.notifications.onClicked.addListener(handleNotificationClick);
  