import React from "react"
import "./Loader.css"

class Loader extends React.Component {

    render() {
        return (
            <div className="load-con d-flex align-items-center justify-content-center">
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Loader
