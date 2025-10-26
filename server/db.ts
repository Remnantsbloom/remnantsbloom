import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Product queries
export async function getAllProducts() {
  const db = await getDb();
  if (!db) return [];
  const { products } = await import("../drizzle/schema");
  return db.select().from(products);
}

export async function getFeaturedProducts() {
  const db = await getDb();
  if (!db) return [];
  const { products } = await import("../drizzle/schema");
  const { eq } = await import("drizzle-orm");
  return db.select().from(products).where(eq(products.featured, 1));
}

export async function getProductById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const { products } = await import("../drizzle/schema");
  const result = await db.select().from(products).where(eq(products.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getProductsByCategory(category: string) {
  const db = await getDb();
  if (!db) return [];
  const { products } = await import("../drizzle/schema");
  return db.select().from(products).where(eq(products.category, category));
}

// Cart queries
export async function getCartItems(userId?: number, sessionId?: string) {
  const db = await getDb();
  if (!db) return [];
  const { cartItems, products } = await import("../drizzle/schema");
  const { and, or } = await import("drizzle-orm");
  
  const conditions = [];
  if (userId) conditions.push(eq(cartItems.userId, userId));
  if (sessionId) conditions.push(eq(cartItems.sessionId, sessionId));
  
  if (conditions.length === 0) return [];
  
  return db
    .select({
      id: cartItems.id,
      productId: cartItems.productId,
      quantity: cartItems.quantity,
      configuration: cartItems.configuration,
      product: products,
    })
    .from(cartItems)
    .leftJoin(products, eq(cartItems.productId, products.id))
    .where(or(...conditions));
}

export async function addToCart(data: {
  userId?: number;
  sessionId?: string;
  productId: number;
  quantity: number;
  configuration?: string;
}) {
  const db = await getDb();
  if (!db) return null;
  const { cartItems } = await import("../drizzle/schema");
  
  const result = await db.insert(cartItems).values({
    userId: data.userId,
    sessionId: data.sessionId,
    productId: data.productId,
    quantity: data.quantity,
    configuration: data.configuration,
  });
  
  return result;
}

export async function updateCartItemQuantity(id: number, quantity: number) {
  const db = await getDb();
  if (!db) return null;
  const { cartItems } = await import("../drizzle/schema");
  
  return db.update(cartItems).set({ quantity }).where(eq(cartItems.id, id));
}

export async function removeFromCart(id: number) {
  const db = await getDb();
  if (!db) return null;
  const { cartItems } = await import("../drizzle/schema");
  
  return db.delete(cartItems).where(eq(cartItems.id, id));
}

export async function clearCart(userId?: number, sessionId?: string) {
  const db = await getDb();
  if (!db) return null;
  const { cartItems } = await import("../drizzle/schema");
  const { or } = await import("drizzle-orm");
  
  const conditions = [];
  if (userId) conditions.push(eq(cartItems.userId, userId));
  if (sessionId) conditions.push(eq(cartItems.sessionId, sessionId));
  
  if (conditions.length === 0) return null;
  
  return db.delete(cartItems).where(or(...conditions));
}
