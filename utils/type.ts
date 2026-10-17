// Types matching the JSON returned by the Express backend (dates arrive as ISO strings).

export type actionFunction = (prevState: any,formData: FormData) => Promise<{ message: string }>;

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type User = {
  id: string;
  email: string;
  name: string;
  imageUrl: string | null;
  role: 'USER' | 'ADMIN';
  createdAt: string;
};

export type Category = {
  id: string;
  title: string;
  productId: string;
};

export type Gender = 'MEN' | 'WOMEN' | 'KIDS';

export type Product = {
  id: string;
  name: string;
  description: string;
  featured: boolean;
  image: string;
  price: number;
  gender: Gender;
  sizes: string[];
  colors: string[];
  userId: string;
  createdAt: string;
  updatedAt: string;
  categories?: Category[];
};

export type CartItem = {
  id: string;
  productId: string;
  cartId: string;
  amount: number;
  size: string | null;
  color: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CartItemWithProduct = CartItem & { product: Product };

export type Cart = {
  id: string;
  userId: string;
  cartItems: CartItemWithProduct[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  taxRate: number;
  orderTotal: number;
  createdAt: string;
  updatedAt: string;
};

export type Favorite = {
  id: string;
  userId: string;
  productId: string;
  createdAt: string;
};

export type FavoriteWithProduct = Favorite & { product: Product };

export type Order = {
  id: string;
  userId: string;
  email: string;
  products: number;
  orderTotal: number;
  tax: number;
  shipping: number;
  isPaid: boolean;
  createdAt: string;
};

export type Review = {
  id: string;
  rating: number;
  comment: string;
  userId: string;
  productId: string;
  createdAt: string;
  user?: { id: string; name: string; imageUrl: string | null };
  product?: { id: string; name: string };
};
