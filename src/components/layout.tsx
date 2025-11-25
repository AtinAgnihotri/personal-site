import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex w-full flex-col overflow-auto overscroll-contain bg-black px-4 py-8 md:px-12">
      {children}
    </main>
  );
};

export default Layout;
