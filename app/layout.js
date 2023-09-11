import "./globals.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// Import CSS styles
import NavBar from "@/layout/MainLayout/NavBar";
import BottomFoot from "@/components/Reusable/BottomFoot";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://db.onlinewebfonts.com/c/69dbc1186412d7831b88d8a78a360360?family=DIN+Condensed+Web"
          rel="stylesheet"
          crossOrigin="*"
        />
      </head>
      <body>
        <NavBar />
        {children}

        <BottomFoot />
        <div className="chrono-bookingbutton" id="t-sheet-widget"></div>
        <script src="/external-scripts.js" async defer />
      </body>
    </html>
  );
}
export async function generateMetadata() {
  const docRef = doc(db, "content", "ID");

  const docSnap = await getDoc(docRef);
  const {
    metaTitle: title,
    metaDescription: description,
    metaIcon: favicon,
  } = docSnap.data();
  return { title, description, favicon };
}
