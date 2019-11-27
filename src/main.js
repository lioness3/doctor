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

      console.log(nameResponse);
      //append
      let nameData = nameResponse.data;
      for (var i = 0; i < nameData.length; i++) {
        let deeperData = nameData[i].practices;
        for (var j = 0; j < deeperData.length; j++) {



              $('#list').append('');

              $('#list').append(`${nameData[i].profile.first_name} ${nameData[i].profile.last_name}`);
              $('#list').append(`${deeperData[j].phones[0].number}`);
              $('#list').append(`${deeperData[j].website}`);
              $('#list').append(`${deeperData[j].visit_address.street},${deeperData[j].visit_address.street2}<br>${deeperData[j].visit_address.city},
                ${deeperData[j].visit_address.state}
                ${deeperData[j].visit_address.zip}`);
              }
              if ((`${deeperData[j].accepts_new_patients}`) === true){
                $('#list').append('This doctor is currently accepting new patients.');
              }else{
                $('#list').append('This doctor is NOT accepting new patients.');
              }
          
          }
        }
      }




  });
});
// If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
