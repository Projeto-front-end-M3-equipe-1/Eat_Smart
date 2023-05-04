import { createContext, useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { TLoginFormSchema } from "../../components/Form/LoginForm/loginFormSchema";
import { TRegisterFormSchema } from "../../components/Form/RegisterCommerceForm/SchemaFormRegister";
import { toast } from "react-toastify";
import { IRegisterUserFormData } from "../../components/Form/RegisterCommerceForm";

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
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export interface IUser {
  email: string;
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
  const [isEditUserProfileModalOpen, setIsEditUserProfileModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const userToken = localStorage.getItem("@user:token");
    const UserId = localStorage.getItem("@user:id");

    const userAutoLogin = async () => {
      try {
        const { data } = await api.get<IUser>(`/users/${UserId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setUser(data);
        navigate("/userHome");
      } catch (error) {
        toast.error("Oops! Algo deu errado tente novamente");
        localStorage.getItem("@user:id");
        localStorage.getItem("@user:token");
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
    const typeofRoute = localStorage.getItem("@handle:typUser");
    if (typeofRoute === "userLogin") {
      try {
        setLoading(true);
        const { data } = await api.post<IUserLoginResponse>("/login", formData);
        if (data.user.isCompany === true) {
          toast.error("Você não é uma empresa");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          localStorage.setItem("@user:token", data.accessToken);
          localStorage.setItem("@user:id", JSON.stringify(data.user.id));
          localStorage.setItem("@EatSmart:userName", data.user.userName);
          localStorage.setItem("@EatSmart:userEmail", data.user.email);
          setUser(data.user);
          toast.success("Login realizado com sucesso");
          setTimeout(() => {
            navigate("/userHome");
          }, 2000);
        }
      } catch (error) {
        toast.error("Oops! Algo deu errado tente novamente");
      } finally {
        setLoading(false);
      }
    }
    if (typeofRoute === "companyLogin") {
      try {
        setLoading(true);
        const { data } = await api.post<IUserLoginResponse>("/signin", formData);
        if (data.user.isCompany === false) {
          toast.error("Você não é um consumidor");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          localStorage.setItem("@userCompany:token", data.accessToken);
          localStorage.setItem("@userCompany:id", JSON.stringify(data.user.id));
          localStorage.setItem("@EatSmart:userNameCommerce", data.user.userName);
          localStorage.setItem("@EatSmart:userCommerceEmail", data.user.email);
          localStorage.setItem("@EatSmart:userCommerceFoodCategory", data.user.foodCategory);
          setUser(data.user);
          toast.success("Login realizado com sucesso");
          setTimeout(() => {
            navigate("/companyHome");
          }, 2000);
        }
      } catch (error) {
        toast.error("Oops! Algo deu errado tente novamente");
      } finally {
        setLoading(false);
      }
    }
  };

  const newUserRegister = async (
    formData: TRegisterFormSchema,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const typeofRoute = localStorage.getItem("@handle:typUser");
    if (typeofRoute === "userRegister") {
      try {
        setLoading(true);
        toast.success("Cadastro realizado com sucesso");
        localStorage.setItem("@handle:typUser", "userLogin");
        localStorage.setItem("@handle:nav", "login");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (error) {
        toast.error("Oops! Algo deu errado tente novamente");
      } finally {
        setLoading(false);
      }
    }
    if (typeofRoute === "companyRegister") {
      try {
        const confirmUser = { ...formData, isCompany: true };
        setLoading(true);
        await api.post<IUserRegisterResponse>("/signup", confirmUser);
        toast.success("Cadastro realizado com sucesso");
        localStorage.setItem("@handle:typUser", "companyLogin");
        localStorage.setItem("@handle:nav", "login");
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      } catch (error) {
        toast.error("Oops! Algo deu errado tente novamente");
      } finally {
        setLoading(false);
      }
    }
  };

  const editUserProfile = async (newUserProfileData: IRegisterUserFormData) => {
    const userId = localStorage.getItem("@user:id");
    const userToken = localStorage.getItem("@user:token");
    try {
      const { data } = await api.patch<IUser>(`/users/${userId}`, newUserProfileData, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      setUser(data);
      toast.success("Cadastro editado com sucesso");
    } catch (error) {
      toast.error("Oops! Algo deu errado tente novamente");
    }
  };

  const logout = () => {
    const keysToRemove = [
      "@user:token",
      "@EatSmart:cart",
      "@user:id",
      "@EatSmart:userName",
      "@EatSmart:userEmail",
      "@userCompany:token",
      "@userCompany:id",
      "@EatSmart:userNameCommerce",
      "@EatSmart:userCommerceEmail",
      "@EatSmart:userCommerceFoodCategory",
      "@handle:typUser",
      "@handle:nav",
      "@handle:typUser",
      "@handle:nav",
    ];
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    toast.success("Logout realizado com sucesso");
    setTimeout(() => {
      setUser(null);
      navigate("/");
    }, 2000);
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
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
