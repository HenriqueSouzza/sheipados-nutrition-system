import * as S from './DashboardPage.styles';

interface PerformanceCardProps {
  title: string
  info: string
  value: string
}

const PerformanceCard = ({ title, info, value }: PerformanceCardProps) => (
  <S.Card>
    <S.CardTitle>{title}</S.CardTitle>
    <S.CardValue>{value}</S.CardValue>
    <S.CardInfo>{info}</S.CardInfo>
  </S.Card>
)

export const DashboardPage = () => {
  return (
    <S.Container>
      <S.Performance>
        <PerformanceCard title="faturamento" value="R$1000,00" info="vendas" />
        <PerformanceCard title="faturamento" value="120K" info="Creatina vendidas" />
        <PerformanceCard title="faturamento" value="10K" info="Creatina vendidas" />
      </S.Performance>
    </S.Container>
  )
};
