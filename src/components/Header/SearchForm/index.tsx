import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CartContext } from "../../../providers/CartProvider";

type TSearchFormValues = {
  search: string;
};

export const SearchForm = () => {
  const { searchOffer } = useContext(CartContext);
  const { register, handleSubmit } = useForm<TSearchFormValues>();
  
  const submit: SubmitHandler<TSearchFormValues> = ({ search }) => {
    searchOffer(search);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input {...register('search')} type='text' placeholder='Digitar pesquisa' id='search' />
      <button type='submit'>Qual surpresa você quer hoje</button>
    </form>
  );
};
