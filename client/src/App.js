import Home from './pages/home/Home';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Home />
      <Helmet>
        <title>Tobias Wild</title>
        <meta name="description" content="React Webseite von Tobias Wild" />
      </Helmet>
    </>
  );
}

export default App;
