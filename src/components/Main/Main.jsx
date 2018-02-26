import React, {Component} from 'react';
import LeftMenu from './../LeftMenu/LeftMenu.jsx'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as helloActions from './../../actions/hello.action'

class Main extends Component {
    constructor(props) {
        super(props)
        this.setMessage = this
            .setMessage
            .bind(this)
    }
    setMessage(event) {
        this
            .props
            .helloActions
            .setHelloMessage(event.target.value);
    }
    render() {
        return (
            <span>
                <LeftMenu/>
                <div>
                    <h1>HOME</h1>
                    <br/> {this.props.hello.hello}
                    <br/>
                    <input onInput={this.setMessage} type="text"/>
                </div>
            </span>
        )
    }
}

function mapStateToProps(state) {
    return {hello: state.hello}
}
function mapDispatchToProps(dispatch) {
    return {
        helloActions: bindActionCreators(helloActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)