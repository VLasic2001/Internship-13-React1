import React, { Component } from 'react';

class ColoredText extends Component{
    constructor(props){
        super(props);
        this.state = {label: this.props.label, color: this.props.color}
    }
    render() {
        return (
            <>
                <p className={this.state.color}>{this.state.label}</p>
            </>
        );
    }

    componentWillReceiveProps({color}) {
        this.setState({...this.state.color,color})
      }
}

export default ColoredText;