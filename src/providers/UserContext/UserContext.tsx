import { createContext, useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { TLoginFormSchema } from '../../components/Form/LoginForm/loginFormSchema';
import { TRegisterFormSchema } from '../../components/Form/RegisterCommerceForm/SchemaFormRegister';
import { toast } from 'react-toastify';

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  user: IUser | null;

  signIn: (
    formData: TLoginFormSchema,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  newUserRegister: (
    formData: TRegisterFormSchema,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  logout: () => void;
}

interface IUser {
  email: string;
  name: string;
  id: number;
}

interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

interface IUserRegisterResponse {
  accessToken: string;
  user: IUser;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const userToken = localStorage.getItem('@user:token');
    const UserId = localStorage.getItem('@user:id');

    const userAutoLogin = async () => {
      try {
        const { data } = await api.get<IUser>(`/users/:${UserId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setUser(data);
        navigate('/shop');
      } catch (error) {
        console.log(error);
        toast.error('Oops! Algo deu errado tente novamente');
        localStorage.getItem('@user:id');
        localStorage.getItem('@user:token');
      }
    };
    if (userToken && UserId) {
      userAutoLogin();
    }
  }, []);

  const signIn = async (
    formData: TLoginFormSchema,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const typeofRoute = localStorage.getItem('@handle:typUser');
    if (typeofRoute === 'userLogin') {
      try {
        setLoading(true);
        const { data } = await api.post<IUserLoginResponse>('/login', formData);
        localStorage.setItem('@user:token', data.accessToken);
        localStorage.setItem('@user:id', JSON.stringify(data.user.id));
        setUser(data.user);
        navigate('/userHome');
      } catch (error) {
        console.log(error);
        toast.error('Oops! Algo deu errado tente novamente');
      } finally {
        setLoading(false);
      }
    }
    if (typeofRoute === 'companyLogin') {
      try {
        setLoading(true);
        const { data } = await api.post<IUserLoginResponse>(
          '/signin',
          formData
        );
        localStorage.setItem('@user:token', data.accessToken);
        localStorage.setItem('@user:id', JSON.stringify(data.user.id));
        setUser(data.user);
        navigate('/companyHome');
      } catch (error) {
        console.log(error);
        toast.error('Oops! Algo deu errado tente novamente');
      } finally {
        setLoading(false);
      }
    }
  };

  const newUserRegister = async (
    formData: TLoginFormSchema,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    console.log(formData);

    const typeofRoute = localStorage.getItem('@handle:typUser');
    if (typeofRoute === 'userRegister') {
      try {
        const confirmUser = { ...formData, isCompany: false };
        setLoading(true);
        await api.post<IUserRegisterResponse>('/register', confirmUser);
        toast.success('Cadastro realizado com sucesso');
        console.log(formData);
        console.log('foi user');
      } catch (error) {
        toast.error('Oops! Algo deu errado tente novamente');
      } finally {
        setLoading(false);
      }
    }
    if (typeofRoute === 'companyRegister') {
      try {
        const confirmUser = { ...formData, isCompany: true };
        setLoading(true);
        await api.post<IUserRegisterResponse>('/signup', confirmUser);
        toast.success('Cadastro realizado com sucesso');
        console.log('foi empresa');
      } catch (error) {
        toast.error('Oops! Algo deu errado tente novamente');
      } finally {
        setLoading(false);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('@user:id');
    localStorage.removeItem('@user:token');
    setUser(null);
    navigate('/');
  };
  return (
    <UserContext.Provider
      value={{
        user,
        signIn,
        newUserRegister,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
