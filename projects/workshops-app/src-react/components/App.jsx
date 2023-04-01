import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';

import AppMenu from "./AppMenu/AppMenu";

import Home from './pages/Home/Home';
import WorkshopsList from "./pages/WorkshopsList/WorkshopsList";
import WorkshopDetails from "./pages/WorkshopDetails/WorkshopDetails";
import Feedback from "./pages/Feedback/Feedback";
import PageNotFound from './pages/PageNotFound/PageNotFound';

// sfc
const App = () => {
  return (
    <>
      <AppMenu />

      {/* <div className="container"> */}
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshops" element={<WorkshopsList />} />
          <Route path="/workshops/:id/*" element={<WorkshopDetails />} />
          <Route path="/feedback" element={<Feedback />} />

          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          <Route path="*" element={<PageNotFound />} />
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