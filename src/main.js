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
    const userSymptom = $('#symptom').val();
    const docName = $('#name').val();
    const range = $('#range').val();
    $('#name').val('');
    $('#symptom').val('');
    $('#range').val('');
    // make button only clickable when something is enetered

    (async () => {
      const doctor = new DoctorName();
      const nameResponse = await doctor.getName(docName, userSymptom);
      getPath(nameResponse);
    })();



    function getPath(nameResponse) {

      let displayIt = [];
      let profile = nameResponse.data;


//searches data object for "profile"

      for (var i = 0; i < profile.length; i++) {
        let practices = profile[i].practices;

//searches data object for "practices"

        for (var j = 0; j < practices.length; j++) {
          displayIt+= `<li>${profile[i].profile.first_name}  ${profile[i].profile.last_name}</li>`
          displayIt+= `<li>${practices[j].phones[0].number}<li>`

//searches for value of patient acceptance
          if ((`${practices[j].accepts_new_patients}`) === true){
            displayIt += '<li>This doctor is currently accepting new patients.</li>'
          }else{
            displayIt +='<li>This doctor is NOT accepting new patients.</li>'
          }

//displays address while avoiding undefined "street2"
          displayIt+= `<li>${practices[j].visit_address.street}</li>`

          if ((practices[j].visit_address.street2)!=undefined){
            displayIt += `<li>${practices[j].visit_address.street2}</li>`
          }

          displayIt += `<li>${practices[j].visit_address.city},${practices[j].visit_address.state}</li>`
          displayIt += `<li>${practices[j].visit_address.zip}</li>`
          displayIt += '<br>'
        }
      }
//appends list to the DOM
      $('#list').append(displayIt);
    }






  });
});
// If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
