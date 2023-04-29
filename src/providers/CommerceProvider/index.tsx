import { createContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { ICreateProductFormValues } from '../../components/Form/CreateProductForm';

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
  // isEditOfferModalOpen: boolean;
  // setIsEditOfferModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
}

export const CommerceContext = createContext({} as IProductsContext);

export const CommerceProvider = ({ children }: ICommerceProviderProps) => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  // const [isEditOfferModalOpen, setIsEditOfferModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // console.log(productsList);

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

  // Create product:
  const createNewProduct = async (
    productFormData: ICreateProductFormValues
  ) => {
    try {
      const userToken = localStorage.getItem('@TOKENUSERCOMMERCE');
      const userId = localStorage.getItem('@USERIDCOMMERCE');

      const productComplete = {
        ...productFormData,
        userId: Number(userId),
      };

      const responseApi = await api
        .post<IProduct>(`products/`, productComplete, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          setProductsList([...productsList, response.data]);

          console.log('Sacola surpresa cadastrada');
        });

      return responseApi;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Edit offer:
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

          console.log(response); //substituir por toast
        });

      return responseApi;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Remove product from cart:
  const removeOfferFromOfferList = async (offerId: number) => {
    const response = await api.delete(`/products/${offerId}`);

    const removeCurrentOffer = productsList.filter(
      (currentOffer) => currentOffer.id !== offerId
    );

    setProductsList(removeCurrentOffer);

    console.log('Oferta removida'); //Substituir por toast
    // console.log(response);
  };

  return (
    <CommerceContext.Provider
      value={{
        productsList,
        setProductsList,
        // isEditOfferModalOpen,
        // setIsEditOfferModalOpen,
        loading,
        setLoading,
        createNewProduct,
        editOffer,
        removeOfferFromOfferList,
        // removeAllProductsFromCart,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
};
