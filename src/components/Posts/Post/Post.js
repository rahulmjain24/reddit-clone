import "./Post.css"
import moment from "moment"

export default function Post(props) {
    const time = moment.duration(moment().diff(props.time))
    return (
        <div className="post d-flex flex-start">
            <div className="vote d-flex flex-column align-items-center">
                <div 
                    onClick={() => {
                        props.upVote(props.id)
                    }}
                    className="arrow"
                >
                <i className="fa-solid fa-chevron-up fa-xl"></i>
                </div>
                <span className="vote-count">{props.votes}</span>
                <div 
                    onClick={() => {
                        props.downVote(props.id)
                    }} 
                    className="arrow"
                >
                <i className="fa-solid fa-chevron-down fa-xl"></i>
                </div>
            </div>
            <div className="post-data flex-grow-1">
                <div className="meta-data d-flex">
                    <div className="r-image">
                        <img src={props.rImage} alt="" />
                    </div>
                    <div className="r-reddit"><b>r/{props.subReddit}</b></div>
                    <div className="r-user">Posted by u/{props.user}</div>
                    <div className="r-time">
                        {
                            Math.floor(time.asHours()) <= 24 ?
                            Math.floor(time.asHours()) + ' hours '
                            :
                            Math.floor(time.asDays()) <= 30 ?
                            Math.floor(time.asDays()) + ' days '
                            :
                            Math.floor(time.asMonths()) <= 12 ?
                            Math.floor(time.asMonths()) + ' months '
                            :
                            Math.floor(time.asYears()) + ' years '
                        }
                        ago
                    </div>
                </div>
                <h4 className="title">{props.title}</h4>
                {
                    props.image ? 
                    <img className="post-image" src={props.image} alt="Post"/>
                    :
                    <div className="extra-data">{props.post}</div>
                }
            <div className="post-footer d-flex align-items-center">
                <div className="comments arrow">
                <i className="fa-regular fa-message fa-xl footer-icon"></i>
                    {props.comments} Comments
                </div>
                <div className="share arrow">
                    <i className="fa-solid fa-share fa-xl footer-icon"></i>                    
                    Share
                </div>
                <div>
                    <i className="fa-solid fa-ellipsis fa-xl footer-icon"></i>
                </div>
            </div>
            </div>
        </div>
    )
}