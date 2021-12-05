import SearchDatabase from './SearchDatabase.js'
import { useRouter } from 'next/router'


const HandleSubmit = async (e) => {

  e.preventDefault()
  const router = useRouter()
  let searchResult
  const form = document.getElementsByClassName('submit-form')[0]
  console.log(form.email.value) 
  if(form.email.value === '' ){
    alert('Please fill in all fields')
  }
  else{
    searchResult = await SearchDatabase(form.email.value)
    //console.log(searchResult)
    // if email was not found in database
    if(searchResult ===  null){
      alert('This email was used to register for this workshop. Please enter the correct email.')
    }
    else // if email was found then redirect to the attendence page
    {
      console.log(searchResult.data())
      //Router.push({ pathname: to, query: { user_id: this.props.data.member.user.id } }, as, options);
      console.log('Go to attendance page')
      //router.push({ pathname: './user', query:{userData : searchResult}}, '/user')
    }
  }
}

export default  HandleSubmit 