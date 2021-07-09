import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast'

const App = () => {
    return (
        <>
            <Toaster position='top-left' />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Register} />
            </Switch>
        </>
    )
}

export default App