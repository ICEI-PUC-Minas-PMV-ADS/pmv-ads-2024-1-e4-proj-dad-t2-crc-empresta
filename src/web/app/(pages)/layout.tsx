import Header from "@/app/ui/comp/header";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Header/>
        <div className="pb-20">
            {children}
        </div>
        </>
    );
}
