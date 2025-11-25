import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

// Email functionality is currently disabled
// TODO: Replace with alternative email service

export const emailRouter = createTRPCRouter({
  sendEmail: publicProcedure
    .input(
      z.object({
        name: z.string().nonempty().min(2).max(50),
        email: z.string().email(),
        message: z.string().nonempty().max(1000),
      }),
    )
    .mutation(async ({ input }) => {
      // Email functionality is disabled - throw error
      throw new TRPCError({
        code: "NOT_IMPLEMENTED",
        message: "Email functionality is currently disabled. Please use the social links below to contact me.",
      });
    }),
});
