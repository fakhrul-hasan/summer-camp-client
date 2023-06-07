import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn=()=>{
        return signInWithPopup(auth, provider);
    }
    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        });
    }
    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return ()=> unsubscribe();
    },[])
    const authInfo = {
        user,
        createUser,
        googleSignIn,
        updateUserProfile,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;