export class DoctorName{
  async getName(docName, userSymptom, range) {
    try {
      let nameResponse = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&query=${userSymptom}&user_location=45.5051%2C122.6750&skip=0&limit=10&range=(${range})&user_key=${process.env.API_KEY}`);
        let jsonifiedResponse = await nameResponse.json();
        return jsonifiedResponse;
      } catch(error) {

        if (error !=200){
          console.error("There was an error handling your request: " + error.message);

        }
      }
    }

  }
