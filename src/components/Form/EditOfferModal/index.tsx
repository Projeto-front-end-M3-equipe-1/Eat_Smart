import { Input } from '../Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { editOfferSchema } from './editOfferSchema';
import { ICreateProductFormValues } from '../CreateProductForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { CommerceContext } from '../../../providers/CommerceProvider';
import { any } from 'zod';


export const EditOfferModal = ({ offer }: any) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateProductFormValues>({
    resolver: zodResolver(editOfferSchema),
  });

  const { setIsEditOfferModalOpen, editOffer } = useContext(CommerceContext);
  const offerId = offer.id;


  const editOfferSubmit: SubmitHandler<ICreateProductFormValues> = (
    newOfferFormData
  ) => {
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
          placeholder={offer.quantity}
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
