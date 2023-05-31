// Function to schedule the eye wash reminder
function startReminder() {
    const showNotification = () => {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Eye Wash Reminder',
        message: "It's time to take an eye break!"
      });
    };
  
    const intervalInMilliseconds = 3 * 60 * 60 * 1000; // Set the interval to 3 hours
  
    setInterval(() => {
      showNotification();
    }, intervalInMilliseconds);
  
    console.log("Eye wash reminder set for every 1 minute.");
  }
  
  // Start the eye wash reminder
  startReminder();
  