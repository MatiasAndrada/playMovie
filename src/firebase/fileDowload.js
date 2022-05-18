import { storage } from "./config";
import { ref, getDownloadURL } from "firebase/storage";

export const fileDownload = async (fileName) => {
  //Download file
  const storageRef = ref(storage, fileName);

  function resPromise() {
    return new Promise((resolve, reject) => {
      getDownloadURL(storageRef)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          // List of error codes
          switch (err) {
            case "storage/object-not-found":
              err = `El ${fileName} no fue encontrado`;
              break;
            case "storage/unauthorized":
              err = "User doesn't have permission to access the object";
              break;
            case "storage/canceled":
              err = "User canceled the upload";
              break;
            case "storage/unknown":
              err = "Unknown error occurred, inspect the server response";
              break;
            default:
              err = "Error undefined" 
          }

        reject(err);
        });
    });
  }
  return resPromise();
};
