import { SubmitHandler, useForm } from 'react-hook-form';
import { ICreateProductFormValues } from '../CreateProductForm';
import { CommerceContext, IProduct } from '../../../providers/CommerceProvider';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { editOfferSchema } from './editOfferSchema';
import { Input } from '../Input';
import { StyledEditOfferModal } from './style';
import { StyledInputContainerLight } from '../../../styles/form';

export const EditOfferModal = ({
  offer,
  setIsEditOfferModalOpen,
}: {
  offer: IProduct;
  setIsEditOfferModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
        newOfferFormData[key as keyof ICreateProductFormValues] = offer[
          key as keyof IProduct
        ] as string;
      }
    }
    editOffer(offerId, newOfferFormData);
    setIsEditOfferModalOpen(false);
  };

  return (
    <StyledEditOfferModal role='dialog'>
     
      <div>
        <form onSubmit={handleSubmit(editOfferSubmit)}>
          <h3>Edite sua oferta</h3>
          {/* <StyledInputContainerLight> */}
            <Input
              type='text'
              label='Descrição'
              placeholder={offer.title}
              id='title'
              {...register('title')}
              error={errors.title}
            />
          {/* </StyledInputContainerLight> */}
          {/* <StyledInputContainerLight> */}
            <Input
              type='number'
              label='Quantidade'
              placeholder={offer.quantity.toString()}
              id='quantity'
              {...register('quantity')}
              error={errors.quantity}
            />
          {/* </StyledInputContainerLight> */}
          {/* <StyledInputContainerLight> */}
            <Input
              type='number'
              label='Desconto'
              placeholder={`${offer.discount}%`}
              id='discount'
              {...register('discount')}
              error={errors.discount}
            />
          {/* </StyledInputContainerLight> */}
          <button type='submit'>Salvar oferta</button>
        </form>
       <footer>
          <button type='button' onClick={() => setIsEditOfferModalOpen(false)}>
            Voltar para Loja
          </button>
          </footer>
      </div>
   
    </StyledEditOfferModal>
  );
};
