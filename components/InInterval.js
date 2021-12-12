import myfirebase from '../components/firebase/initializeFirebase'

const InInterval = async (WorkshopNumber, currTime ) => {
    const db = myfirebase(true);
    const docRef = await db.collection('times').doc(`Workshop${WorkshopNumber}`).get();
    
    const startTime = new Date(docRef.data().Start);
    const endTime = new Date(docRef.data().End);
    const currentTime = new Date(currTime);
    //debugger
    if(currentTime.getTime() >= startTime.getTime() && currentTime.getTime() <= endTime.getTime()){
        return 0; // correct interval
    }
    else if (currentTime.getTime() < startTime.getTime()){
        return -1; // too early
    }
    else if (currentTime.getTime() > endTime.getTime()){
        return 1; // too late

    }
    
    
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