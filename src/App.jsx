import React, { useState } from "react";
import ServiceForm from "./components/Service";
import ServiceList from "./components/ServiceList";
import "./App.css";

const App = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "General Checkup",
      description: "Basic health checkup",
      price: 50,
    },
    {
      id: 2,
      name: "Dental Cleaning",
      description: "Teeth cleaning and polishing",
      price: 100,
    },
  ]);

  const [newService, setNewService] = useState({
    id: null,
    name: "",
    description: "",
    price: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleAddService = (service) => {
    if (isEditing) {
      setServices(services.map((s) => (s.id === service.id ? service : s)));
      setIsEditing(false);
    } else {
      setServices([...services, { id: services.length + 1, ...service }]);
    }
    setNewService({ id: null, name: "", description: "", price: "" });
  };

  const handleUpdate = (service) => {
    setNewService(service);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="container">
      <h1>Healthcare Services List</h1>
      <ServiceForm
        newService={newService}
        setNewService={setNewService}
        handleAddService={handleAddService}
        isEditing={isEditing}
      />
      <ServiceList
        services={services}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
