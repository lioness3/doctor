export class DoctorName{
  async getName(docName, userSymptom) {
      try {
      let nameResponse = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&query=${userSymptom}&user_location=45.5051%2C122.6750&skip=0&limit=10&user_key=${process.env.API_KEY}`);
            let jsonifiedResponse = await nameResponse.json();
            return jsonifiedResponse;
          } catch(error) {

              console.error("There was an error handling your request: " + error.message);

            }
            }
        
//
//           async getName(docName,userSymptom) {
//             try {
//               let nameResponse = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&query=${userSymptom}&user_location=45.5051%2C122.6750&skip=0&limit=10&user_key=${process.env.API_KEY}`);
//                 let jsonifiedResponse = await nameResponse.json();
//                 return jsonifiedResponse;
//               } catch(error) {
//                 if (this.status === 200) {
//                   resolve(nameResponse.response);
//                 } else {
//                   reject(Error(nameResponse.statusText));
//                 }
//
//
//               }
//             }
}
