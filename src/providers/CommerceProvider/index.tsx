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
  userId: number;
  id: number;
}

export interface IProductsContext {
  productsList: IProduct[];
  setProductsList: React.Dispatch<React.SetStateAction<IProduct[]>>;
  createNewProduct: (
    productFormData: ICreateProductFormValues
  ) => Promise<void>;
}

export const CommerceContext = createContext({} as IProductsContext);

export const CommerceProvider = ({ children }: ICommerceProviderProps) => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  console.log(productsList);

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
        // setLoading(false);
      }
    };
    getAllProductsFromServer();
  }, []);


  // Create product:
  const createNewProduct = async (
    productFormData: ICreateProductFormValues
  ) => {
    try {
      // const userToken = localStorage.getItem('@TOKENCOMMERCE');
      const userId = localStorage.getItem('@USERIDCOMMERCE');
      const responseApi = await api
        .post(
          `products/${userId}`,
          productFormData
          // {
          //   headers: { Authorization: `Bearer ${userToken}` },
          // }
        )
        .then((response) => {
          setProductsList([...productsList, response.data]);

          console.log('Sacola surpresa cadastrada');
        });
      return responseApi;
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <CommerceContext.Provider
      value={{ productsList, setProductsList, createNewProduct }}
    >
      {children}
    </CommerceContext.Provider>
  );
};
