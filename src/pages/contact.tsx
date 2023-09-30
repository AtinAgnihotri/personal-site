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

  const { mutate, isLoading } = api.email.sendEmail.useMutation({
    onSuccess: () => {
      form.reset();
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  const onSubmit = ({ name, message, email }: z.infer<typeof formSchema>) => {
    if (isLoading) return;
    mutate({
      name,
      message,
      email,
    });
  };

  return (
    // <div className="flex flex-col items-center justify-end md:flex-row md:justify-between">
    <div className="flex h-full w-full flex-col items-center justify-center p-8 text-white md:flex-row">
      <div className="flex w-full flex-col">
        <h1 className="pb-8 text-3xl text-slate-300 md:text-4xl">
          Have a burning query, think I might be the right fit for your team, or
          just wanna say hi? My inbox is always open:
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
            {isLoading ? (
              <LoadingSpinner size={30} />
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </form>
        </Form>
      </div>
      <Separator className="mt-8 block bg-white md:hidden" />
      <div className="w-full  pt-8">
        <h1 className="pb-8 text-3xl text-slate-300 md:px-32 md:text-4xl">
          Or you can find me here:
        </h1>
        <div className="flex justify-between md:px-32">
          {SocialLinks.map((sl) => {
            return (
              <Button asChild key={sl.key}>
                <a href={sl.link} className="h-16 w-16 text-xl">
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
