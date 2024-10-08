import {
  pgTable,
  serial,
  varchar,
  integer,
  numeric,
  timestamp,
  boolean,
  text,
} from 'drizzle-orm/pg-core';
import { restaurants } from './restaurants';

export const menus = pgTable('menus', {
  id: serial('id').primaryKey(),
  restaurantId: integer('restaurant_id')
    .notNull()
    .references(() => restaurants.id),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  price: numeric('price').notNull(),
  isAvailable: boolean('is_available').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
