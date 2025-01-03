let text = document.getElementById("ti");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const val = text.value; // Get the input value
  console.log("Value from popup:", val);

  // Get the active tab and send a message to its content script
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.id) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "sendValue", value: val },
        (response) => {
          if (response) {
            console.log("Response from content.js:", response);
          }
        }
      );
    }
  });
});
