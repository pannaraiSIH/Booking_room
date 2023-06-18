import Form from './Form';
import { RxAvatar } from 'react-icons/rx';

const NewBooking = () => {
  return (
    <div className="hidden w-[50%] bg-blue-200 md:block">
      <div className="p-8 border-b border-blue-400 flex justify-end ">
        <RxAvatar className="text-3xl" />
      </div>
      <Form />
    </div>
  );
};

export default NewBooking;
