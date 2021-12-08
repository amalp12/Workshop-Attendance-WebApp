import { useRouter } from "next/router"
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useState, useEffect } from 'react'
import NotFound404 from "./404";
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

  if (btn===null)
  {
    return
  }
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
    btn.disabled = false
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
  const [userRef, setuserRef] = useState(null)
  
  useEffect(()=>{
    window.onbeforeunload = (event) => {
      const e = event || window.event;
      // Cancel the event
      e.preventDefault();
      
      if (e) {
        e.returnValue = ''; // Legacy method for cross browser support
      }
     //return 'Are you sure you want to leave?';
    };
  },[])

  useEffect( () => {
    if(!router.isReady) return;
    const getData = async () => {
      const ref = await  getDataByID(router.query.id)
      //console.log(ref)
      return ref
    }
    const ref = getData()
    setuserRef(ref)

  }, [router.isReady] )

  useEffect(() => {
    const buttons = document.getElementById('buttons')
    buttons.innerHTML=''
    for(let i =1 ; i<=8; i++)
    {
 
      let newBtn = document.createElement('button')
      newBtn.disabled = true
      newBtn.id = `btn-${i}`
      newBtn.className = "btn btn-primary"
      newBtn.addEventListener ('click', async function(e){
        MarkAttendance(router.query.id,i)
        e.currentTarget.disabled = true
        await showButtonText(router.query.id,i)
      })
      
      buttons.appendChild(newBtn)
    }

    document.onload = showAllButtonsText(router.query.id)
    
  }, [router.isReady])
  const ID = router.query.id
  if(ID === undefined){
    return ( 
    <NotFound404/>
    )
  }
  
  
  
  //console.log(ID)


    
    //const userRef =  async () => {return}
    //console.log(userRef)

    



   
    

   
  
    return(

        <div className={styles['main-container']}>

          <h1 className={styles['title-container']} >Hello {
          userRef?userRef.Name: userRef } </h1>
          <div id = 'buttons' className={styles["buttons"]}>
            
          </div>
        </div>

      )
  
  
  
  
}
  