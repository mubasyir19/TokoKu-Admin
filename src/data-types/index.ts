export interface PayloadAccount {
  id: string;
  name: string;
  username: string;
  role: UserRole;
  iat: number;
}

export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: UserRole;
}

export enum UserRole {
  SuperAdmin = 'SuperAdmin',
  Admin = 'Admin',
  Customer = 'Customer',
}

export interface LoginInput {
  username: string;
  password: string;
}

export interface CategoryProduct {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number; // harusnya decimal
  stock: number;
  unit: string;
  photo: string;
}

export interface Order {
  id: string;
  userId: string;
  address: string;
  phoneNumber: string;
  methodPayment: PaymentMethod;
  dateOrder: Date;
  status: OrderStatus;
  price: number;
  OrderItem: OrderItem;
  user: User;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  subTotal: number;
  product: Product[];
}

enum PaymentMethod {
  Cash = 'Cash',
  Transfer = 'Transfer',
}

enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
  ON_HOLD = 'ON_HOLD',
  RETURNED = 'RETURNED',
  COMPLETED = 'COMPLETED',
}
