import "./Button.css"

export default function AuthButton(props) {
    return (
        <div onClick={props.click} className={`auth-button flex-shrink-0 ${props.className}`}>
            {props.children}
        </div>
    )
}
