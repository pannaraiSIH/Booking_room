const Alert = ({ alertText }) => {
  return (
    <p
      className={`text-md bg-white text-gray-600 p-5 rounded-md absolute top-[6%] right-[5%]`}
    >
      {alertText}
    </p>
  );
};

export default Alert;
