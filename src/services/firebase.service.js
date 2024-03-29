export function InitFireBase() {
    // Initialize the Firebase SDK.
    firebase.initializeApp({
      apiKey: "AIzaSyBPZxBTSjk9oYqkdiyh29yv6d7QtkrInDU",
      databaseURL: "https://codetogether-ea068-default-rtdb.firebaseio.com/"
    });
  
    // Get Firebase Database reference.
    var firepadRef = firebase.database().ref();
  
    const urlparams = new URLSearchParams(window.location.search);
    const roomId = urlparams.get("id");
  
    if (roomId) {
      firepadRef = firepadRef.child(roomId);
    } else {
      firepadRef = firepadRef.push();
      window.history.replaceState(null, "Share Code", "?id=" + firepadRef.key);
    }
  
    return firepadRef;
  }
  