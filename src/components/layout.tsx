import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex w-full flex-col overflow-auto overscroll-contain bg-black px-12 py-8">
      {children}
    </main>
  );
};

export default Layout;
