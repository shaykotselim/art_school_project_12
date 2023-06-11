import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebaseConfig";
import { GoogleAuthProvider, createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);



const AuthProvider = ({children})=>{
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    } 
    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    const profileUpdate =(currentUser, displayName, photoUrl)=>{
        setLoading(true);
        return updateProfile(currentUser, {
            displayName: displayName, 
            photoURL: photoUrl,
        })
    }
    useEffect(()=>{
            const unsubscribe = onAuthStateChanged (auth, currentUser =>{
                setUser(currentUser);
                // console.log('current user:',currentUser);
                setLoading(false);
            });
            return () =>{
                return unsubscribe();
            }
    }, [])

   const authInfo ={
    user,
    loading, 
    createUser, 
    signIn,
    googleSignIn, 
    logOut, 
    profileUpdate,
   } 

   return (
    <AuthContext.Provider value ={authInfo}>
        {children}
    </AuthContext.Provider>
   )
}
export default AuthProvider;