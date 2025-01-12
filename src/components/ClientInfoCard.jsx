/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPencilAlt, FaCheck, FaTimes } from "react-icons/fa";
import { Button } from "./ui/button";

const ClientInfoCard = ({ clientData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(clientData);
  const [tempData, setTempData] = useState(clientData);

  const handleEdit = () => {
    setTempData({ ...formData });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData(tempData);
    setIsEditing(false);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved data:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`{${name}: ${value}}`);
    setFormData((prev) => ({...prev,[name]: value,}));
  };

  const InfoRow = ({ label, value, name }) => (
    <div className="flex flex-col sm:flex-row mb-2">
      <span className="text-gray-600 w-40">{label}:</span>
      {isEditing ? (
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          className="flex-1 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <span className="flex-1 text-gray-800">{value}</span>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            formData.name || "<Client Name>"
          )}
        </h2>
        {/* Edit and Save buttons */}
        <div className="flex space-x-2">
          {isEditing ? (
            <>
              <Button
                onClick={handleSave}
                type="Button"
                className="p-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <FaCheck />
              </Button>
              <Button
                onClick={handleCancel}
                type="Button"
                className="p-2 text-red-600 hover:text-red-700 transition-colors"
              >
                <FaTimes />
              </Button>
            </>
          ) : (
            <Button
              onClick={handleEdit}
              type="Button"
              className="p-2 text-gray-600 hover:text-gray-700 transition-colors"
            >
              <FaPencilAlt />
            </Button>
          )}
        </div>
      </div>

      {/* Display only */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
        {Object.entries(formData).map(([key, value]) => (
          <InfoRow
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            value={value}
            name={key}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientInfoCard;
