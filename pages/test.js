
import 'bootstrap/dist/css/bootstrap.css'; // Add this line


export default function Test(){

  
    return(
  
        <div className="main-container">
   
            <body className="text-center">
            <form className="form-signin">
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                <br/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Enter</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </form>
            </body>
        </div>
          
      )
  
  
  }
  /*




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
        
  
      </div>*/