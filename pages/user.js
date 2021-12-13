import { useRouter } from "next/router"
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useState, useEffect } from 'react'
import NotFound404 from "./404";
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import styles from '../styles/user.module.css'

import ServerTime from "../components/ServerTime";
import InInterval from "../components/InInterval";
import initializeFirebase from "../components/firebase/initializeFirebase";












const isMarkedAttendance =  ( WorkshopNumber,currentUserData) => {

  
  if( currentUserData["Workshop"+WorkshopNumber] === 1){
    
    return true
  }
  else{
    return false
  }
  
}
const MarkAttendance = async (id,WorkshopNumber) => {
  const rightInterval = await InInterval(WorkshopNumber, timeNow) // will be 0 in the right interval
 
  if (rightInterval===0 ) 
  {
     
  
    let obj ={}
    obj["Workshop"+WorkshopNumber] = 1
    const db = initializeFirebase(true)
    db.collection('users').doc(id).update(
      obj
      )
    return true
  } 
  else{
    return false
  }
}
  
const showButtonText = async (id, WorkshopNumber, currentUserData, timeNow, mark) => {
    
    
    const marked = mark ? true : isMarkedAttendance( WorkshopNumber,currentUserData)
   
    const btn =  document.getElementById(`btn-${WorkshopNumber}`)
  
  const rightInterval = await InInterval(WorkshopNumber, timeNow) // will be 0 in the right interval
  //debugger

  if (btn===null)
  {
    return
  }
  if(rightInterval===-1 ) // too early
  {
    btn.disabled = true
    btn.innerHTML =''
    btn.insertAdjacentHTML('afterbegin',`<p>Workshop ${WorkshopNumber} has not started yet </p>`)
    //btn.innerHTML = `Workshop ${WorkshopNumber} has not started yet`
    return 
  }
  
  
  else if(marked){
    
    btn.disabled = true
    btn.innerHTML =''
    btn.insertAdjacentHTML('afterbegin', `<p>Sucessfully Marked Attendance for Workshop ${WorkshopNumber}</p>` )
    //btn.innerHTML = `Sucessfully Marked Attendance for Workshop ${WorkshopNumber}` 
  }
  else if ( rightInterval ==1) {// too late
    const marked = await MarkAttendance(id,WorkshopNumber)
    if(marked === true)
    {
      btn.disabled = true
      btn.innerHTML =''
      btn.insertAdjacentHTML('afterbegin',`<p>Workshop ${WorkshopNumber} has expired</p>`)
      //btn.innerHTML = `Workshop ${WorkshopNumber} has not started yet`
      return
    }
    else {return} 

  }
  else{
    btn.disabled = false
    btn.innerHTML =''
    btn.insertAdjacentHTML('afterbegin',`<p>Click Here to Mark Attendance for Workshop ${WorkshopNumber}</p>`)
    //btn.innerHTML =  `Click Here to Mark Attendance for Workshop ${WorkshopNumber}`
  }

}

const showAllButtonsText = async(id, currentUserData, timeNow) => {
  //const db = firebase.firestore()
  //const currentUserData = await db.collection('users').doc(id).get()
  //const timeNow = await ServerTime()
  
  for(let i =1 ; i<=8; i++)
  {
    showButtonText(id,i, currentUserData, timeNow)
  }
}

const getDataByID = async (id) => {
  
  if (id === undefined) {return null}
  const db = initializeFirebase(true)
  const userRef = await db.collection('users').doc(id).get()
  return userRef.data()
  
}




export default  function User(props){
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
      const title = document.getElementById('title-container')
      if(ref === null)
      {
        return
      }
      title.innerHTML = `Hello, ${ref.Name}`
      //console.log(ref)
      
    }
    getData()
    //setuserRef(ref)
    
  }, [router.isReady] )

  useEffect(() => {
    const buttons = document.getElementById('buttons')
    //const db = firebase.firestore()
    const currentUserData = props.currentUserData//await db.collection('users').doc(id).get()
    const timeNow =  props.timeNow// await ServerTime()
    //debugger
    if(buttons === null)
    {
      return
    }
    buttons.innerHTML=''
    for(let i =1 ; i<=8; i++)
    {
      
      let newBtn = document.createElement('button')
      newBtn.disabled = true
      newBtn.id = `btn-${i}`
      newBtn.className = "btn btn-primary"
      newBtn.addEventListener ('click', async function(e){
        
        e.currentTarget.disabled = true
        //showButtonText(router.query.id,i)
        showButtonText(ID,i, currentUserData, timeNow, true)
        
      })
      
      
      buttons.appendChild(newBtn)
      showButtonText(ID,i, currentUserData, timeNow, false)
    }
    
    //showAllButtonsText(router.query.id, currentUserData, timeNow)
    
  }, [router.isReady])
  const ID = props.id
  
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

          <h1 id = "title-container" className={styles['title-container']} >Hello {
          userRef?userRef.Name: userRef } </h1>
          <div id = 'buttons' className={styles["buttons"]}>
            
          </div>




          
        </div>

      )
  
  
  
  
}
  
User.getInitialProps =  async (ctx) => {
  //debugger
  const  id  = ctx.query.id
  
  const db = initializeFirebase(true)
  const UserData = await db.collection('users').doc(id).get()
  const timeNow = await ServerTime()
  const currentUserData =  UserData.data()
  
  return { 
     id : id,
    currentUserData : currentUserData,
    timeNow : timeNow
  } 
}