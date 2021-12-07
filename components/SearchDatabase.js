import myfirebase from '../components/firebase/initializeFirebase'

import firebase from 'firebase/app';
import 'firebase/firestore';

myfirebase()

const  SearchDatabase = async (email) =>{
    //let db = firebase(true)
    let db = firebase.firestore()
    //email should be a string
    //console.log(db) 
    // async function to search for user in database
    let searchResult = await db.collection('users').get().then(
        (snapshot) => {
        // the below searchResult is a different varialbe than the one above
        let searchResult = null
        let flag = false
        //console.log(snapshot.docs)
        snapshot.docs.every(
        doc => { 
            //console.log(doc.data().Email)
            // making sure that the email is not empty
            if(typeof doc.data().Email != "undefined"){
                // makeing sure it has no white space
                if(doc.data().Email.replace(/\s/g, '') === email.replace(/\s/g, '')){
                    console.log("found")
                    searchResult =  doc
                    return false
                }
            }
            return true


        }
        )
        return searchResult
    }
    
    )
    return searchResult

}

export default SearchDatabase