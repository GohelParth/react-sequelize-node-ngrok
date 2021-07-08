import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Register } from './Register';
import { Toaster } from 'react-hot-toast'

const App = () => {
    return (
        <>
            <Toaster position='top-left' />
            <Switch>
                <Route exact path="/signup" component={Register} />
            </Switch>
        </>
    )
}

export { App }