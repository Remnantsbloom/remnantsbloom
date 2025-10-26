import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  products: router({
    list: publicProcedure.query(async () => {
      const { getAllProducts } = await import("./db");
      return getAllProducts();
    }),
    featured: publicProcedure.query(async () => {
      const { getFeaturedProducts } = await import("./db");
      return getFeaturedProducts();
    }),
    byId: publicProcedure
      .input((val: unknown) => {
        if (typeof val === "object" && val !== null && "id" in val && typeof val.id === "number") {
          return val as { id: number };
        }
        throw new Error("Invalid input");
      })
      .query(async ({ input }) => {
        const { getProductById } = await import("./db");
        return getProductById(input.id);
      }),
    byCategory: publicProcedure
      .input((val: unknown) => {
        if (typeof val === "object" && val !== null && "category" in val && typeof val.category === "string") {
          return val as { category: string };
        }
        throw new Error("Invalid input");
      })
      .query(async ({ input }) => {
        const { getProductsByCategory } = await import("./db");
        return getProductsByCategory(input.category);
      }),
  }),

  cart: router({
    get: publicProcedure.query(async ({ ctx }) => {
      const { getCartItems } = await import("./db");
      const sessionId = (ctx.req as any).sessionID || ctx.req.headers["x-session-id"] as string || "guest";
      return getCartItems(ctx.user?.id, sessionId);
    }),
    add: publicProcedure
      .input((val: unknown) => {
        if (
          typeof val === "object" &&
          val !== null &&
          "productId" in val &&
          typeof val.productId === "number" &&
          "quantity" in val &&
          typeof val.quantity === "number"
        ) {
          return val as { productId: number; quantity: number; configuration?: string };
        }
        throw new Error("Invalid input");
      })
      .mutation(async ({ ctx, input }) => {
        const { addToCart } = await import("./db");
        const sessionId = (ctx.req as any).sessionID || ctx.req.headers["x-session-id"] as string || "guest";
        return addToCart({
          userId: ctx.user?.id,
          sessionId,
          productId: input.productId,
          quantity: input.quantity,
          configuration: input.configuration,
        });
      }),
    updateQuantity: publicProcedure
      .input((val: unknown) => {
        if (
          typeof val === "object" &&
          val !== null &&
          "id" in val &&
          typeof val.id === "number" &&
          "quantity" in val &&
          typeof val.quantity === "number"
        ) {
          return val as { id: number; quantity: number };
        }
        throw new Error("Invalid input");
      })
      .mutation(async ({ input }) => {
        const { updateCartItemQuantity } = await import("./db");
        return updateCartItemQuantity(input.id, input.quantity);
      }),
    remove: publicProcedure
      .input((val: unknown) => {
        if (typeof val === "object" && val !== null && "id" in val && typeof val.id === "number") {
          return val as { id: number };
        }
        throw new Error("Invalid input");
      })
      .mutation(async ({ input }) => {
        const { removeFromCart } = await import("./db");
        return removeFromCart(input.id);
      }),
    clear: publicProcedure.mutation(async ({ ctx }) => {
      const { clearCart } = await import("./db");
      const sessionId = (ctx.req as any).sessionID || ctx.req.headers["x-session-id"] as string || "guest";
      return clearCart(ctx.user?.id, sessionId);
    }),
  }),
});

export type AppRouter = typeof appRouter;
