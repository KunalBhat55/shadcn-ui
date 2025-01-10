import { useState} from "react";
import { FaPencilAlt, FaCheck, FaTimes } from "react-icons/fa";
import { Button } from "./ui/button";

const ClientInfoCard = () => {
  const clientData = {
    name: "Diego Ortize",
    status: "Deferred Action DACA",
    docLanguage: "Spanish",
    seekingVisa: "Yes",
    countryOfOrigin: "Mexico",
    intake: "08/19/2024",
    language: "English",
    phone: "(512)828-2929",
    email: "Lola1234@msn.com",
    representative: "xxxxx xxxxxxx",
  };

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsEditing(true);
    
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
              value={formData.name}
              onChange={handleChange}
              className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            formData.name
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
        <InfoRow label="Status" value={formData.status} name="status" />
        <InfoRow
          label="Doc Language"
          value={formData.docLanguage}
          name="docLanguage"
        />
        <InfoRow
          label="Seeking Visa"
          value={formData.seekingVisa}
          name="seekingVisa"
        />
        <InfoRow
          label="Country of Origin"
          value={formData.countryOfOrigin}
          name="countryOfOrigin"
        />
        <InfoRow label="Intake" value={formData.intake} name="intake" />
        <InfoRow label="Language" value={formData.language} name="language" />
        <InfoRow label="Phone" value={formData.phone} name="phone" />
        <InfoRow label="Email" value={formData.email} name="email" />
        <InfoRow
          label="Representative"
          value={formData.representative}
          name="representative"
        />
      </div>
    </div>
  );
};

export default ClientInfoCard;
