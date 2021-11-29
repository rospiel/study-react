import React from 'react';
import { TOKEN_POST } from './apiUrl';
import { USER_GET } from './apiUrl';
import { TOKEN_VALIDATE_POST } from './apiUrl';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate],
  );

  async function getUser(token) {
    const url = USER_GET(token);

    const response = await fetch(url.url, url.options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    const url = TOKEN_POST({
      username: username.value,
      password: password.value,
    });

    try {
      setError(null);
      setLoading(true);
      const response = await fetch(url.url, url.options);

      if (!response.ok) {
        throw new Error('Usuário Inválido.');
      }

      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      await getUser(json.token);
      navigate('/conta');
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function authenticateUser() {
      const token = window.localStorage.getItem('token');
      try {
        setError(null);
        setLoading(true);

        if (!token) {
          setLogin(false);
          return;
        }

        await validateToken(token);
        await getUser(token);
      } catch (error) {
        userLogout();
      } finally {
        setLoading(false);
      }
    }

    async function validateToken(token) {
      if (token) {
        const { url, options } = TOKEN_VALIDATE_POST(token);
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error('Token inválido');
        }
      }
    }

    authenticateUser();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
