const youtubeUrl = "https://www.youtube.com/";

chrome.runtime.onInstalled.addListener(() => {
  chrome.commands.onCommand.addListener((command) => {
    if (command === "redirect-to-url") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0].url.startsWith(youtubeUrl)) {
          chrome.tabs.update(tabs[0].id, {
            url: "https://www.youtube.com/playlist?list=WL",
          });
        } else {
          console.log("Shortcut is only active on YouTube pages.");
        }
      });
    }
  });
});
