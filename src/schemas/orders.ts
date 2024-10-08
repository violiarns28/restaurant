import {
  pgTable,
  serial,
  integer,
  timestamp,
  varchar,
  numeric,
  pgEnum,
} from 'drizzle-orm/pg-core';
import { restaurants } from './restaurants';
import { menus } from './menus';

export const orderStatus = pgEnum('order_status', [
  'pending',
  'process',
  'success',
  'cancel',
]);

export const paymentMethod = pgEnum('payment_method', ['cash', 'midtrans']);

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  restaurantId: integer('restaurant_id')
    .notNull()
    .references(() => restaurants.id),
  customerName: varchar('customer_name', { length: 255 }).notNull(),
  status: orderStatus('status').notNull().default('pending'),
  method: paymentMethod('method').notNull(),
  totalPrice: numeric('total_price').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const itemsInOrder = pgTable('items_in_order', {
  id: serial('id').primaryKey(),
  orderId: integer('order_id')
    .notNull()
    .references(() => orders.id),
  menuId: integer('menu_id')
    .notNull()
    .references(() => menus.id),
  amount: numeric('amount').notNull(),
});
