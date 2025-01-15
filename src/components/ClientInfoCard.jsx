/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaPencilAlt, FaCheck, FaTimes, FaTrash } from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import Alert from "./Alert";
import { set, useForm } from "react-hook-form";


const ClientInfoCard = ({ clientData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(clientData);
  const [tempData, setTempData] = useState(clientData);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleEdit = () => {
    setTempData({ ...formData });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData(tempData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    setIsDeleted(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setTempData({ ...formData });
    console.log("Saved data:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };

    const {
      register,
      handleSubmit,
      watch,
      trigger,
      formState: { errors },
    } = useForm();



  const InfoRow = ({ label, value, name }) => {
    

    return (
      <div className="flex justify-between items-center mb-1 text-sm">
        <span className="text-gray-500 w-32 truncate">{label}:</span>
        {isEditing ? (
          <form onSubmit={handleSubmit(handleChange)}>
            <Input
              type="text"
              name={name}
              value={value}
              onChange={handleChange}
              className="flex-1 px-2 py-1 border rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
            />
          </form>
        ) : (
          <span className="flex-1 text-gray-800 truncate">{value}</span>
        )}
      </div>
    );
  };

  return (
    !isDeleted && (
      <div className="bg-white rounded-md shadow-sm p-4 max-w-sm w-full mx-2 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-700 truncate">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                className="px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
              />
            ) : (
              formData.name || ""
            )}
          </h2>
          <div className="flex space-x-2">
            {isEditing ? (
              <>
                <Button onClick={handleSave} type="button" variant="outline">
                  <FaCheck />
                </Button>
                <Button onClick={handleCancel} type="button" variant="outline">
                  <FaTimes />
                </Button>
              </>
            ) : (
              <div className="flex space-x-2">
                <Button variant="outline" onClick={handleEdit} type="button">
                  <FaPencilAlt />
                </Button>
                <Alert
                  triggerText={
                    <FaTrash className="border border-input bg-background hover:bg-accent hover:text-accent-foreground" />
                  }
                  title="Delete Client"
                  description="Are you sure you want to delete this client?"
                  actionText="Delete"
                  cancelText="Cancel"
                  onAction={handleDelete}
                />
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1">
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
    )
  );
};

export default ClientInfoCard;
