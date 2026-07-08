import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Browse from './pages/Browse';
import ListingDetail from './pages/ListingDetail';
import seedListings from './data/listings.json';

// Placeholder pages
function PostListing() {
  return (
    <main>
      <h1>Post a listing</h1>
    </main>
  );
}

function App() {
  const [listings, setListings] = useState(seedListings);

  function addListing(newListing) {
    setListings((prev) => [newListing, ...prev]);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Browse listings={listings} />} />
          <Route
            path="/listing/:id"
            element={<ListingDetail listings={listings} />}
          />
          <Route path="/post" element={<PostListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
