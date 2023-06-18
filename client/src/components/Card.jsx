import { RxAvatar } from 'react-icons/rx';
import { BiTime } from 'react-icons/bi';

const Card = ({ title, creator, time }) => {
  let toMinute = time.split(':')[1];
  let toHour = time.split(':')[0];
  toHour = Number(toHour) + 1;
  const toTime = [toHour.toString(), toMinute].join(':');

  return (
    <div className="bg-blue-100 p-6 rounded-md border-l-4 border-blue-500">
      <p className="text-blue-400 font-semibold mb-2 text-lg capitalize">
        {title}
      </p>
      <p className="flex items-center gap-2">
        <BiTime />
        {time} - {toTime}
      </p>
      <div className="flex items-center gap-2">
        <RxAvatar />
        <p>{creator}</p>
      </div>
    </div>
  );
};

export default Card;
