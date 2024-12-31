console.log("hello");

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Ensure the tab has finished loading and has a URL
    if (changeInfo.status === "complete" && tab.url) {
      // Check if the URL is a YouTube video
      if (tab.url.includes("youtube.com/watch")) {
        console.log(`Tab ${tabId} is on a YouTube video: ${tab.url}`);
          // Perform any additional functionality here
          document.querySelector("#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > like-button-view-model > toggle-button-view-model > button-view-model > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill").click()








      }
    }
  });
  