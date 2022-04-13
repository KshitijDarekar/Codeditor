export default function Language(props) {
  return (
    <div className="language-container" style={{margin: `${props.margin}`}}>
      <img src={props.image} alt={props.name} className="language-image" />
      <a href={props.link} className="language-name">{props.name}</a>
    </div>
  );
}
