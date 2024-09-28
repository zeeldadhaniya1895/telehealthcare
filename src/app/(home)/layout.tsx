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
          {children}
        </body>
      </html>
  );
}
