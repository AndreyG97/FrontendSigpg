import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {

    const { user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <div style={{display:"flex", alignItems:"center", paddingLeft:"75rem"}}>
            
            <p className="name"style={{color:"white", paddingRight:"20px"}}>{user.name}</p>
            <img  style={{width: '30px', height: '30px',borderRadius: '50%' }} src={user.picture} alt=""  />
            
          
            
        </div>
        )
    )
}

export default Profile