import { database,ref, gebi,child, get } from "../../main.js";
import { push ,update, remove} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
let frm = document.forms[0],idUpdt = '',aSn = {};
  
//https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js
let alcokis = document.cookie ,mailCoki , psCoki;
alcokis = alcokis.replaceAll(' ','');
alcokis = alcokis.split(';')
alcokis.forEach(e=>{
  if (e.indexOf('UsrEmail=')>-1) {
    mailCoki = e.substring('UsrEmail='.length, e.length)
    console.log(mailCoki);
  }
  if (e.indexOf('UsrPassword=')>-1) {
    psCoki = e.substring('UsrPassword='.length, e.length)
    console.log(psCoki);
  }
})


/* const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }); */
  
  /* const auth =getAuth(app);
  onAuthStateChanged(auth,user=>{
    if (user !== null) {
      console.log('log in');
    } else {
      console.log('no user');
    }
  }) */
  /* my function */
  /* set data */

 //writeUserData() ;
/*writeUserData(/* 'abdou2Id',/  'abdou2', 'abdou2@gmail.com', 'slimani abdelhadi zuin') 47
 */
 //writeUserData() ;
/* get data */
function writeNewPost(uid, username, picture, title, body) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'posts')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}
/*  const dbRef = ref(database);
get(child(dbRef, `valedat/`)).then((snp) => {
  if (snp.exists()) {
    let myarr = [];
    snp.forEach(e => {
      myarr.push(e.val());
      console.log(e.key);
    });
    console.log(myarr);
    console.log(myarr.indexOf('abdou@gmail.com',0));
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
}); 

 */

 

let datCoki= new Date();
 datCoki.setDate(-1);
gebi('logaut').onclick=()=>{
    document.cookie='UsrEmail=;expires='+datCoki+';path=/';
    document.cookie='UsrPassword=;expires='+datCoki+';path=/';
    window.open("../",'_self');
}




frm.onsubmit = (e)=>{
  e.preventDefault();
  let namePg = frm.namePg.value, lienPg = frm.lienPg.value, nmCcpbrPg = frm.nmbrCcpPg.value,
    emailPg = frm.emailPg.value, chPg = frm.chPg.value , rsltCcp = false;

  namePg =namePg.trim();lienPg=lienPg.trim();nmCcpbrPg=nmCcpbrPg.trim();
  emailPg=emailPg.trim();

   /* Start  facebook*/
   let inFcbk =lienPg.indexOf('facebook.com');
   if (inFcbk<0 ) {
     gebi('msageUrl').style.display = 'block';
     setTimeout(() => {
       gebi('msageUrl').style.display = 'none';
     }, 2000);
   }
    lienPg = lienPg.slice(inFcbk + 13,lienPg.length);
  
   /* End  facebook*/
  /* Start verefail CCP Compte */
  if(!isNaN(nmCcpbrPg) && nmCcpbrPg.indexOf(' ')< 0){

    if(nmCcpbrPg.length == 12){
      if(nmCcpbrPg.indexOf('00')== 0){rsltCcp = true;nmCcpbrPg=nmCcpbrPg.slice(2,nmCcpbrPg.length)}
    }else if(nmCcpbrPg.length == 20){
      if(nmCcpbrPg.includes('0079999900')){rsltCcp = true;nmCcpbrPg=nmCcpbrPg.slice(10,nmCcpbrPg.length)}
    }else if(nmCcpbrPg.length == 10){rsltCcp = true}

  }
  if (rsltCcp == false && nmCcpbrPg.length > 0) {
    gebi('msageCcp').style.display = 'block'; 
    setTimeout(() => {
      gebi('msageCcp').style.display = 'none';
    }, 2000);
    return 0
  }
 
  /* End verefail CCP Compte */
  if (inFcbk<0 ) {return 0}
  if(idUpdt==''){apdorSt(push)}else{apdorSt(update);}
  
  function apdorSt(uppSt) {
    uppSt(ref(database, chPg +'/'+idUpdt),{0:namePg,1:lienPg,2:nmCcpbrPg,3:emailPg})
      .then(()=>{
        
        gebi('vlpush').style.display = 'block';
        setTimeout(() => {
          gebi('vlpush').style.display = 'none';
        }, 2000);
        frm.reset();
        let childdv; 
        childdv = document.createElement('div') ;
        childdv.classNme = 'dvPlc';
        
        if(idUpdt.length >0){
          if (gebi(chPg +'/'+idUpdt)) {
            gebi(chPg+'/'+idUpdt).parentElement.parentElement.innerHTML = dvUpdt(idUpdt);
          } else {
            childdv.innerHTML = dvUpdt(idUpdt)
            gebi(`list${chPg}`).prepend(childdv);
          }
          gebi('supmt').innerText = 'الإضافة';idUpdt='';gebi('supmt').innerText = 'التعديل';
        }else{
          const newPostKey = push(child(ref(database), chPg+'/')).key;
          childdv.innerHTML = dvUpdt(newPostKey);
          gebi(`list${chPg}`).prepend(childdv);
        }
      })
      .catch((e)=>{
        gebi('errpush').style.display = 'block';
        console.log(e);
        setTimeout(() => {
          gebi('errpush').style.display = 'none';
        }, 2000);
      });
  }

      
  function dvUpdt(pr) {
    return`<span class="cntnr">
    <span id="${chPg}/${pr}" onclick="dltdiv(this)" class="clear" >×</span>
    <a href="#input-box" class="mdfSVG" onclick="upVlu('${chPg}','${pr}') ">${edtSVG}</a>
    </span>
    <div class="normal">
      <h2><a href="https://www.facebook.com/${frm.lienPg.value}" target="_blank"> ${frm.namePg.value}</a> </h2>
    <strong>:الايميل</strong> <br> ${frm.emailPg.value}<br><br>
    <strong> :رقم الحساب البريدي </strong><br> ${frm.nmbrCcpPg.value}
    </div>`
  }
}
/* ######################## result ##################################### */
/* let mydt = 'i'+new Date()*1;
console.log(mydt);
 */
const dbRef = ref(database);
const edtSVG= '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m19.3 8.925-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM17.85 10.4 7.25 21H3v-4.25l10.6-10.6Z"/></svg>'


rslt('valed' );
rslt('Fake' );

function rslt(name ) {
    get(child(dbRef, `${name}/`)).then((snp) => {
        /* snp =>  = snapshot */
        if (snp.exists()) {
          let lstPg = '';
          aSn[name] = snp.val();
          snp.forEach(e => {
            lstPg += `<div class="dvPlc">
            <span class="cntnr">
                <span id="${name}/${e.key}" onclick="dltdiv(this)" class="clear" >×</span>
                <a href="#input-box" class="mdfSVG" onclick="upVlu('${name}','${e.key}') ">${edtSVG}</a>
            </span>
            <div class="normal">
                <h2><a href="https://www.facebook.com/${e.val()[1]}" target="_blank"> ${e.val()[0]}</a> </h2>
            <strong>:الايميل</strong> <br> ${e.val()[3]}<br><br>
            <strong> :رقم الحساب البريدي </strong><br> ${e.val()[2]}
            </div> 
        </div>`;
            //console.log(e.key);
      
          });
          gebi(`list${name}`).innerHTML = lstPg; 
          
        } else {
            gebi(`list${name}`).innerText = "No data available";
        }
      })
}

function upVlu(prnt , chldid) {
  idUpdt = chldid;
  frm.namePg.value=aSn[prnt][chldid][0]; frm.lienPg.value = 'https://www.facebook.com/'+aSn[prnt][chldid][1];
  frm.nmbrCcpPg.value='0079999900'+aSn[prnt][chldid][2];frm.emailPg.value=aSn[prnt][chldid][3];
  frm.chPg.value =prnt;frm.sub.value= 'تعديل';
  gebi('supmt').innerText = 'التعديل';
}

function dltdiv(el) {
remove(child(dbRef, el.id));
el.parentElement.parentElement.remove();
}

window.upVlu = upVlu ;
window.dltdiv = dltdiv ;
document.querySelectorAll('.h2lst').forEach(el =>{
    el.onclick = ()=>{
        let nxtEl = el.nextElementSibling;
        if (nxtEl.style.display == "block") {
            nxtEl.style.display = "none";
            el.firstElementChild.innerHTML='▼'
        }else{
            nxtEl.style.display = "block";
            el.firstElementChild.innerHTML='▲'
        }
        
    }
})

