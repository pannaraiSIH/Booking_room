import { Card } from '../components';
import { useAppContext } from '../context/appContext';

const TableRow = ({ time }) => {
  const { booking } = useAppContext();

  if (booking.length === 0) {
    return (
      <tr className="min-h-[5rem] flex gap-10 p-4 items-center ">
        <td className="max-w-[7rem] w-full h-ful text-lg text-center md:w-[5rem]">
          {time}
        </td>
      </tr>
    );
  }

  return (
    <tr className="min-h-[5rem] flex gap-10 p-4 items-center ">
      <td className="max-w-[7rem] w-full h-ful text-lg text-center md:w-[5rem]">
        {time}
      </td>
      <td className="w-full">
        {booking.map(item => {
          if (item.time === time) {
            return (
              <Card
                key={item._id}
                creator={item.createdBy}
                title={item.title}
                time={item.time}
              />
            );
          }
        })}
      </td>
    </tr>
  );
};

export default TableRow;
