import React from 'react';
import './Tutorial2.css';

class Welcome extends React.Component{
    render(){
        return <h1>{this.props.message}</h1>
    }
}

export default Welcome;
