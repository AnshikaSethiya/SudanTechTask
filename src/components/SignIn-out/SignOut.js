import Button from '@restart/ui/esm/Button'
import React from 'react'
import {firebase} from '../../firebase/firebase'

const SignOut = () => {
    const LogOut = () => {
        firebase.auth().signOut();
    }
    return (
        <div>
            <Button onClick={LogOut}>SignOut</Button>
        </div>
    )
}

export default SignOut
