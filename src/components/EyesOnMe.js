// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
    isFocus = () => console.log('Good!')
    isBlur = () => console.log('Hey! Eyes on me!')
    render(){
        return (
            <button onFocus={this.isFocus} onBlur={this.isBlur}> Eyes on me, please!</button>
        )  
    }

}

export default EyesOnMe;
