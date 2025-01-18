// Example of doctor registration
document.getElementById('doctor-registration-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let doctorName = document.getElementById('doctor-name').value;
  let doctorSpecialty = document.getElementById('doctor-specialty').value;
  let freeSession = document.getElementById('free-session').value;
  let doctorFee = document.getElementById('doctor-fee').value;
  
  console.log(`Doctor Registered: ${doctorName}, Specialty: ${doctorSpecialty}, Free Sessions: ${freeSession}, Fee: ${doctorFee}`);
  
  // In real-world scenario, this data would be sent to the server for processing.
  alert("Doctor Registered Successfully!");
});

// Example of patient registration
document.getElementById('patient-registration-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let patientUsername = document.getElementById('patient-username').value;
  let patientPassword = document.getElementById('patient-password').value;
  
  console.log(`Patient Registered: ${patientUsername}`);
  
  // In real-world scenario, this data would be sent to the server for processing.
  alert("Patient Registered Successfully!");
});

// Example login functionality
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let loginUsername = document.getElementById('login-username').value;
  let loginPassword = document.getElementById('login-password').value;
  
  console.log(`Login Attempt: ${loginUsername}`);
  
  // In real-world scenario, this data would be sent to the server to validate credentials.
  alert("Login Successful!");
});

// Simulated AI chatbot for disease suggestion based on symptoms
function suggestDisease() {
  let symptoms = document.getElementById('patient-symptoms').value.toLowerCase();
  let suggestion = '';

  if (symptoms.includes('fever') && symptoms.includes('cough')) {
    suggestion = 'You may have a respiratory infection, such as the flu or COVID-19.';
  } else if (symptoms.includes('headache') && symptoms.includes('nausea')) {
    suggestion = 'You might have a migraine or tension headache.';
  } else if (symptoms.includes('stomach pain') && symptoms.includes('vomiting')) {
    suggestion = 'You may have a digestive issue, such as food poisoning or gastritis.';
  } else {
    suggestion = 'Please consult a doctor for a proper diagnosis.';
  }

  document.getElementById('disease-suggestion').textContent = suggestion;
}
