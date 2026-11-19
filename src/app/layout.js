
import { Poppins, Playfair_Display } from "next/font/google";
import ThemeRegistry from "@/theme/ThemeRegistry";

import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata = {
    title: "Fathima Memorial Training College | Pallimukku, Kollam",
    description:
        "Official website of Fathima Memorial Training College, Pallimukku, Kollam.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${playfair.variable}`}>
                <ThemeRegistry>
                    {children}
                </ThemeRegistry>
            </body>
        </html>
    );
}
