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

      let displayIt = [];
      let nameData = nameResponse.data;
      console.log(nameResponse);

  //searches data object for "profile"
      for (var i = 0; i < nameData.length; i++) {
  //adds list item containing first and last name

        let deeperData = nameData[i].practices;
  //searches data object for "practices"
  displayIt+= `<li>${nameData[0].profile.first_name}  ${nameData[0].profile.last_name}</li>`
        for (var j = 0; j < deeperData.length; j++) {
          displayIt+= `<li>${deeperData[j].phones[0].number}<li>`

          if ((`${deeperData[0].accepts_new_patients}`) === true){
            displayIt += '<li>This doctor is currently accepting new patients.</li>'
          }else{
            displayIt +='<li>This doctor is NOT accepting new patients.</li>'
          }
          displayIt+= `<li>${deeperData[j].visit_address.street}</li>`

         if ((deeperData[j].visit_address.street2)!=undefined){
           displayIt += `<li>${deeperData[j].visit_address.street2}</li>`
         }
           displayIt += `<li>${deeperData[j].visit_address.city},${deeperData[j].visit_address.state}</li>`
           displayIt += `<li>${deeperData[j].visit_address.zip}</li>`

  //displays message depending on acceptance of new patients

      }
      }
      $('#list').append(displayIt);
    }



    });
  });
// If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
