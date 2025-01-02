chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "sendValue") {
    console.log("Received value:", message.value);
    // Perform any action with the value
    const searchVal = message.value;
    sendResponse({ success: true });
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.update(tabs[0].id, {
        url: `https://www.youtube.com/feed/history?query=${encodeURIComponent(
          message.value
        )}`,
      });
    });
  }
});
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.commands.onCommand.addListener((command) => {
//     if (command === "redirect-to-search") {

//     }
//   });
// });
