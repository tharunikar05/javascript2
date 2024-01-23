function fetchDataFromAPI(endpoint) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        const data = { message: "Data successfully fetched", result: [1, 2, 3, 4, 5] };
        resolve(data);
      }, 1000);
    });
  }
  
  function fetchData() {
    const apiEndpoint = "https://api.example.com/data";
  
    return fetchDataFromAPI(apiEndpoint);
  }
  
  // Example usage
  fetchData()
    .then(function (data) {
      console.log(data.message);
      console.log("Result:", data.result);
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
  