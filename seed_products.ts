import { drizzle } from "drizzle-orm/mysql2";
import { products } from "./drizzle/schema";
import * as fs from "fs";

const productsData = JSON.parse(
  fs.readFileSync("/home/ubuntu/remnantsbloom/products_with_urls.json", "utf-8")
);

async function seed() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL not set");
    process.exit(1);
  }

  const db = drizzle(process.env.DATABASE_URL);

  console.log("Seeding products...");

  for (const product of productsData) {
    await db.insert(products).values({
      name: product.name,
      type: product.type,
      category: product.category,
      description: product.description,
      ingredients: product.ingredients,
      size: product.size,
      price: Math.round(product.price * 100), // Convert to cents
      imageUrl: product.image_url,
      scentProfile: product.scent_profile,
      featured: product.featured ? 1 : 0,
      configurable: product.configurable ? 1 : 0,
    });
  }

  console.log(`Seeded ${productsData.length} products`);
  process.exit(0);
}

seed();
