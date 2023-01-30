import React from 'react'
import "./InputField.css"

class InputField extends React.Component {
    render() { 
        return (
            <div className={`input-container d-flex flex-column overflow-hidden ${this.props.className}`}>
                <label htmlFor="email" className={`input-label ${this.props.labelClass}`}>{this.props.label}</label>
                <input 
                    placeholder=' ' 
                    onChange={(e) => {
                        this.props.value(e.target.value)
                    }} type="email" id='email' name="email" className="input-field border border-0" />
            </div>
        )
    }
}
 
export default InputField