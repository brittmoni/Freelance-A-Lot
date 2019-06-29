import React, { Component } from 'react'
import "../App.css"
import * as firebase from 'firebase'
// import firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// import StyledFirebaseAuth from 'react-firebaseui'
import { BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./Home"
firebase.initializeApp({
    apiKey: "AIzaSyBvGIfOnVpnpqWsTh1GKZEj9lkUPdR9bMc",
    authDomain: "freelance-a-lot-978be.firebaseapp.com"
});

class Login extends Component {
    state = {
        isSignedin: false,
        userName: "",
        profilePic: "",
        freelancer: ""
    }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            
            console.log(user)
            console.log(user.providerData[0])

            console.log(user.displayName)
            this.setState({
                isSignedin: !!user,
                userName: firebase.auth().currentUser.displayName,
                profilePic: firebase.auth().currentUser.photoURL,
                freelancer: firebase.auth().currentUser.providerData[0]
            }
            )
            // set the state = to the user and then pass as an object into the profile component.
            sessionStorage.setItem("freelancerName", firebase.auth().currentUser.displayName)
            sessionStorage.setItem("freelancerPic", firebase.auth().currentUser.photoURL)
        })
        // function
    }
    render() {
        return (
          <Router>
            <div className="Login">
                {this.state.isSignedin ? (
                    <span>
                            <div>
                                
                                <Switch>
                                    <Route path='/' exact strict render ={()=>
                                    (this.state.isSignedin= <Redirect to="/home" />)}/>
                                    ReactDOM.render(
                                        <Home />
                                    )
                                </Switch>
                            </div>
                        {/* this.state.redirect && redirect push to({pathname: "/home" , data:this.state.redirect}) />*/}
// {/* 
//                             <h2>Signed In!</h2>
//                         <button onClick={() => firebase.auth().signOut()} type="button" class="btn btn-warning btn-lg btn-block"><h3>Sign Out Click Here!</h3></button>

//                         <br></br>
//                         <h1>Welcome {this.state.userName}</h1>
//                         <img alt="selfie" src={this.state.profilePic} /> */}

                    </span>
                ) : (
                    <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()} />
                    )}
            </div>
        </Router>
        )
    }
}
// console.log(Login)
export default Login;