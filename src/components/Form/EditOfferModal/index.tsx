import { Input } from '../Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { editOfferSchema } from './editOfferSchema';
import { ICreateProductFormValues } from '../CreateProductForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { CommerceContext, IProduct } from '../../../providers/CommerceProvider';


export const EditOfferModal = ({ offer, setIsEditOfferModalOpen } : {offer: IProduct; setIsEditOfferModalOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateProductFormValues>({
    resolver: zodResolver(editOfferSchema),
  });

  const { editOffer } = useContext(CommerceContext);
  const offerId = offer.id;

  const editOfferSubmit: SubmitHandler<ICreateProductFormValues> = (
    newOfferFormData
  ) => {
    for (const key in newOfferFormData) {
      if (newOfferFormData[key as keyof ICreateProductFormValues] === '') {
        newOfferFormData[key as keyof ICreateProductFormValues] = offer[key as keyof IProduct] as string ;
      }
    }

    // if (newOfferFormData.title === '') {
    //   newOfferFormData.title = offer.title;
    // }

    // if (newOfferFormData.quantity === '') {
    //   newOfferFormData.quantity = offer.quantity;
    // }

    // if (newOfferFormData.originalPrice === '') {
    //   newOfferFormData.originalPrice = offer.originalPrice;
    // }

    // if (newOfferFormData.discount === '') {
    //   newOfferFormData.discount = offer.discount;
    // }

    console.log(newOfferFormData);
    editOffer(offerId, newOfferFormData);
    setIsEditOfferModalOpen(false);
  };

  return (
    <div role='dialog'>
      <span>
        <h3>Edite sua oferta</h3>
        <button onClick={() => setIsEditOfferModalOpen(false)}>X</button>
      </span>

      <form onSubmit={handleSubmit(editOfferSubmit)}>
        <Input
          type='text'
          label='Preferências'
          placeholder={offer.title}
          id='title'
          {...register('title')}
          error={errors.title}
        />
        <Input
          type='number'
          label='Itens disponíveis'
          placeholder={offer.quantity.toString()}
          id='quantity'
          {...register('quantity')}
          error={errors.quantity}
        />
        <Input
          type='number'
          label='Preço original'
          placeholder={`R$ ${offer.originalPrice.toLocaleString('pt-br', {
            minimumFractionDigits: 2,
          })}`}
          id='originalPrice'
          {...register('originalPrice')}
          error={errors.originalPrice}
        />
        <Input
          type='number'
          label='Desconto'
          placeholder={`${offer.discount}%`}
          id='discount'
          {...register('discount')}
          error={errors.discount}
        />
        <button type='submit'>Salvar oferta</button>
      </form>
    </div>
  );
};
