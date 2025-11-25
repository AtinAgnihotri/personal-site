import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ComingSoon from "~/components/coming-soon";
import { api } from "~/utils/api";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { SocialLinks } from "~/components/nav-bar/constants";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import { LoadingSpinner } from "~/components/loading-spinner";
import { Separator } from "~/components/ui/separator";

const formSchema = z.object({
  name: z.string().nonempty().min(2).max(50),
  email: z.string().email(),
  message: z.string().nonempty().max(1000),
});

const Contact = () => {
  //   return <ComingSoon />;

  //   const form = useEmailForm();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  //   function onSubmit(values: z.infer<typeof formSchema>) {
  //     // Do something with the form values.
  //     // ✅ This will be type-safe and validated.
  //     console.log(values);
  //   }

  const { mutate, isPending } = api.email.sendEmail.useMutation({
    onSuccess: () => {
      form.reset();
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  const onSubmit = ({ name, message, email }: z.infer<typeof formSchema>) => {
    if (isPending) return;
    mutate({
      name,
      message,
      email,
    });
  };

  const isFormDisabled = true; // Email functionality is disabled

  return (
    // <div className="flex flex-col items-center justify-end md:flex-row md:justify-between">
    <div className="flex min-h-full w-full max-w-full flex-col items-center justify-start px-4 py-8 pt-24 text-white md:flex-row md:justify-center md:px-8 md:pt-36">
      <div className=" flex w-full max-w-full flex-col md:mt-0">
        <h1 className="break-words pb-8 text-2xl text-slate-300 md:text-3xl lg:text-4xl">
          Have a burning query, think I might be the right fit for your team, or
          just wanna say hi? My inbox is always open:
        </h1>
        {/* Email form disabled notice */}
        {isFormDisabled && (
          <div className="mb-6 rounded-lg border border-yellow-600 bg-yellow-900/20 p-4 text-yellow-200">
            <p className="text-sm md:text-base">
              ⚠️ The contact form is currently disabled. Please use the social links below to reach out!
            </p>
          </div>
        )}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              disabled={isPending || isFormDisabled}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="bg-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              disabled={isPending || isFormDisabled}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email id"
                      {...field}
                      className="bg-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              disabled={isPending || isFormDisabled}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      {...field}
                      className="bg-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isPending ? (
              <LoadingSpinner size={30} />
            ) : (
              <Button type="submit" disabled={isFormDisabled}>Submit</Button>
            )}
          </form>
        </Form>
      </div>
      <Separator className="mt-8 block bg-white md:hidden" />
      <div className="w-full pb-8 pt-8">
        <h1 className="break-words pb-8 text-2xl text-slate-300 md:px-16 md:text-3xl lg:px-32 lg:text-4xl">
          Or you can find me here:
        </h1>
        <div className="flex flex-wrap justify-center gap-3 md:grid md:grid-cols-3 md:gap-4 md:px-16 lg:px-32 xl:grid-cols-6">
          {SocialLinks.map((sl) => {
            return (
              <Button asChild key={sl.key}>
                <a
                  href={sl.link}
                  className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 lg:text-xl xl:h-14 xl:w-14"
                >
                  {sl.child}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
