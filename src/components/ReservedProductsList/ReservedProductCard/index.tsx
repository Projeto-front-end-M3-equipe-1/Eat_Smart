import { StyledReserveCard } from './style';
import bag from '../../../assets/icons/bag.svg';
import check from '../../../assets/icons/check.svg';

export const ReservedProtectedCard = () => {
  return (
    <StyledReserveCard>
      <img src={bag} alt='bag-icon'></img>
      <div>
        <div>
          <p>Sacola Surpresa |</p>
          <small> 1</small>
        </div>
        <img src={check} alt='check-icon'></img>
      </div>
      <div>
        <p>João</p>
        <small>R$ 25,59</small>
      </div>
    </StyledReserveCard>
  );
};
