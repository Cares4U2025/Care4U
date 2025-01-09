// // Ensure the DOM is fully loaded before executing the script
// document.addEventListener("DOMContentLoaded", function () {
//   // Retrieve the patient count and last updated month from sessionStorage, or use the initial values
//   let patientData = {
//     count: sessionStorage.getItem("patientCount") ? parseInt(sessionStorage.getItem("patientCount")) : 62521,
//     lastUpdatedMonth: sessionStorage.getItem("lastUpdatedMonth") || new Date().getMonth(),
//   };

//   // Function to update the patient count by adding 200 if the month has changed
//   function updatePatientCount() {
//     const currentDate = new Date();
//     const currentMonth = currentDate.getMonth();
//     const currentYear = currentDate.getFullYear();

//     // Check if the month or year has changed
//     const lastUpdatedMonth = parseInt(patientData.lastUpdatedMonth);
//     if (currentMonth !== lastUpdatedMonth || currentYear !== sessionStorage.getItem("lastUpdatedYear")) {
//       patientData.count += 200; // Add 200 to the patient count for the new month
//       patientData.lastUpdatedMonth = currentMonth;

//       // Save updated count and month to sessionStorage
//       sessionStorage.setItem("patientCount", patientData.count);
//       sessionStorage.setItem("lastUpdatedMonth", currentMonth);
//       sessionStorage.setItem("lastUpdatedYear", currentYear);

//       // Update the patient count on the page
//       document.getElementById("patientCount").textContent = patientData.count;
//     }
//   }

//   // Display the initial count on page load
//   document.getElementById("patientCount").textContent = patientData.count;

//   // Check and update the patient count once on page load
//   updatePatientCount();

//   // Optionally, you can set an interval to call this function periodically (e.g., every day)
//   // setInterval(updatePatientCount, 24 * 60 * 60 * 1000); // Check every 24 hours
// });


// Ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the patient count and last updated month from sessionStorage, or use the initial values
  let patientData = {
    count: sessionStorage.getItem("patientCount") ? parseInt(sessionStorage.getItem("patientCount")) : 62521,
    lastUpdatedMonth: sessionStorage.getItem("lastUpdatedMonth") || new Date().getMonth(),
  };

  // Function to update the patient count by adding 200 if the month has changed
  function updatePatientCount() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Check if the month or year has changed
    const lastUpdatedMonth = parseInt(patientData.lastUpdatedMonth);
    if (currentMonth !== lastUpdatedMonth || currentYear !== sessionStorage.getItem("lastUpdatedYear")) {
      patientData.count += 50; // Add 200 to the patient count for the new month
      patientData.lastUpdatedMonth = currentMonth;

      // Save updated count and month to sessionStorage
      sessionStorage.setItem("patientCount", patientData.count);
      sessionStorage.setItem("lastUpdatedMonth", currentMonth);
      sessionStorage.setItem("lastUpdatedYear", currentYear);

      localStorage.setItem("patientCount", patientData.count);
      localStorage.setItem("lastUpdatedMonth", currentMonth);
      localStorage.setItem("lastUpdatedYear", currentYear);

      // Update the patient count on the webpage
      const patientCountElement = document.getElementById("patientCount");
      if (patientCountElement) {
        patientCountElement.textContent = patientData.count;
        console.log("Patient count updated in DOM:", patientData.count);
      } else {
        console.error("Patient count element not found in DOM.");
      }
    }
  }

  // Display the initial count on page load
  const patientCountElement = document.getElementById("patientCount");
  if (patientCountElement) {
    patientCountElement.textContent = patientData.count;
    console.log("Initial patient count displayed:", patientData.count);
  } else {
    console.error("Patient count element not found in DOM.");
  }

  // Check and update the patient count once on page load
  updatePatientCount();
});
