import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="map-container">
        <iframe
          title="Google Maps - The British Museum"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.5099405846745!2d-0.12953152251965988!3d51.51941660982435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b323093d307%3A0x2fb199016d5642a7!2sThe%20British%20Museum!5e1!3m2!1sen!2suk!4v1718640392469!5m2!1sen!2suk"
          width="502"
          height="302"
          zoom={20}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Maps showing the location of The British Museum"
        />
      </div>
    </div>
  );
}

export default App;
