import { app} from "../main.js"
import { getAuth, signInWithEmailAndPassword ,connectAuthEmulator} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";


/* createUserWithEmailAndPassword(auth, 'confirme@gmail.com', 'CnfrM48@.')
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    if (user != nul) {
        console.log('true');
    }
    console.log(user);
    // ...
  })
  .catch((error) => {
     console.log(error.code);
     console.log(error.message);
  }); */

let frm = document.forms[0],datCoki= new Date();
 datCoki.setDate(365);

frm.onsubmit = (e)=>{
    e.preventDefault();

    let email = frm.email.value,password= frm.password.value;
    const auth = getAuth(app);
   // connectAuthEmulator(auth , "https://calculesite.github.io");
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if (user != nul) {
        console.log('true');
        
        /*     document.cookie='UsrEmail='+emfr+';expires='+datCoki+';path=/';
            document.cookie='UsrPassword='+psfr+';expires='+datCoki+';path=/';
            window.open("add/index.html",'_self')
         */
    }
    console.log(user);
    // ...
    return 0
  })
  .catch((error) => {
     console.log(error.code);
     console.log(error.message);
     console.log(error);
  });
     
}
