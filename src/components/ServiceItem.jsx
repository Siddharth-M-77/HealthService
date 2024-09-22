import React from 'react';

const ServiceItem = ({ service, handleUpdate, handleDelete }) => {
  return (
    <div className="service-item">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>${service.price}</p>
      <div className="actions">
        <button onClick={() => handleUpdate(service)}>Update</button>
        <button onClick={() => handleDelete(service.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ServiceItem;
