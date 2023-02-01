import "./Post.css"

export default function Post(props) {
    return (
        <div className="post d-flex flex-start">
            <div className="vote d-flex flex-column align-items-center">
                <img onClick={() => {
                    props.upVote(props.id)
                }} src="png/up-arrow.png" alt="" className="arrow" />
                <span className="vote-count">{props.votes}</span>
                <img onClick={() => {
                    props.downVote(props.id)
                }} src="png/down-arrow.png" alt="" className="arrow" />
            </div>
            <div className="post-data flex-grow-1">
                <div className="meta-data d-flex">
                    <div className="r-image">
                        <img src="https://styles.redditmedia.com/t5_2qh1q/styles/communityIcon_9ggb2zkszbf91.png?width=256&v=enabled&s=d19a33f79f962735225df7d9eea689c513ee3533" alt="" />
                    </div>
                    <div className="r-reddit"><b>r/{props.subReddit}</b></div>
                    <div className="r-user">Posted by u/{props.user}</div>
                    <div className="r-time">{props.time}</div>
                </div>
                <h4 className="title">{props.title}</h4>
                {
                    props.image ? 
                    <img className="post-image" src={props.image} alt="Post"/>
                    :
                    <div className="extra-data">{props.post}</div>
                }
            <div className="post-footer d-flex align-items-center">
                <div className="comments  footer-item">
                    <img src="png/comment.png" alt="" className="footer-icon" />
                    {props.comments} Comments
                </div>
                <div className="share footer-item">
                    <img src="png/share.png" alt="" className="footer-icon" />
                    Share
                </div>
                <img src="png/option.png" alt="" className="footer-icon footer-item" />
            </div>
            </div>
        </div>
    )
}