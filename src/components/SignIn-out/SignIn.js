import React from 'react'
import './SignIn-css.css'
import {Col, Container, Grid, Panel, Row, Button } from 'rsuite'
import socialMediaAuth from '../../firebase/authentication'
import  {FacebookProvider, GoogleProvider} from '../../firebase/authMethod'


const SignIn = () => {

 //  const onFacebookSignIn =() => {
//        var facebook_provider = new firebase.auth.FacebookAuthProvider();
//        firebase.auth().signInWithPopup(facebook_provider)
//        .then((res)=> {
//            console.log(res)
//        } )
//        .catch((err) => {
//            console.log("Facebook sign in error: ",err);
//        })
//    }

//    const onGoogleSignIn =() => {
//        var google_provider = new firebase.auth.GoogleAuthProvider();
//        firebase.auth().signInWithPopup(google_provider)
//        .then((res)=> {
//         console.log(res)
//         } )
//         .catch((err) => {
//         console.log("Google sign in error: ",err);
//     })
//    }
    const handleOnClick = async(provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res); 
    }
    return (
        <Container>
            <Grid className="mt-page">
                <Row>
                    <Col xs={24} md={12} mdOffset={6}>
                        <Panel>
                            <div className="text-center">
                                <h2>Welcome</h2>
                                <p>Sudan Tech Internship task</p>
                            </div>

                            <div className="signin-btns">
                            <Button block className="F-btn btn_auth" onClick={() => handleOnClick(FacebookProvider)}>
                                {/* <i className="fab fa-facebook-f"></i> */}
                                Continue with Facebook
                            </Button>
                            <br />
                            <br />
                            <Button block className="G-btn btn_auth" onClick={() => handleOnClick(GoogleProvider)}>
                                {/* <Icon icon="google" /> */}
                                Continue with Google
                            </Button>
                            </div>

                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </Container>
    )
}

export default SignIn
