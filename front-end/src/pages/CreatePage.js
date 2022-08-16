import React,{Fragment} from 'react';
import Navigation from '../components/Navigation';
import CreateForm from '../components/CreateForm';
const CreatePage = () => {
    return (
        <Fragment>
            <Navigation/>
            <CreateForm/>
        </Fragment>
    );
};

export default CreatePage;