import '../../superhero-utils/index.css';
import { Button as SuperheroButton } from '../../superhero-utils/react-without-styles.js';

function App() {
  return (
    <div>
      <h3>superhero-utils example using react, vite</h3>
      <SuperheroButton
        size="medium"
        target="ak_gvxNbZf5CuxYVfcUFoKAP4geZatWaC2Yy4jpx5vZoCKank4Gc"
      />
    </div>
  );
}

export default App;
