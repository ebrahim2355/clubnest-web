import React, { useContext } from 'react';
import { AuthContext } from './authProvider';
import useRole from '../hooks/useRole';
import Loading from '../components/animation/Loading';

const AdminOnlyRoute = ({children}) => {

    const {loading} = useContext(AuthContext)
    const {role,isLoading} = useRole()

    if(loading || isLoading){
        return <Loading />
    }

    if(role !== 'admin'){
        return  <div>hello</div>
    }


    return children
};

export default AdminOnlyRoute;