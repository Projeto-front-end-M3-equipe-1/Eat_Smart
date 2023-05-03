import { createContext, useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { TLoginFormSchema } from '../../components/Form/LoginForm/loginFormSchema';
import { TRegisterFormSchema } from '../../components/Form/RegisterCommerceForm/SchemaFormRegister';
import { toast } from 'react-toastify';
import { IRegisterUserFormData } from '../../components/Form/RegisterCommerceForm';

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
  isEditUserProfileModalOpen: boolean;
  setIsEditUserProfileModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editUserProfile: (newUserProfileData: IRegisterUserFormData) => Promise<void>;
}

interface IUser {
  email: string;
  name: string;
  userName: string;
  id: number;
  foodCategory: string;
  isCompany?: boolean;
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
  const [isEditUserProfileModalOpen, setIsEditUserProfileModalOpen] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('@user:token');
    const UserId = localStorage.getItem('@user:id');

    const userAutoLogin = async () => {
      try {
        const { data } = await api.get<IUser>(`/users/${UserId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setUser(data);
        navigate('/userHome');
      } catch (error) {
        console.log(error)
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
          localStorage.setItem('@EatSmart:userName', data.user.userName);
          localStorage.setItem('@EatSmart:userEmail', data.user.email);
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
          localStorage.setItem('@EatSmart:userNameCommerce', data.user.userName);
          localStorage.setItem('@EatSmart:userCommerceEmail', data.user.email);
          localStorage.setItem('@EatSmart:userCommerceFoodCategory', data.user.foodCategory);
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
        console.log(data);
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

  const editUserProfile = async (
    newUserProfileData: IRegisterUserFormData
  ) => {
    const userId = localStorage.getItem('@user:id');
    const userToken = localStorage.getItem('@user:token');

    try {
      const responseApi = await api
        .patch<IRegisterUserFormData>(
          `/users/${userId}`,
          newUserProfileData,
          {
            headers: { Authorization: `Bearer ${userToken}` },
          }
        )
        .then((response) => {
          console.log(response.data); //substituir por toast
          console.log('Alterado');
        });

      return responseApi;
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
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
        isEditUserProfileModalOpen,
        setIsEditUserProfileModalOpen,
        editUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
