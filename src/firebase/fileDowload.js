import { storage } from "./config";
import { ref, getDownloadURL } from "firebase/storage";

export  function fileDownload(fileName) {
  const storageRef = ref(storage, fileName);
  const dataReturn =  new Promise((resolve, reject) => {
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
            err = err.message;
        }

        reject(err);
      });
  });
  return dataReturn;
}
