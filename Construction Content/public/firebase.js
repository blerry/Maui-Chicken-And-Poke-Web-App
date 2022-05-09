import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyC095wM6mpg04Sm8I_whR8h-3QXSe22-b4",

    authDomain: "maui-chicken-and-poke.firebaseapp.com",
  
    projectId: "maui-chicken-and-poke",
  
    storageBucket: "maui-chicken-and-poke.appspot.com",
  
    messagingSenderId: "97093814083",
  
    appId: "1:97093814083:web:465d9be7fd04c4b7fed1f6",
  
    measurementId: "G-81FFTX4SBY"
  
};

//These are required instances when using database
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const checkDate=()=>{
    let locate = document.getElementById("locations").value;
    let orderNum = 0;
    let date1 = "";
    const getOrderNum = async() => {
        let docSnap = await getDoc(doc(db,locate,"orderCount"));
        orderNum = docSnap.data().count;
        date1 = docSnap.data().date;
        //console.log("The number" + orderNum);
        };
        getOrderNum();
        setTimeout(()=>{ 
        //console.log("Order # " + orderNum);//Rest of code goes here because of asyncy getOrderNum
        let date2 = new Date();
        let day1 = date1.split(" ");
        //date.setTime(date.getTime() + (30*24*60*60*1000));//30 days,24hours,60 minutes
        date2 = date2.toUTCString();
        let day2 = date2.split(" ");
        const updateOrderCount = async() => {await setDoc(doc(db,locate,"orderCount"),{
        count:0,
        date:date2  
        })};
        if (day1[1] < day2[1]){
            updateOrderCount(); //If its a new day. OrderCount = 0 
        } 
    });
}