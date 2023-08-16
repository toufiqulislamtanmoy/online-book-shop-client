import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    getAuth, 
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateEmail, 
    updateProfile } from "firebase/auth";
import axios from 'axios';
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);


    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photourl) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photourl
        });
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    
    const changedEmail = (email) =>{
        return updateEmail(auth.currentUser,email);
    }

    const logout = () => {
        setloading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Current User From Auth Provider", currentUser);
            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email:currentUser.email}).then(data => {
                    localStorage.setItem("access-token",data.data.token);
                    setloading(false)
                })
            }else{
                localStorage.removeItem("access-token")
            }
            
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        forgetPassword,
        createUser,
        loginUser,
        updateUserProfile,
        logout,
        user, 
        loading,
        googleLogin,
        changedEmail
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProviders;