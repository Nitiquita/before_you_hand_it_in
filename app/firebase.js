import * as admin from "firebase-admin";
import * as firebase from "firebase";

import * as serviceAccount from "before-you-hand-it-in-firebase-adminsdk-o80i6-836259fc8c.json";


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://before-you-hand-it-in.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("users");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

// admin.initializeApp({
//   credential: admin.credential.cert({
//     projectId: "<PROJECT_ID>",
//     clientEmail: "foo@<PROJECT_ID>.iam.gserviceaccount.com",
//     privateKey: "-----BEGIN PRIVATE KEY-----\n<KEY>\n-----END PRIVATE KEY-----\n"
//   }),
//   databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
// });