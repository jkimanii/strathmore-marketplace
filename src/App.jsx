import { BrowserRouter, Routes, Route } from 'react-router-dom';
import listings from './data/listings.json';
import categories from './data/categories.json';

// Placeholder pages
function Browse() {
  return (
    <main>
      <h1>Browse Listing</h1>
    </main>
  );
}

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
        <Route path="/" element={<Browse />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/post" element={<PostListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
