import './App.css'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Content from './Componet/Content/Content'; 
import SingleBooking from './Componet/SingleBooking/SingleBooking' 
import GooglePage from './Componet/GooglePage/GooglePage' 
import Login from './Admin/Login'
import Register from './Admin/Register';
import {AuthProvider} from './Componet/useContext/useContext'
import Header from './Componet/Header/Header';

function App() {  
    return (
        <div className = "App" >  
        
    <AuthProvider> 
        <Router> 
            <Switch> 
                <Route path="/single/:Category" >  
                  <SingleBooking></SingleBooking>
                </Route>
                 <Route path="/X/:Category">   
                     <Header></Header>
                    <GooglePage  ></GooglePage>
                </Route>
                <Route path="/register">  
                     <Register></Register>
                </Route>
                <Route path="/login">  
                <Header></Header>  
                     <Login></Login>
                </Route>
                <Route exact path="/"> 
                    <Content></Content>
                </Route>
            </Switch>
        </Router>   
        
    </AuthProvider>  
        </div>
    );
}

export default App;