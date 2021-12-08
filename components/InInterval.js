import firebase from 'firebase/app'
import 'firebase/firestore'


const InInterval = async (WorkshopNumber, currTime ) => {
    const db = firebase.firestore();
    const docRef = await db.collection('times').doc(`Workshop${WorkshopNumber}`).get();
    
    const startTime = new Date(docRef.data().Start);
    const endTime = new Date(docRef.data().End);
    const currentTime = new Date(currTime);
    //debugger
    if(currentTime.getTime() >= startTime.getTime() && currentTime.getTime() <= endTime.getTime()){
        return true;
    }
    else{ return false;}
    
    
    /*
    let condition

   for(var key in timeData){
       condition = await SearchDatabase(key)
       
       if( condition===null){
           docRef.doc(key).set({
               Start: timeData[key]['Start'],
               End: timeData[key]['End'],
              

           })
       }
       else{
           console.log("already exists");
       }

   }*/
}
export default InInterval;