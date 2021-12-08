
import styles from '../styles/admin.module.css'
//import data from '../private/data.json'
import firebase from 'firebase/app';
import 'firebase/firestore';
import SearchDatabase from '../components/SearchDatabase';
import AddWorkshopTimes from '../components/AddWorkshopTimes';
import ServerTime from '../components/ServerTime';

const addAllIfDoesntExist = async (data) => {
    const db = firebase.firestore();
    const docRef =  db.collection('users');
    let condition
   for(var key in data){
       condition = await SearchDatabase(key)
       if( condition===null){
           docRef.add({
               Name: data[key]['Name'],
               Email: key,
               Workshop1 : 0,
               Workshop2 : 0,
               Workshop3 : 0,
               Workshop4 : 0,
               Workshop5 : 0,
               Workshop6 : 0,
               Workshop7 : 0,
               Workshop8 : 0,

           })
       }
       else{
           console.log("already exists");
       }
   }
}


export default function Admin(){
    //console.log(data)
    /*
    useEffect(async ()=>{
        await addAllIfDoesntExist(data);
    },[])
    */
   // enable disabled buttons to use

    return(
  
        <div className={styles['main-container']}>
          <h1 className={styles['title-container']} >Admin  </h1>
            <button disabled = "true" onClick={async()=>{await addAllIfDoesntExist(data)}}>Add all to Database</button>
            <button disabled = "true" onClick={()=>{
                const time = ServerTime()
                //console.log(time)
                }}>Get Server Time</button>
            <button disabled = "true" onClick={async ()=>{ await AddWorkshopTimes() }}>Add Workshop Times</button>
        
        </div>
      )
  
  
  }


  /*
  
1  Introduction to sequential
 modelling-RNNs and LSTMs
3 Transformers
BERT
Use case of Transformer
Hands on BERT with PyTorch
Autoregressive models
Transformers for vision and
speech
Simplified VQ-GAN hands-on
DAY 1 (0930-1600 HRS)
1.
  
  */