import { Card } from '../Card';
import * as S from './ProductList.styles';
import { Table, TableBody, TableHead } from '@/components';

interface ProductListProps {
  items: Array<Record<string, string>>
  columnsHeader: Record<string, string>
  onSelectItem: (item: Record<string, string>) => void
}

export const ProductList = ({ items, columnsHeader, onSelectItem }: ProductListProps) => (
  <S.ProductList>
    <Card title="Listagem de produtos">
      <S.ContainerCardBody>
        <Table>
          <TableHead columns={columnsHeader} />
          <TableBody
            onRow={onSelectItem}
            rows={items}
            columns={columnsHeader}
          />
        </Table>
      </S.ContainerCardBody>
    </Card>
  </S.ProductList>
)