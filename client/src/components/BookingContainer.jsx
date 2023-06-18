import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import TableRow from './TableRow';

const BookingContainer = () => {
  const { getAllBooking } = useAppContext();

  useEffect(() => {
    return () => getAllBooking();
  }, []);

  return (
    <table className=" p-4 rounded-lg my-12 md:w-full md:my-16 ">
      <thead>
        <tr>
          <th className="text-2xl pb-3">Meeting room</th>
        </tr>
      </thead>
      <tbody className="flex flex-col divide-y">
        <TableRow time="09:00" />
        <TableRow time="10:00" />
        <TableRow time="11:00" />
        <TableRow time="12:00" />
        <TableRow time="13:00" />
        <TableRow time="14:00" />
        <TableRow time="15:00" />
        <TableRow time="16:00" />
        <TableRow time="17:00" />
        <TableRow time="18:00" />
      </tbody>
    </table>
  );
};

export default BookingContainer;
