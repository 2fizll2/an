// Пример загрузки в Firebase Storage
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();
const storageRef = ref(storage, 'videos/' + file.name);

uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Видео загружено!');
});