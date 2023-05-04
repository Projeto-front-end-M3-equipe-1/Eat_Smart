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
      <input
        {...register("search")}
        type="text"
        placeholder="O que você está procurando..."
        id="search"
      />
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};
