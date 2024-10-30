import *  as S from './CashPage.styles';
import { ProductIdentifier, ProductList } from './components';
import { useCashPage } from './useCashPage';

export const CashPage = () => {
  const { productList, productIdentifier } = useCashPage();

  return (
    <S.Container>
      <S.FlowFreeCash>
        <ProductIdentifier {...productIdentifier} />
        <ProductList {...productList} />
      </S.FlowFreeCash>
    </S.Container>
  )
}