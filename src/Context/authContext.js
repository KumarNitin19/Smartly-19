import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () =>{
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signUp(email,userName,password){
        return  auth.createUserWithEmailAndPassword(email,password).then(registeredUser => {
            this.firestore.collection("usersCollection")
            .add({
              uid: registeredUser.user.uid,
              username: userName
            })
          })
    }

    function login(email,password){
        return  auth.signInWithEmailAndPassword(email,password)
    }

   useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(user =>{
        console.log(user);
        setCurrentUser(user)
        setLoading(false);
    })
    return unSubscribe
   }, [])

    const value = {
        currentUser,
        signUp,
        login
    }

    return (
        <AuthContext.Provider value={value}>
             {!loading && children}
        </AuthContext.Provider>
    )
}


