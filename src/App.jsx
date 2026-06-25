import { BrowserRouter, Routes, Route } from 'react-router-dom';
import listings from './data/listings.json';
import categories from './data/categories.json';
import Layout from './components/Layout';
import Browse from './pages/Browse';

// Placeholder pages
function ListingDetail() {
  return (
    <main>
      <h1>Listing Detail</h1>
    </main>
  );
}

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
