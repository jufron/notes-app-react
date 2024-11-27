import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import FormInput from "./FormInput";
import FormInputTextarea from "./FormInputTextarea";


const InputNotes = ({addNotes}) => {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const toggleModalCreate = () => {
    setShowModalCreate(!showModalCreate);
    resetInput();
  };

  const titleEventChangeHandler = e => setTitle(e.target.value);
  const bodyEventChangeHandler = e => setBody(e.target.value);

  const buttonSubmitHandler = e => {
    e.preventDefault();
    addNotes({title, body});
    toggleModalCreate();
    resetInput();
  };

  const resetInput = () => {
    setTitle('');
    setBody('');
  };

  const isButtonDisabled = title.trim() === "" || body.trim() === "";

  return (
    <div className="mx-10 my-3">
      <Button className="bg-blue-400 hover:bg-blue-600" clickHandler={toggleModalCreate} >Tambah</Button>
      <Modal showModalCreate={showModalCreate} >
        <form onSubmit={buttonSubmitHandler} >
          <div className="mt-3 text-center sm:mt-0 sm:text-left">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">Buat Catatan Baru</h3>
            <div className="mt-2">
              <FormInput
                label="Judul"
                id="judul"
                type="text"
                maxChars={50}
                placeholder="Masukan Judul"
                inputValue={title}
                inputChangeHandler={titleEventChangeHandler}
              />
              <FormInputTextarea
                label="Catatan"
                id="body"
                placeholder="Masukan Catatan Anda"
                dataValue={body}
                inputChangeHandler={bodyEventChangeHandler}
              />
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 text-base leading-6 font-medium shadow-sm focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5 ${
                  isButtonDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-500 text-white"
                }`}
                >
                Accept
              </button>
            </span>
            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                type="button"
                onClick={toggleModalCreate}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                Cancel
              </button>
            </span>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default InputNotes;
