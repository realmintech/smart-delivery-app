import Head from "next/head";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Grocery App</title>
      </Head>
      <ProductCard />
    </>
  );
}