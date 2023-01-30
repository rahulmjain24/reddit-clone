import React from 'react'
import "./BackContainer.css"

class BackContainer extends React.Component {
    render() { 
        return (
            <div className="back-container position-fixed">
                {this.props.children}
            </div>
        )
    }
}
 
export default BackContainer