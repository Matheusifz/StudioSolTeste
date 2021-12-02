import axios from "axios";

export const fetchNumber = async () => {
  return axios
    .get("https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
     
      return error;
    });
};
