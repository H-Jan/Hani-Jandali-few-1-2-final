import './App.css';

import Heading from './Heading/Heading.js';
import MetalMeta from './MetalMeta.js';
import BandsList from './BandsList/BandsList.js';

function App() {
  return (
    <div className="App">
      <Heading />
      <MetalMeta />
      <BandsList />
    </div>
  );
}

export default App;
