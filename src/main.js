import { DoctorName } from './business.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// let API_KEY = []

$(document).ready(function(){
  $("#symptomButton").click(function(event){
    event.preventDefault;
    const userSymptom = $("#symptom").val();
    const docName = $("#name").val();
    $("#symptom").val('');
    $("#name").val('');
    (async () => {
              let doctor = new DoctorName();
              const nameResponse = await doctor.getName(userSymptom);
              getPath(nameResponse);
            })();
            function getPath(nameResponse) {
            $("#showDoctor").text(`Here is a list of doctors in the Portland area:
               ${nameResponse.data[0].practices[0].name}`);
               console.log(nameResponse);

          }
  });
});
