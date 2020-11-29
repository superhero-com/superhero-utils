import './superhero-utils/index.css';
import { Button as SuperheroButton } from './superhero-utils/react-without-styles.js';

function App() {
  return (
    <div>
      <h3>superhero-utils example using react, webpack</h3>
      <SuperheroButton size="medium" account="ak_... or .chain name" />
    </div>
  );
}

export default App;
