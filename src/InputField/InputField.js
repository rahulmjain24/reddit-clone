import React from 'react'
import "./InputField.css"

class InputField extends React.Component {
    render() { 
        return (
            <div className={`input-container d-flex flex-column overflow-hidden ${this.props.className}`}>
                <label htmlFor={this.props.label} className={`input-label ${this.props.labelClass}`}>{this.props.label}</label>
                <input 
                    placeholder=' ' 
                    onChange={(e) => {
                        this.props.value(e.target.value)
                    }} 
                    type={this.props.type} 
                    id={this.props.label}
                    name={this.props.label}
                    className="input-field border border-0" 
                    defaultValue={this.props.defaultValue}
                />
            </div>
        )
    }
}
 
export default InputField