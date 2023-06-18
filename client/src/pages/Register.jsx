import { useState } from 'react';
import { Alert, Input } from '../components';
import { useAppContext } from '../context/appContext';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const { showAlert, alertText, displayAlert } = useAppContext();

  const toggleIsMember = () => {
    setValues({ ...Register, isMember: !values.isMember });
  };

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {showAlert && <Alert alertText={alertText} />}

        {!values.isMember && (
          <Input
            type="text"
            id="name"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        <Input
          type="email"
          id="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <Input
          type="password"
          id="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
        <p>
          {values.isMember ? "Don't have account yet?" : 'Already a member?'}
          <button type="button" onClick={toggleIsMember}>
            {values.isMember ? 'Sign up' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
