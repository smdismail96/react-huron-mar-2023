import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import AppMenu from "./AppMenu/AppMenu";

import Home from './pages/Home/Home';
import WorkshopsList from "./pages/WorkshopsList/WorkshopsList";
import WorkshopDetails from "./pages/WorkshopDetails/WorkshopDetails";
import Feedback from "./pages/Feedback/Feedback";

// sfc
const App = () => {
  return (
    <>
      <AppMenu />

      {/* <div className="container"> */}
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshops" element={<WorkshopsList />} />
          <Route path="/workshops/:id" element={<WorkshopDetails />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Container>
    </>
  );
}

const x = 100, y = 200;

// named exports
export {
  x,
  y
};

// a file can have only 1 default export
export default App;