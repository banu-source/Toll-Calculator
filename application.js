function Header() {
    return <header id="tollCalculatorHeader">...</header>;
  }
  
  function CalculateTollButton() {
    return <button id="calculateToll">Calculate Toll</button>;
  }
  
  function renderPolylineFromOSRM() {
    return <div id="leafletMapContainer">...</div>;
  }
  module.exports.renderPolylineFromOSRM = renderPolylineFromOSRM;
  module.exports.CalculateTollButton = CalculateTollButton;
  module.exports.Header = Header;