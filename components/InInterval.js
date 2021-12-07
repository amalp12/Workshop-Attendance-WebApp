import firebase from 'firebase'
import timeData from '../private/timeData.json'
import SearchDatabase from './SearchDatabase'

const InInterval = async (WorkshopNumber, currentTime ) => {
    const db = firebase.firestore();
    const docRef =   (await db.collection('times').doc(`Workshop${WorkshopNumber}`).get().then()).data();
    
    const startTime = new Date(docRef.Start);
    const endTime = new Date(docRef.End);
    const currentTime = new Date(currentTime);
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