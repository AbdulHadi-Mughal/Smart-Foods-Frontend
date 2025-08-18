import type { Order } from "../../types/user.type";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Orders = ({ orders }: { orders: Order[] }) => {
  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">Order History</CardTitle>
        <CardDescription>Recent orders and status</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {/* Replace with dynamic list */}
        {orders.length === 0 && (
          <p className="text-sm text-muted-foreground">No orders placed yet.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default Orders;
