import "./NavBar.css"

export default function SearcBar(props) {
    return (
        <div className="search d-flex align-items-center flex-grow-1">
            <label className="search-label" htmlFor="search"><img src="svg/search.svg" alt="" /></label>
            <input 
                placeholder="Search" 
                id='search' 
                onChange={(e) => {
                    props.change(e.target.value.trim())
                }} 
                type="text" 
                className="search-input" />
        </div>
    )
}