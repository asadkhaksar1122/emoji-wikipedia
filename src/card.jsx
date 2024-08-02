import "./card.css"
function Emojiname(props) {
    return (
        <div className="name">
            <dt className="emoji">{ props.emoji}</dt>
            <dd className="name">{ props.name}</dd>
        </div>
    )
}
function Descrition(props) {
    return (
       
        <div className="description">{ props.description}</div>
    )
}
function Card(props) {
    return (
   
        <div className="card">
          <Emojiname emoji={props.emoji} name={props.name} />
          <hr />
          <Descrition description={props.description} />
        </div>
   
    );
}
export default Card