import { DoctorName } from './business.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
// If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

$(document).ready(function(){
  $("#symptomButton").click(function(event){
    event.preventDefault;
    const userSymptom = $("#symptom").val();
    const docName = $("#name").val();
    $("#name").val('');
    $("#symptom").val('');
    (async () => {
      let doctor = new DoctorName();
      // const nameResponse = await doctor.getName(userSymptom);
      const nameResponse = await doctor.getName(docName, userSymptom);
      getPath(nameResponse);
    })();
     function getPath(nameResponse) {
      if(this.value === true){
        let arr = [];
        for(var i = 0; i < nameResponse.length; i ++){
            arr.push(`${nameResponse.data[0].practices[i].name}`);
          }
          console.log(arr);
          $("#showDoctor").text(`Here is a list of doctors in the Portland area:
              ${nameResponse.data[0].profile} `);
           

          }else {
            $("#showDoctor").text('No doctors meet this criteria.')
          }
 console.log(nameResponse);
        }

    });
  });
// If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
