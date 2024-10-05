/* eslint-disable react/prop-types */
const Alert = ({ msg }) => {
  return (
    <div className="bg-red-500 text-white p-2 rounded-md mt-6 text-sm justify-center items-center flex mb-4 mt-4">
      <i className="fas fa-exclamation-triangle"></i>
      <span>{msg}</span>
    </div>
  );
};

export default Alert;
