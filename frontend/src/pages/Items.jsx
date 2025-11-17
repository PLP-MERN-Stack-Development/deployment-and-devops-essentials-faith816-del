import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import api from '../utils/api';
import './Items.css';

const Items = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery('items', async () => {
    const response = await api.get('/items');
    return response.data;
  });

  const createMutation = useMutation(
    (newItem) => api.post('/items', newItem),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('items');
        setName('');
        setDescription('');
        setPrice('');
      },
    }
  );

  const deleteMutation = useMutation(
    (id) => api.delete(`/items/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('items');
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    createMutation.mutate({
      name,
      description,
      price: price ? parseFloat(price) : undefined,
    });
  };

  if (isLoading) return <div>Loading items...</div>;
  if (error) return <div>Error loading items</div>;

  return (
    <div className="items">
      <h1>Items Management</h1>
      
      <form onSubmit={handleSubmit} className="item-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </form>

      <div className="items-list">
        <h2>Items ({data?.count || 0})</h2>
        {data?.data?.length === 0 ? (
          <p>No items yet. Create one above!</p>
        ) : (
          <div className="items-grid">
            {data?.data?.map((item) => (
              <div key={item._id} className="item-card">
                <h3>{item.name}</h3>
                {item.description && <p>{item.description}</p>}
                {item.price && <p className="price">${item.price.toFixed(2)}</p>}
                <button
                  onClick={() => deleteMutation.mutate(item._id)}
                  className="btn btn-secondary"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;

