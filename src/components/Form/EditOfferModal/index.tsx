import { SubmitHandler, useForm } from 'react-hook-form';
import { ICreateProductFormValues } from '../CreateProductForm';
import { CommerceContext, IProduct } from '../../../providers/CommerceProvider';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { editOfferSchema } from './editOfferSchema';
import { Input } from '../Input';
import { StyledEditOfferModal } from './style';
import cartIcon from '../../../assets/icons/cart.svg';
import heartIcon from '../../../assets/icons/coração.svg';
import closeIcon from '../../../assets/icons/close.svg';
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
      <form onSubmit={handleSubmit(editOfferSubmit)}>
        <nav>
          <img src={cartIcon} alt='cart-icon' />
          <img src={heartIcon} alt='heart-icon' />
          <button onClick={() => setIsEditOfferModalOpen(false)}>
            <img src={closeIcon} alt='close-icon' />
          </button>
        </nav>
        <main>
          <h3>Edite sua oferta</h3>

          <StyledInputContainerLight>
            <Input
              type='text'
              label='Preferências'
              placeholder={offer.title}
              id='title'
              {...register('title')}
              error={errors.title}
            />
          </StyledInputContainerLight>
          <StyledInputContainerLight>
            <Input
              type='number'
              label='Quantidade'
              placeholder={offer.quantity.toString()}
              id='quantity'
              {...register('quantity')}
              error={errors.quantity}
            />
          </StyledInputContainerLight>
          <StyledInputContainerLight>
            <Input
              type='number'
              label='Desconto'
              placeholder={`${offer.discount}%`}
              id='discount'
              {...register('discount')}
              error={errors.discount}
            />
          </StyledInputContainerLight>
        </main>
        <button type='submit'>Salvar oferta</button>
        <button type='button' onClick={() => setIsEditOfferModalOpen(false)}>
          Voltar para Loja
        </button>
      </form>
    </StyledEditOfferModal>
  );
};
