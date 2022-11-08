import React from "react";

import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const NFTDropPage = () => {
  // Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* left  */}
      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              src="https://links.papareact.com/8sg"
              alt=""
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
            />
          </div>

          <div className="space-y-2 text-center p-5">
            <h1 className="text-4xl font-bold text-white">Piotr's World</h1>
            <p className="text-lg text-gray-300">
              Unleash your potential, no time to waste.
            </p>
          </div>
        </div>
      </div>

      {/* right  */}
      <div className="Flex flex-1 flex-col p-12 lg:col-span-6">
        {/* header */}

        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            Piotr's{" "}
            <span className="font-extrabold underline decoration-pink-600/50">
              World NFT{"  "}
            </span>
            Marketplace
          </h1>

          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? "Sign Out" : "Sign In"}
          </button>
        </header>

        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-rose-400 font-bold">
            You are logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}

        {/* content */}

        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt=""
          />

          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            Piotr's coding club
          </h1>

          <p className="text-green-500 pt-2 text-xl font-bold">
            13 / 21 NFTs claimed
          </p>
        </div>

        {/* mint button */}
        <button className="h-16 w-full bg-red-600 text-white rounded-full mt-10 font-bold">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
};

export default NFTDropPage;
