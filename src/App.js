import { lazy, Suspense } from 'react';
import Spinner from './components/Spinner/Spinner.component';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home.page'))
const About = lazy(() => import('./pages/About/About.page'))
const Event = lazy(() => import('./pages/Event/Event.page'))

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        {/* <Header /> */}
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/event/:id' element={<Event/>} />
        </Routes>
        {/* <Footer /> */}
      </Suspense>
    </Router>
  );
}

export default App;
