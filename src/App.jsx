import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Browse from './pages/Browse';
import ListingDetail from './pages/ListingDetail';
import PostListing from './pages/PostListing';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import seedListings from './data/listings.json';

function App() {
  const [listings, setListings] = useState(seedListings);
  const [searchQuery, setSearchQuery] = useState('');

  function addListing(newListing) {
    setListings((prev) => [newListing, ...prev]);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout onSearch={setSearchQuery} />}>
          <Route
            path="/"
            element={<Browse listings={listings} searchQuery={searchQuery} />}
          />
          <Route
            path="/listing/:id"
            element={<ListingDetail listings={listings} />}
          />
          <Route
            path="/post"
            element={<PostListing onAddListing={addListing} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
