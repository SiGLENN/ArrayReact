function People(props) {
    return (
      <div className="card-body">
        <img
          className="photo"
          src={props.img} 
          alt={`${props.name}'s profile`}
        />
        <div className="textbox">
          <div className="space">
            <p className="name">{props.name}</p>
            <p className="role">{props.role}</p>
            <a 
              className="btn" 
              href={`https://${props.link}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Play Game
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default People;
  