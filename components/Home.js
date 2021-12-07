
import Head from 'next/head'

import styles from '../styles/Landing.module.css'

import HandleSubmit from '../components/HandleSubmit'
import SearchDatabase from './SearchDatabase'

import { useRouter } from 'next/router'


export default function Home(){
    const router = useRouter()

    return(
  
      <div className={styles['main-container']}>
        <Head>
          <title>Workshop Attendance</title>
        </Head>
  
        <div className={styles['instructions']}>Please Enter your Registered Mail ID </div>
        <form className='submit-form'  onSubmit={async (e) => {
          e.preventDefault()
          const form = document.getElementsByClassName('submit-form')[0]
          console.log(form.email.value) 
          if(form.email.value === ''){
            alert('Please enter your registered mail id')
            return
          }

          const searchResult = await SearchDatabase(form.email.value)
          if(searchResult ===  null){
            alert('This email was used to register for this workshop. Please enter the correct email.')
            return
          }
          router.push({ pathname: './user', query:{id : searchResult.id}}, '/user')

        }}>
           
          <label>
          Email:
          <input type="text" name="email" />  
          </label> 
        
        <button type = 'submit'> Submit </button>
  
        </form>
        
  
      </div>
    )
  
  
  }

