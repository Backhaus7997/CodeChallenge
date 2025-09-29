(function uiTest() {
  console.log("Starting UI Test...");

  const nameInput = document.querySelector("#userName");
  const submitBtn = document.querySelector("#submit");

  if (!nameInput || !submitBtn) {
    console.error("UI element not found!");
    return;
  }

  nameInput.value = "Martin QA";
  submitBtn.click();

  const outputName = document.querySelector("#name");
  if (outputName && outputName.innerText.includes("Martin QA")) {
    console.log("UI Test passed: Name displayed correctly");
  } else {
    console.error(" UI Test failed: Name not found");
  }
})();
