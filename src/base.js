import Rebase from "re-base";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAOTXsTehui5-E14iwChc7rRf4y3L6qECg",
  authDomain: "countertops-app.firebaseapp.com",
  databaseURL: "https://countertops-app.firebaseio.com"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;
