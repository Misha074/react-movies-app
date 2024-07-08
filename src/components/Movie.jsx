export function Movie (props) {
    return  <div className="card movie" id={props.id}>
                <div className="card-image">
                    {
                        props.poster === 'N/A' ? 
                        <img src={`https://placehold.co/300x450?text=${props.title}`} alt="#"/>
                        : 
                        <img src={props.poster} alt="#"/>
                    }
                    
                    <span className="card-title">{props.year}</span>
                </div>
                <div className="card-content">
                    <p>{props.title}</p>
                    <p>{props.type}</p>
                </div>
                <div className="card-action">
                    <a href="!#" alt="#">This is a link</a>
                </div>
            </div>
}