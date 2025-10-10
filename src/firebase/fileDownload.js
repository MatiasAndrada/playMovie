import { storage } from './config';
import { ref, getDownloadURL } from 'firebase/storage';

/**
 * Función para descargar archivos desde Firebase Storage
 * NOTA: Esta función ya no se usa para imágenes estáticas (iconos, bg).
 * Las imágenes ahora se cargan directamente desde /public/icons y /public/bg
 * Se mantiene esta función solo para futuros usos de Firebase Storage si es necesario
 * (por ejemplo, para archivos subidos por usuarios o contenido dinámico)
 */
export function fileDownload(fileName) {
  const storageRef = ref(storage, fileName);
  const dataReturn = new Promise((resolve, reject) => {
    getDownloadURL(storageRef)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        // List of error codes
        switch (err) {
          case 'storage/object-not-found':
            err = `El ${fileName} no fue encontrado`;
            break;
          case 'storage/unauthorized':
            err = "User doesn't have permission to access the object";
            break;
          case 'storage/canceled':
            err = 'User canceled the upload';
            break;
          case 'storage/unknown':
            err = 'Unknown error occurred, inspect the server response';
            break;
          default:
            err = err.message;
        }

        reject(err);
      });
  });
  return dataReturn;
}
