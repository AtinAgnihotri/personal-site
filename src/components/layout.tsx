import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex h-full w-full flex-col bg-black px-12 py-8">
      {children}
    </main>
  );
};

export default Layout;
