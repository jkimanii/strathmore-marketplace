import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListingCard from '../components/ListingCard';
import categories from '../data/categories.json';
import './Browse.css';

function Browse({ listings = [], searchQuery = '' }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredListings = listings.filter((listing) => {
    const matchesCategory =
      activeCategory === 'all' ||
      listing.category.toLowerCase() === activeCategory.toLowerCase();

    const matchesQuery =
      !normalizedQuery ||
      listing.title.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });

  return (
    <section>
      <div className="browse-header">
        <h1>Browse Listings</h1>
        <p>
          {filteredListings.length} item
          {filteredListings.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Category filter bar */}
      <div
        className="category-filters"
        role="group"
        aria-label="Filter by category"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Listings grid or empty state */}
      {filteredListings.length > 0 ? (
        <div className="listings-grid">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No listings in this category yet.</p>
          <Link to="/post">Be the first to post one →</Link>
        </div>
      )}
    </section>
  );
}

export default Browse;
