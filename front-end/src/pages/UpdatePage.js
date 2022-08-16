import React,{Fragment} from 'react';

import Navigation from '../components/Navigation';
import UpdateForm from '../components/UpdateForm';

const UpdatePage = () => {
    return (
        <Fragment>
            <Navigation/>
            <UpdateForm/>
        </Fragment>
    );
};

export default UpdatePage;