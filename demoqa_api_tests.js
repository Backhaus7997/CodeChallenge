(async function apiTest() {
  console.log("Starting API test...")
  
  try {
    const response = await fetch("link")
    if (!response.ok) throw new Error('HTTP error!! status: ${response.status}');
    
    const data = await response.json();
    if (data && data.id == 1) {
      console.log("API Test passed")
    } else {
      console.error("API Test failed", data);
    }
  } catch (err) {
    console.error("API Test failed:", err)
  }
})();
