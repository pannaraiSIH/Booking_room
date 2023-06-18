import { BookingContainer, Nav, NewBooking } from '../components';

const Landing = () => {
  return (
    <div className=" flex flex-col md:flex-row md:gap-16">
      <Nav />
      <BookingContainer />
      <NewBooking />
    </div>
  );
};

export default Landing;
