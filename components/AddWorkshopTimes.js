import firebase from 'firebase'
import timeData from '../private/timeData.json'
import SearchDatabase from './SearchDatabase'

const AddWorkshopTimes = async () => {
    const db = firebase.firestore();
    const docRef =  db.collection('times');
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

   }
}
export default AddWorkshopTimes;