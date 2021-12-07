
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import 'bootstrap/dist/css/bootstrap.css'; // Add this line


import SearchDatabase from './SearchDatabase'

import { useRouter } from 'next/router'


export default function Home(){
    const router = useRouter()

    return(
      
      <div className={styles["main-container"]}>
        <div>
          <Head>
            <title>Workshop Attendance</title>
          </Head>
        </div>
      
      
        <body className="text-center">
        <form className ="form-signin" id='submit-form'  onSubmit={async (e) => {
          e.preventDefault()
          const form = document.getElementById('submit-form')
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
           <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
           <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
           <label for="inputEmail" className="sr-only">Email address</label>
           <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="email" required autofocus  />
           <br/>
           
        
           <button className="btn btn-lg btn-primary btn-block" type="submit">Enter</button>
  
        </form>
        </body>
  
      </div>
    )
  
  
  }

