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
    // make button only clickable when something is enetered

    (async () => {
      const doctor = new DoctorName();
      const nameResponse = await doctor.getName(docName, userSymptom);
      getPath(nameResponse);
    })();

    function getPath(nameResponse) {

      console.log(nameResponse.data[0].profile);
        let info =[];
const gatheredName = nameResponse.data.map(info => `${info.profile.first_name}${info.profile.last_name}`);
          $('#showDoctor').text(gatheredName);

      //console.log(element.profile))
      // if(result.match("name"){

      //   result.forEach(function(){
      //     console.log(result);
      //   });
      // }else{
      //   console.log("hi");
      // }
    }


    });
  });
// If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
