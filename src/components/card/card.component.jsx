import { Component } from "react";
import './card.styles.css';
class card extends Component {
render(){
    const {id,name,email}=this.props.monster;
    return(
        <div className="card-container" key={id}>
        <img alt={`monster ${name}`}
         src={`https://robohash.org/${id}1?set=set2`}/>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
    )
}
}
export default card;