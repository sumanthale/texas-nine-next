import Home from "@/components/Home/Home";
import React from "react";
// import Header from "@/layout/MainLayout/Header";

// Define the Home component as a functional component
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import axios from "axios";

// Export the Home component as the default export of this module
export async function generateMetadata() {
  // const docRef = doc(db, "content", "ID");

  // const docSnap = await getDoc(docRef);
  // console.log(docSnap.data());
  const response = await fetch("https://random-word-api.herokuapp.com/word", {
    cache: "no-cache",
  });
  const data = await response.json();
  console.log(data);
  // const { metaTitle: title, metaDescription: description } = docSnap.data();
  return { title: data[0] };
}
export default function StartPage() {
  return (
    <>
      <Home />
    </>
  );
}
