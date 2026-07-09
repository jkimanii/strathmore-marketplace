// src/pages/PostListing.jsx
import { useState } from 'react';
import categories from '../data/categories.json';
import './PostListing.css';

function PostListing({ }) {
  // One state object for all form fields
  const [form, setForm] = useState({
    title: '',
    price: '',
    category: '',
    condition: '',
    description: '',
    imageUrl: '',
  });

  
  const [errors, setErrors] = useState({});

  
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }


  function handleSubmit(e) {
    e.preventDefault(); // Prevent the browser from doing a full page reload
  }

  return (
    <div className="post-page">
      <h1>Post a Listing</h1>
      <p className="post-subtitle">Fill in the details about what you're selling.</p>

      <form onSubmit={handleSubmit} className="post-form" noValidate>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. Calculus Textbook, Samsung Galaxy Tab..."
            className={errors.title ? 'input-error' : ''}
          />
          {errors.title && <span className="error-msg">{errors.title}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price (KES) *</label>
            <input
              id="price"
              name="price"
              type="number"
              value={form.price}
              step ="100"
              placeholder="e.g. 1500"
              onChange={handleChange}
              placeholder="e.g. 1500"
              min="0"
              max="100000"
              className={errors.price ? 'input-error' : ''}
            />
            {errors.price && <span className="error-msg">{errors.price}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              className={errors.category ? 'input-error' : ''}
            >
              <option value="">Select a category</option>
              {categories
                .filter(cat => cat.id !== 'all')
                .map(cat => (
                  <option key={cat.id} value={cat.label}>{cat.label}</option>
                ))}
            </select>
            {errors.category && <span className="error-msg">{errors.category}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="condition">Condition *</label>
          <select
            id="condition"
            name="condition"
            value={form.condition}
            onChange={handleChange}
            className={errors.condition ? 'input-error' : ''}
          >
            <option value="">Select condition</option>
            <option value="Like New">Like New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="N/A">N/A (for services/food)</option>
          </select>
          {errors.condition && <span className="error-msg">{errors.condition}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            placeholder="Describe the item — condition details, what's included, pickup info..."
            className={errors.description ? 'input-error' : ''}
          />
          {errors.description && <span className="error-msg">{errors.description}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL <span className="optional">(optional)</span></label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="url"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="https://..."
          />
          <small>Leave blank to use a placeholder image.</small>
        </div>

        <button type="submit" className="btn-submit">Post Listing</button>
      </form>
    </div>
  );
}

export default PostListing;