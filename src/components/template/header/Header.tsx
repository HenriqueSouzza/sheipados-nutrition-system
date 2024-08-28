import { HTMLAttributes } from 'react';
import * as S from './Header.styles';

interface HeaderProps extends HTMLAttributes<HTMLHeadElement> { }

export const Header = (props: HeaderProps) => <S.Header {...props} />