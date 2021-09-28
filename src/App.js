import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import NavigationBar from './components/NavBar/NavigationBar';
import SignIn from './components/SignIn-out/SignIn';
import SignOut from './components/SignIn-out/SignOut'
import {firebase} from './firebase/firebase';

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      return setIsUserSignedIn(true);
    }
    setIsUserSignedIn(false); 
  })

  if(isUserSignedIn === true){
  return (
     <Router>
       <Switch>
         <Route path='/' component={Home} exact="true" />
         <Route path='/ContactUs' component={ContactUs} exact/>
         <Route path='/SignOut' component={SignIn} exact />
       </Switch>
     </Router>
    );
  }else{
    return(
      <Router>
        <Switch>
          <Route path="/" component={SignIn} />
        </Switch>
      </Router>
    )
  }
}

export default App;
