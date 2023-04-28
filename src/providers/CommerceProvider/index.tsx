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
  cartProducts: IProduct[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  createNewProduct: (
    productFormData: ICreateProductFormValues
  ) => Promise<void>;
  updateProduct: (
    productId: number,
    formData: ICreateProductFormValues
  ) => Promise<void>;
  removeProductCart: (productId: number) => void;
  removeAllProductsFromCart: () => void;
}

export const CommerceContext = createContext({} as IProductsContext);

export const CommerceProvider = ({ children }: ICommerceProviderProps) => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllProductsFromServer = async () => {
      try {
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

  }, []);

  // Create product:
  const createNewProduct = async (
    productFormData: ICreateProductFormValues
  ) => {
    try {
      const userToken = localStorage.getItem('@TOKENCOMMERCE');
      const userId = localStorage.getItem('@USERIDCOMMERCE');
      
      const productComplete = {
        ...productFormData,
        userId: userId,
      };

      const responseApi = await api
        .post(`products/`, productComplete, {
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

  // Update product:
  const updateProduct = async (
    productId: number,
    formData: ICreateProductFormValues
  ) => {
    try {
      const responseApi = await api
        .put(`/products/${productId}`, formData)
        .then((response) => {
          const updateCurrentProduct = productsList.filter(
            (product) => product.id !== productId
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

  // *Remove product from cart*:
  const removeProductCart = (productId: number) => {
    const newCartList = cartProducts.filter(
      (product) => product.id !== productId
    );
    setCartProducts(newCartList);
  };

  const removeAllProductsFromCart = () => {
    setCartProducts([]);
  };

  return (
    <CommerceContext.Provider
      value={{
        productsList,
        setProductsList,
        loading,
        setLoading,
        createNewProduct,
        updateProduct,
        removeProductCart,
        removeAllProductsFromCart,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
};
