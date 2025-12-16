import React, { useContext } from 'react';
import { AuthContext } from './authProvider';
import useRole from '../hooks/useRole';
import Forbidden from '../components/Forbidden';


const ClubManagerOnlyRoute = ({children}) => {

    const {loading} = useContext(AuthContext)
    const {role,isLoading} = useRole()

    if(loading || isLoading){
        return <p>loading...</p>
    }

    if(role !== 'rider'){
        return <Forbidden /> 
    }


    return children
};

export default ClubManagerOnlyRoute;