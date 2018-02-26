import React, {Component} from 'react';
import LeftMenu from './../LeftMenu/LeftMenu.jsx'

class Other extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <span>
                <LeftMenu/>
                <div>
                   <h1>OTHER</h1> 
                </div>
            </span>
        )
    }
}

export default Other