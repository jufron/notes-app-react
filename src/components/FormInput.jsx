import { useState } from "react";
import ValidationMessage from "./ValidationMessage";


const FormInput = ({ label, type, id, placeholder, maxChars, inputValue, inputChangeHandler }) => {
  const [remainingChars, setRemainingChars] = useState(maxChars);

  const handleInputChange = (e) => {
    const value = e.target.value;

    // ? Hitung sisa karakter
    const remaining = maxChars - value.length;

    // ? Validasi: hanya perbarui jika karakter tidak melebihi batas
    if (remaining >= 0) {
      setRemainingChars(remaining);
      inputChangeHandler(e);
    }
  };

  // ? Fungsi untuk menampilkan pesan validasi
  const renderValidationMessage = (remainingChars) => {
    return remainingChars === 0 ? (
      <span className="text-red-500">Batas karakter tercapai!</span>
    ) : (
      `${remainingChars} Karakter Tersisa`
    );
  };

  const renderValidationMessageRequiredTitle = remainingChars => {
    return remainingChars === maxChars ? (
      <span className="text-red-500">Wajib Diisi!</span>
    ) : null;
  };

  return (
    <div className="w-full my-4">
      <label
        className="block text-gray-700 mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        max={maxChars}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={inputValue}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline border-gray-900"
      />
      <div className="flex justify-between">
        <ValidationMessage
          validationMessageFunct={renderValidationMessageRequiredTitle(remainingChars)}
        />
        <ValidationMessage
          validationMessageFunct={renderValidationMessage(remainingChars)}
        />
      </div>
    </div>
  );
};

export default FormInput;
