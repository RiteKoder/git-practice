// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "sendValue") {
    console.log("Value received in content.js:", message.value);

    const inputElement = document.querySelector("#input-1 > input");
    if (inputElement) {
      typeInInput(inputElement, message.value); // Use the value received in the message
      sendResponse({ success: true, message: "Typing simulation complete." });
    } else {
      sendResponse({ success: false, message: "Input element not found." });
    }
  }
});

// Function to simulate typing in the input field
function typeInInput(input, text) {
  for (let char of text) {
    // Create and dispatch a keydown event
    let keydownEvent = new KeyboardEvent("keydown", {
      key: char,
      code: `Key${char.toUpperCase()}`,
      bubbles: true,
      cancelable: true,
    });
    input.dispatchEvent(keydownEvent);

    // Update the value of the input field
    input.value += char;

    // Create and dispatch a keyup event
    let keyupEvent = new KeyboardEvent("keyup", {
      key: char,
      code: `Key${char.toUpperCase()}`,
      bubbles: true,
      cancelable: true,
    });
    input.dispatchEvent(keyupEvent);
  }

  // Trigger an input event to ensure the UI and associated scripts recognize the change
  let inputEvent = new Event("input", { bubbles: true });
  input.dispatchEvent(inputEvent);
  document
    .querySelector(
      "#search-button > ytd-button-renderer > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill"
    )
    .click();
}
