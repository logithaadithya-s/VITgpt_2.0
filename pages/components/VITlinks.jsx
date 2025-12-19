import "../styles/VITlinks.css";

const LINKS = {
  VTOP: "https://vtop.vit.ac.in/vtop/login",
  MOODLE: "https://moovit.vit.ac.in/",
  VTOL: "https://moovitol.vit.ac.in/",
  NEOCOLAB: "https://vitvellore312.examly.io/login"
};

function VITlinks() {
  return (
    <div className="vitlinks">
      <p className="vitportals">VIT PORTALS</p>
      <div className="linkbuttons">
        {Object.entries(LINKS).map(([name, url]) => (
          <a key={name} href={url}>
            <button className="quote-btn">{name}</button>
          </a>
        ))}
      </div>
    </div>
  );
}

export default VITlinks;