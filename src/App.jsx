import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Browse from './pages/Browse';
import ListingDetail from './pages/ListingDetail';

// Placeholder pages
function PostListing() {
  return (
    <main>
      <h1>Post a listing</h1>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Browse />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/post" element={<PostListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
