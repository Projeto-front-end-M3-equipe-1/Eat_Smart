import { createContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { ICreateProductFormValues } from '../../components/Form/CreateProductForm';
import { IRegisterUserFormData } from '../../components/Form/RegisterCommerceForm';

export interface ICommerceProviderProps {
  children: React.ReactNode;
}

export interface IProduct {
  title: string;
  originalPrice: number;
  discount: number;
  quantity: number;
  userId: number | null;
  id: number;
}

export interface IProductsContext {
  productsList: IProduct[];
  setProductsList: React.Dispatch<React.SetStateAction<IProduct[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  createNewProduct: (
    productFormData: ICreateProductFormValues
  ) => Promise<void>;
  editOffer: (
    productId: number,
    productFormData: ICreateProductFormValues
  ) => Promise<void>;
  removeOfferFromOfferList: (productId: number) => void;
  removeAllOffers: () => void;
  editCommerceProfile: Promise<void>
}

export const CommerceContext = createContext({} as IProductsContext);

export const CommerceProvider = ({ children }: ICommerceProviderProps) => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllProductsFromServer = async () => {
      try {
        setLoading(true);
        const userToken = localStorage.getItem('@TOKEN');

        const responseApi = await api
          .get<IProduct[]>('/products', {
            headers: { Authorization: `Bearer ${userToken}` },
          })
          .then((response) => {
            setProductsList(response.data);
          });

        return responseApi;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getAllProductsFromServer();
  }, [productsList]);

  // *Create product*:
  const createNewProduct = async (
    productFormData: ICreateProductFormValues
  ) => {
    try {
      const userToken = localStorage.getItem('@TOKENUSERCOMMERCE');
      const userId = localStorage.getItem('@USERIDCOMMERCE');
      const userCommerce = localStorage.getItem('@USERNAMECOMMERCE');

      const productComplete = {
        ...productFormData,
        userId: Number(userId),
        company: userCommerce,
      };

      const responseApi = await api
        .post<IProduct>(`products/`, productComplete, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          setProductsList([...productsList, response.data]);

          console.log('Sacola surpresa cadastrada'); //substituir por toast
        });

      return responseApi;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // *Edit offer*:
  const editOffer = async (
    offerId: number,
    newOfferFormData: ICreateProductFormValues
  ) => {
    try {
      const userToken = localStorage.getItem('@TOKENUSERCOMMERCE');

      const responseApi = await api
        .patch<IProduct>(`/products/${offerId}`, newOfferFormData, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          const updateCurrentProduct = productsList.filter(
            (product) => product.id !== offerId
          );
          setProductsList([...updateCurrentProduct, response.data]);

          console.log("Offerta alterada"); //substituir por toast
        });

      return responseApi;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // *Remove offer from registered offers *:
  const removeOfferFromOfferList = async (offerId: number) => {
    const response = await api.delete(`/products/${offerId}`);

    const removeCurrentOffer = productsList.filter(
      (currentOffer) => currentOffer.id !== offerId
    );

    setProductsList(removeCurrentOffer);

    console.log('Oferta removida'); //substituir por toast
  };

  // *Remove all offers from resgitered offers*:
  const removeAllOffers = () => {
    setProductsList([]);
  };

  // *Edit commerce profile*:
  const editCommerceProfile = async (
    newCommerceProfileData: IRegisterUserFormData
  ) => {
    const userCommerceId = localStorage.getItem('@USERIDCOMMERCE');
    const userToken = localStorage.getItem('@TOKENUSERCOMMERCE');

    try {
      const responseApi = await api
        .patch<IRegisterUserFormData>(
          `/users/${userCommerceId}`,
          newCommerceProfileData,
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
      setLoading(false);
    }
  };

  return (
    <CommerceContext.Provider
      value={{
        productsList,
        setProductsList,
        loading,
        setLoading,
        createNewProduct,
        editOffer,
        removeOfferFromOfferList,
        removeAllOffers,
        editCommerceProfile,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
};
