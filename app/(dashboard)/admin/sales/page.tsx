import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { fetchAdminOrders } from '@/utils/api'
import { formatCurrency, formatDate } from '@/utils/format'

async function SalesPage() {
  // GET /orders/all (admin only)
  const orders = await fetchAdminOrders();

  return (
    <div className='w-2xl'>
    <Table >
      <TableCaption>Total Orders : {orders.length}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Products</TableHead>
          <TableHead>Order Total</TableHead>
          <TableHead>Tax</TableHead>
          <TableHead>Shipping</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.email}</TableCell>
            <TableCell>{order.products}</TableCell>
            <TableCell>{formatCurrency(order.orderTotal)}</TableCell>
            <TableCell>{formatCurrency(order.tax)}</TableCell>
            <TableCell>{formatCurrency(order.shipping)}</TableCell>
            <TableCell>{formatDate(order.createdAt)}</TableCell>
            <TableCell>{order.isPaid ? 'Paid' : 'Unpaid'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

    </div>

  )
}

export default SalesPage
