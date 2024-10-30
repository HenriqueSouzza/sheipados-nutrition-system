import { ReactNode } from 'react';
import * as S from './Card.styles';

interface CardProps {
  title: string
  children?: ReactNode
}

export const Card = ({ title = 'title', children }: CardProps) => {
  return (
    <S.Card>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardBody>{children}</S.CardBody>
    </S.Card>
  )
}