import React from 'react';

const ServiceForm = ({ newService, setNewService, handleAddService, isEditing }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newService.name || !newService.description || !newService.price) {
      alert('All fields are required');
      return;
    }
    handleAddService(newService);
  };

  return (
    <form className="service-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Service Name"
        value={newService.name}
        onChange={(e) => setNewService({ ...newService, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newService.description}
        onChange={(e) => setNewService({ ...newService, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newService.price}
        onChange={(e) => setNewService({ ...newService, price: e.target.value })}
      />
      <button type="submit">{isEditing ? 'Update Service' : 'Add Service'}</button>
    </form>
  );
};

export default ServiceForm;
