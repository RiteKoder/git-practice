window.onload = function () {
  setTimeout(() => {
    // Select the button element using its class name
    var button = document.querySelector("#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > like-button-view-model > toggle-button-view-model > button-view-model > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill");

    // Check if the button exists
    if (button) {
      // Retrieve the value of the 'title' attribute
      var title = button.getAttribute("");
      console.log(title); // Outputs: Unlike
    } else {
      console.log("Button not found.");
    }
  }, 3000); // Adjust delay as needed
};
