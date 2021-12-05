
import Head from 'next/head'

import styles from '../styles/Landing.module.css'

import HandleSubmit from '../components/HandleSubmit'

export default function Home(){


    return(
  
      <div className={styles['main-container']}>
        <Head>
          <title>Workshop Attendance</title>
        </Head>
  
        <instructions className={styles['instructions']}>Please Enter your Registered Mail ID </instructions>
        <form className='submit-form' onSubmit={HandleSubmit}>
           
          <label>
          Email:
          <input type="text" name="email" />  
          </label> 
        
        <button type = 'submit'> Submit </button>
  
        </form>
        
  
      </div>
    )
  
  
  }

