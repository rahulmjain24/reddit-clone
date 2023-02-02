import "./Post.css"

export default function Edit(props) {
    return (
        <div className="edit-con">
            <label htmlFor={props.htmlFor} className="edit-label">{props.label}</label>
            <textarea name={props.htmlFor} id={props.htmlFor} rows={props.rows} defaultValue={props.defaultValue} className="edit" onChange={props.change}></textarea>
        </div>
    )
}