import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const updateUserProfile = (name, photo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        });
    }
    const login = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data=>{
                    localStorage.setItem('access-token', data.data.token);
                    setLoading(false);
                })
            }else{
                localStorage.removeItem('access-token');
            }
        })
        return ()=> unsubscribe();
    },[])
    const authInfo = {
        user,
        createUser,
        googleSignIn,
        updateUserProfile,
        loading,
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