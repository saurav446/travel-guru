import React, { createContext , useContext ,useState,useEffect} from 'react'  
 
import { useHistory } from "react-router-dom"; 
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config' 


 firebase.initializeApp(firebaseConfig);

 const Usecontexts = createContext() 

export const UseContext = () =>  useContext(Usecontexts);

 export const AuthProvider = (props) =>{  
      const auth = Auth(); 
     return   <Usecontexts.Provider value={auth}>
       {props.children} 
      </Usecontexts.Provider>
  } 

 
  
 
export const Auth = () =>{ 

        const history = useHistory()   
        const [namez,setnamez] = useState('')
        const [date,setDate] = useState('')
        const [dates,setDates] = useState('') 
         
          
             
            const [users,setUsers] = useState({})
            const [user,setUser] = useState({
                name:'',
                email:'',
                password:'',
                error:'', 
                success:'' 
            }) 
            
          let provider = new firebase.auth.GoogleAuthProvider();
          const logOut = () =>{
            firebase.auth().signOut().then((res) => {
              setUser(res)
              setUsers(res)   
            }) 
          }
            const hendleChange = (e) =>{ 
                  const ob = {
                    ...user,
                    [e.target.name]:e.target.value
                }
                setUser(ob)  
                  
            }
            const googleSingin = () => {
                firebase.auth()
                .signInWithPopup(provider)
                .then((res) => {
                  const {displayName,email,password} = res.user;  
                  const singINUser =  { 
                    isSignIn:true,
                    name:displayName,
                    email:email,
                    password:password 
                  }
                  setUser(singINUser)  
                  setUsers(singINUser)
                   history.push('/'); 
                }).catch((error) => {
                  console.log(error)
                });
              }
        
            const createAccount = (e) =>{
                if(user.email && user.password){
                    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then((res) => {  
                        const setUp = {...user};
                        setUp.error =  '';  
                        setUp.success = true;
                        setUser(setUp)
                        updataUserName(user.name) 
                         history.push('/');  
                    })
                    .catch((err) => {
                        const setUp = {...user}; 
                        setUp.error = err.message; 
                        setUp.success = false;
                        setUser(setUp)  
                    });
                }   
                e.preventDefault() 
            }

            const logIn = (e) =>{
                
                if(user.email && user.password){
              firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const setUp = {...user};
                    setUp.error =  ''; 
                    setUp.success = true;
                    setUser(setUp) 
                    setUsers(setUp) 
                    history.push('/');  
                })
                .catch((error) => {
                    const setUp = {...user};
                    setUp.error = error.message; 
                    setUp.success = false;
                    setUser(setUp) 
                    setUsers(setUp)  
                });
            } 
            e.preventDefault() 
            }
            const updataUserName = (name) =>{
              const user = firebase.auth().currentUser; 
                user.updateProfile({
                  displayName:  name
                }).then(() => {
                  setUsers(users.name)
                }).catch((error) => { 
                  console.log(error)
                });  
            } 
            useEffect(() => {
              firebase.auth().onAuthStateChanged(function(user) {
                  if (user) {
                    const currUser = user;
                    setUsers(currUser);
                    setUser(currUser)
                  }
                });
                
            },[])
        
            
 

      return{ 
        namez,setnamez,date,setDate,dates,setDates,

        // firebase code pass
        googleSingin,logOut,logIn,createAccount,hendleChange,users 
       }
  }
  
  
  
  
  