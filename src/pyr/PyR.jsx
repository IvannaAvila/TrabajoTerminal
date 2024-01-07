import Contenedorpyr from './Contenedorpyr';
import Redespyr from './Redespyr';
import './pyr.css';

function PyR() {
  return (
    <div className="App">
        <header className="App-header">
        <Contenedorpyr/>
        <Redespyr/>
        </header>
    </div>
  );
}

export default PyR