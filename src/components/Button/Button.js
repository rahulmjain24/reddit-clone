import React from 'react'
import "./Button.css"

class Button extends React.Component {
    render() { 
        return (
            <button onClick={this.props.click} className={`button overflow-hidden ${this.props.className}`} disabled={this.props.disabled}>
                <div className={`button-container d-flex justify-content-center align-items-center `}>
                    {this.props.children}
                </div>
            </button>
        )
    }
}
 
export default Button