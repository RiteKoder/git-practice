let text = document.getElementById("ti");

let btn = document.getElementById("btn");
val = text.value;
btn.addEventListener("click", () => {
  val = text.value;
  console.log(val);
  chrome.runtime.sendMessage(
    { action: "sendValue", value: val },
    (response) => {
      if (response.success) {
        console.log("Value sent successfully!");
      }
    }
  );
});
