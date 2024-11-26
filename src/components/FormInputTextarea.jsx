import ValidationMessage from "./ValidationMessage";


const FormInputTextarea = ({ label, id, placeholder, dataValue, inputChangeHandler }) => {

  const renderValidationMessageRequiredBody = (value) => {
    return value === 0 ? (
      <span className="text-red-500">Wajib Diisi!</span>
    ) : null
  };

  return (
    <div className="my-4">
      <label
        htmlFor={id}
        className="block text-gray-700 mb-2"
      >
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        id={id}
        onChange={inputChangeHandler}
        value={dataValue}
        className="h-40 px-3 text-sm py-1 outline-none border-gray-900 w-full resize-none border rounded-lg placeholder:text-sm"
      ></textarea>
      <ValidationMessage
        validationMessageFunct={renderValidationMessageRequiredBody(dataValue.length)}
      />
    </div>
  );
};

export default FormInputTextarea;
