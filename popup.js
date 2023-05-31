document.addEventListener('DOMContentLoaded', function() {
    var eyeBreakButton = document.getElementById('eyeBreakButton');
    eyeBreakButton.addEventListener('click', function() {
      chrome.tabs.create({ url: 'https://www.example.com/eye-break-instructions' });
    });
  });
  