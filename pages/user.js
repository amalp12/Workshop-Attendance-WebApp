import { useRouter } from "next/router"
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useState, useEffect } from 'react'
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import styles from '../styles/user.module.css'

import ServerTime from "../components/ServerTime";
import InInterval from "../components/InInterval";

const isMarkedAttendance = async (id, WorkshopNumber) => {

  const db = firebase.firestore()
  const got = await db.collection('users').doc(id).get()
  if( got.data()["Workshop"+WorkshopNumber] === 1){

    return true
  }
  else{
    return false
  }

}
const MarkAttendance =(id,WorkshopNumber) => {
  let obj ={}
  obj["Workshop"+WorkshopNumber] = 1
  const db = firebase.firestore()
  db.collection('users').doc(id).update(
    obj
  )


}

const showButtonText = async (id, WorkshopNumber) => {
  const marked = await isMarkedAttendance(id, WorkshopNumber)
  const btn =  document.getElementById(`btn-${WorkshopNumber}`)
  const timeNow = await ServerTime()
  const rightInterval = await InInterval(WorkshopNumber, timeNow)
  //debugger
  if(rightInterval===false)
  {
    btn.disabled = true
    btn.innerHTML = `Workshop ${WorkshopNumber} has not started yet`
    return 
  }
  if(marked){
    
    btn.disabled = true
    btn.innerHTML = `Sucessfully Marked Attendance for Workshop ${WorkshopNumber}` 
  }
  else{
    btn.innerHTML =  `Click Here to Mark Attendance for Workshop ${WorkshopNumber}`
  }

}

const showAllButtonsText = async(id) => {
  for(let i =1 ; i<=8; i++)
  {
    await showButtonText(id,i)
  }
}

const getDataByID = async (id) => {

  if (id === undefined) {return null}
  const db = firebase.firestore()
  const userRef = await db.collection('users').doc(id).get()
  return userRef.data()

}




export default  function User(){
  const router = useRouter()
  const ID = router.query.id
  if(ID === undefined){
    return ( 
    <div className={styles["conatiner-404"]}>
      <h1>404 NOT Found  Click <Link href="/"><a className={styles['here-link']}> here </a></Link> to go back to Home Page</h1>
    </div>)
  }
  
  useEffect(()=>{
    window.onbeforeunload = (event) => {
      const e = event || window.event;
      // Cancel the event
      e.preventDefault();
      
      if (e) {
        e.returnValue = ''; // Legacy method for cross browser support
      }
      return ''; // Legacy method for cross browser support
    };
  },[])
  
  
  console.log(ID)


    const [userRef, setuserRef] = useState(null)
    //const userRef =  async () => {return}
    //console.log(userRef)

    useEffect(async () => {
     
      const ref = await  getDataByID(ID)
      console.log(ref)

      setuserRef(ref)

    }, [] )



   
    useEffect(() => {
      const buttons = document.getElementById('buttons')
      buttons.innerHTML=''
      for(let i =1 ; i<=8; i++)
      {
   
        let newBtn = document.createElement('button')
        newBtn.id = `btn-${i}`
        newBtn.className = "btn btn-primary"
        newBtn.addEventListener ('click', async function(e){
          MarkAttendance(ID,i)
          e.currentTarget.disabled = true
          await showButtonText(ID,i)
        })
        
        buttons.appendChild(newBtn)
      }

      document.onload = showAllButtonsText(ID)
      
    }, [])

   
  
    return(

        <div className={styles['main-container']}>

          <h1 className={styles['title-container']} >Hello {
          userRef?userRef.Name: userRef } </h1>
          <div id = 'buttons' className={styles["buttons"]}>
            
          </div>
        </div>

      )
  
  
  
  
}
  