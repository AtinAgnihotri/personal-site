import { z } from "zod";
import { Resend } from "resend";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { EmailTemplate } from "~/components/email-template";
import { TRPCError } from "@trpc/server";

const resend = new Resend(process.env.RESEND_KEY);

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
      try {
        const { name, email, message } = input;
        const data = await resend.emails.send({
          from: `${name} <contact@atinagnihotri.com>`,
          to: ["atinagnihotri@gmail.com"],
          subject: `[Site]: Emai from ${input.name}`,
          //   react: EmailTemplate({ firstName: "John" }),
          html: `
            <html>
                <body>
                    <h1>New Email</h1>
                    <h2>From: ${name}</h2>
                    <h3>Email: ${email}</h3>
                    <p>${message}</p>
                </body>
            </html>
          `,
        });
        return data;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: String(error),
        });
      }
    }),
});
