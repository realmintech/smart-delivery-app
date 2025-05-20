import Head from "next/head";
import AuthForm from "./auth/page";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Grocery App</title>
      </Head>
      <ProductCard />
      {/* <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <AuthForm />
      </main> */}
    </>
  );
}
