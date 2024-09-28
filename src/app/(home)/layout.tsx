import BgHome from "@/components/main/bg_home";
import NavBar from "@/components/main/navbar";
import SearchBox from "@/components/main/search";



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en">
        <body>
          <NavBar />
          <BgHome />
          {children}
        </body>
      </html>
  );
}
