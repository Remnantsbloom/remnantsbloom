import { drizzle } from 'drizzle-orm/mysql2';
import { products } from './drizzle/schema';

async function testDB() {
  const db = drizzle(process.env.DATABASE_URL!);
  const allProducts = await db.select().from(products);
  
  console.log('Total products in database:', allProducts.length);
  console.log('Featured products:', allProducts.filter(p => p.featured).length);
  console.log('Product categories:', [...new Set(allProducts.map(p => p.category))].join(', '));
  console.log('\nSample products:');
  allProducts.slice(0, 5).forEach(p => {
    console.log('  -', p.name, '- $' + (p.price / 100).toFixed(2));
  });
}

testDB().catch(console.error);
