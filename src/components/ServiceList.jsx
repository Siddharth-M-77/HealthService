import React from 'react';
import ServiceItem from './ServiceItem.jsx';

const ServiceList = ({ services, handleUpdate, handleDelete }) => {
  return (
    <div className="service-list">
      {services.map((service) => (
        <ServiceItem
          key={service.id}
          service={service}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ServiceList;
