import './superhero-utils/index.css';
import { Button as SuperheroButton } from './superhero-utils/react-without-styles.js';

import './style.css';

function App() {
  return (
    <div className="Example-List">
      <h3>superhero-utils example using react, webpack</h3>
      medium:
      <SuperheroButton size="medium" account="ak_... or .chain name" />

      {['large', 'small', 'icon'].map(size =>
        <>
          {size}:
          <SuperheroButton size={size} account="ak_... or .chain name" />
        </>
      )}
    </div>
  );
}

export default App;
