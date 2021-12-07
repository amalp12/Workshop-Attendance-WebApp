import SearchDatabase from './SearchDatabase.js'
import Link from 'next/link'


const HandleSubmit = async (email) => {

  let searchResult
  /*
  const form = document.getElementsByClassName('submit-form')[0]
  console.log(email)
  */ 
  searchResult = await SearchDatabase(email)
  //console.log(searchResult)
  // if email was not found in database
  if(searchResult ===  null){
    alert('This email was used to register for this workshop. Please enter the correct email.')
  }
  else // if email was found then redirect to the attendence page
  {
    //console.log(searchResult.data())
    //Router.push({ pathname: to, query: { user_id: this.props.data.member.user.id } }, as, options);
    console.log('Go to attendance page')
    //goToUser(searchResult)
    //router.push({ pathname: './user', query:{userData : doc}}, '/user')

  }
}

export default  HandleSubmit 