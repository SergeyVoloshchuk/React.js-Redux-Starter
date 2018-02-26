import {Link} from 'react-router-dom';
import React, {Component} from 'react'
export default class Navigation extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/other">Other</Link>
                </li>
            </ul>
        )
    }
}
