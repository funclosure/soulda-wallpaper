import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Home: NextPage = () => {
  const [tokenId, setTokenId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    router.push(`/${tokenId}`);
  };

  return (
    <>
      <Head>
        <title>WonderPals Wallpaper Generator</title>
        <meta
          name="description"
          content="Generator your own WonderPals wallpaper!"
        />
      </Head>

      <main className="mx-auto text-center h-[85vh] w-64">
        <Image
          src="https://cdn.shopify.com/s/files/1/0637/4513/0718/files/WonderPals_Shop_Logo_700x.png"
          alt="WonderPals"
          width={350}
          height={164}
        />
        <form onSubmit={handleSubmit} className="py-32">
          <input
            className="block w-64 text-center h-12 border border-gray-400"
            type="number"
            min="1"
            max="10000"
            placeholder="Enter you token id here..."
            onChange={(e) => setTokenId(e.target.value)}
            value={tokenId}
          />
          <button
            className="block w-64 text-center mt-6 bg-black text-white py-2 rounded-full"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Generating..." : "Generate Wallpaper!"}
          </button>
        </form>
      </main>

      <footer className="mx-auto text-center p-12 text-gray-500">
        <p>
          Built by{" "}
          <a
            href="https://twitter.com/shep_eth"
            target="_blank"
            rel="noreferrer"
          >
            shep
          </a>{" "}
          with ❤️
        </p>
      </footer>
    </>
  );
};

export default Home;
