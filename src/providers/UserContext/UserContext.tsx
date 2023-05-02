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
  userName: string;
  id: number;
  foodCategory: string;
  isCompany?: boolean;
  foodCategory: string;
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
        toast.error('Oops! Algo deu errado tente novamente');
        localStorage.getItem('@user:id');
        localStorage.getItem('@user:token');
      }
    };
    if (userToken && UserId) {
      userAutoLogin();
    }
  }, [navigate]);

  const signIn = async (
    formData: TLoginFormSchema,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const typeofRoute = localStorage.getItem('@handle:typUser');
    if (typeofRoute === 'userLogin') {
      try {
        setLoading(true);
        const { data } = await api.post<IUserLoginResponse>('/login', formData);
        if (data.user.isCompany === true) {
          toast.error('Você não é uma empresa');
          navigate('/');
        } else {
          localStorage.setItem('@user:token', data.accessToken);
          localStorage.setItem('@user:id', JSON.stringify(data.user.id));
          setUser(data.user);
          navigate('/userHome');
        }
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
        if (data.user.isCompany === false) {
          toast.error('Você não é um consumidor');
          navigate('/');
        } else {
          localStorage.setItem('@userCompany:token', data.accessToken);
          localStorage.setItem('@userCompany:id', JSON.stringify(data.user.id));
<<<<<<< HEAD
          localStorage.setItem(
            '@EatSmart:userNameCommerce',
            data.user.userName
          );
          localStorage.setItem('@EatSmart:userCommerceEmail', data.user.email);
          localStorage.setItem(
            '@EatSmart:userCommerceFoodCategory',
            data.user.foodCategory
          );
=======
          localStorage.setItem('@EatSmart:userNameCommerce', data.user.userName);
          localStorage.setItem('@EatSmart:userCommerceEmail', data.user.email);
          localStorage.setItem('@EatSmart:userCommerceFoodCategory', data.user.foodCategory);
>>>>>>> 41afb206384a6b9131e0297a3fe0100b620cea3f
          setUser(data.user);
          navigate('/companyHome');
        }
      } catch (error) {
        console.log(error);
        toast.error('Oops! Algo deu errado tente novamente');
      } finally {
        setLoading(false);
      }
    }
  };

  const newUserRegister = async (
    formData: TRegisterFormSchema,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const typeofRoute = localStorage.getItem('@handle:typUser');
    if (typeofRoute === 'userRegister') {
      try {
        const confirmUser = { ...formData, isCompany: false };
        setLoading(true);
        const { data } = await api.post<IUserRegisterResponse>(
          '/register',
          confirmUser
        );
        toast.success('Cadastro realizado com sucesso');
        localStorage.setItem('@handle:typUser', 'userLogin');
        localStorage.setItem('@handle:nav', 'login');
        navigate('/login');
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
        localStorage.setItem('@handle:typUser', 'companyLogin');
        localStorage.setItem('@handle:nav', 'login');

        navigate('/signin');
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
