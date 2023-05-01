import { ILoginFormData } from '../../components/Form/LoginForm';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

// Contexto criado para lógicas relacionadas ao usuario (login, auto-login, etc...)

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface ICommerceUser {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  foodCategory: string;
  company: boolean;
  id: number;
}

export interface ILoginResponse {
  accessToken: string;
  user: ICommerceUser;
}
// interface para registro puxando o user do icommerceUser
export interface IUserRegisterResponse {
  acessToken: string;
  /*   user:IcommerceUser; */
}

export interface IAxiosError {
  message: string;
  response?: {
    data: string;
  };
}
export interface IUserContext {
  login: (loginFormData: ILoginFormData) => Promise<void>;
  commerceUser: ICommerceUser | null;
  setCommerceUser: React.Dispatch<React.SetStateAction<ICommerceUser | null>>;
  loading: boolean;
}

export const UserCommerceContext = createContext({});

export const UserCommerceProvider = ({ children }: IUserProviderProps) => {
  const [commerceUser, setCommerceUser] = useState<ICommerceUser | null>(null);
  const [loading, setLoading] = useState(false);

  // criando auto login

  useEffect(() => {
    const token = localStorage.getItem('@TOKENUSERCOMMERCE');
    const userId = localStorage.getItem('@USERIDCOMMERCE');

    const userAutoLogin = async () => {
      try {
        const { data } = await api.get<ICommerceUser>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCommerceUser(data);
        navigate('/'); // dashboard
      } catch (error) {
        const Ierror = error as IAxiosError;
        console.log(Ierror);
        localStorage.removeItem('@TOKENUSERCOMMERCE'); // alterar para correto
        localStorage.removeItem('@USERIDCOMMERCE'); // alterar para correto;
      }
    };
    if (token && userId) {
      userAutoLogin();
    }
  }, []);

  const navigate = useNavigate();

  // *Login*:
  const login = async (loginFormData: ILoginFormData) => {
    try {
      setLoading(true);
      const responseApi = await api
        .post<ILoginResponse>('/signin', loginFormData)
        .then((response) => {
          const { accessToken, user: userResponse } = response.data;

          api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

          localStorage.setItem('@TOKENUSERCOMMERCE', accessToken);
          localStorage.setItem(
            '@USERIDCOMMERCE',
            JSON.stringify(userResponse.id)
          );
          localStorage.setItem(
            '@EatSmart:userNameCommerce',
            userResponse.userName
          );
          localStorage.setItem(
            '@EatSmart:userCommerceEmail',
            userResponse.email
          );
          localStorage.setItem(
            '@EatSmart:userCommerceFoodCategory',
            userResponse.foodCategory
          );

          setCommerceUser(userResponse);
          navigate('/companyHome');
        });

      return responseApi;
    } catch (error) {
      console.log(error); //substituir por toast
    } finally {
      setLoading(false);
    }
  };
  // registrar

  const userRegister = async (
    /*   formData:registerCommerceFormSchema, */
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> => {
    try {
      setLoading(true);
      /*       await api.post<IUserRegisterResponse>('/users', formData); */
      console.log('Cadastro efetuado com Sucesso');
      navigate('/');
    } catch (error) {
      const Ierror = error as IAxiosError;
      console.log(Ierror);
    } finally {
      setLoading(false);
    }
  };

  // logout :

  const userLogout = () => {
    localStorage.removeItem('@TOKENUSERCOMMERCE');
    localStorage.removeItem('@USERIDCOMMERCE'); // VERIFICAR
    setCommerceUser(null);
    navigate('/');
  };

  return (
    <UserCommerceContext.Provider
      value={{
        login,
        commerceUser,
        setCommerceUser,
        loading,
        userRegister,
        userLogout,
      }}
    >
      {children}
    </UserCommerceContext.Provider>
  );
};
