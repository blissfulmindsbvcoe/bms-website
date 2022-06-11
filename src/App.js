import { lazy, Suspense } from 'react';
import Spinner from './components/Spinner/Spinner.component';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home.page'))

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        {/* <Header /> */}
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
        {/* <Footer /> */}
      </Suspense>
    </Router>
  );
}

export default App;
