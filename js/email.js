// function emailSend(){

//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var subject = document.getElementById('subject').value;
//     var message = document.getElementById('message').value;

//     var messageBody = "Name : " + name +
//     "<br/> Email : " + email +
//     "<br/> Phone : " + subject +
//     "<br/> Message : " + message;

//     Email.send({
//         Host : "smtp.mailendo.com",
//         Username : "imadevilking786@gmail.com",
//         Password : "432B7861ECA6CABDE1280E9EB9DDCC74A40F",
//         port: 2525,
//         To : 'imadevilking786@gmail.com',
//         From : "imadevilking786@gmail.com",
//         Subject : "New Inquiry",
//         Body : messageBody
//     }).then(
//       message => alert(message)
//     );
// }

// <script>
// document.addEventListener('DOMContentLoaded', function () {
//   // Select the element with the patient count using its ID
//   const patientCountElement = document.getElementById('patientCount');

//   if (patientCountElement) {
//     console.log("Patient count element found");

//     // Parse the current number of patients from the text content
//     let currentPatientCount = parseInt(patientCountElement.innerText);
//     console.log("Current Patient Count:", currentPatientCount);

//     // Get the last updated time from localStorage
//     const lastUpdated = localStorage.getItem('lastPatientUpdate');
//     console.log("Last Updated:", lastUpdated);

//     // Get the current date
//     const currentDate = new Date();
//     console.log("Current Date:", currentDate);

//     // Check if it has been a month since the last update
//     if (!lastUpdated || new Date(lastUpdated).getMonth() !== currentDate.getMonth()) {
//       console.log("Month has changed or first-time update");

//       // Add 200 patients to the current count
//       currentPatientCount += 200;

//       // Update the display in the HTML
//       patientCountElement.innerText = currentPatientCount;
//       console.log("New Patient Count:", currentPatientCount);

//       // Store the new update time in localStorage
//       localStorage.setItem('lastPatientUpdate', currentDate);
//     } else {
//       console.log("No update needed, same month.");
//     }
//   } else {
//     console.error('Patient count element not found.');
//   }
// });
// </script>