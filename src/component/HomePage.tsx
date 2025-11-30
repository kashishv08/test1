import Image from "next/image";

function HomePage() {
  return (
    <>
      <div className="w-full sm:max-w-lg mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
        <div className="flex items-center p-4 space-x-4">
          <div className="flex flex-col -space-y-2">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                <Image
                  src="/image1.png"
                  alt="File icon"
                  width={38}
                  height={38}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                <Image
                  src="/image2.png"
                  alt="Next.js icon"
                  width={38}
                  height={38}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                <Image
                  src="/image1.png"
                  alt="File icon"
                  width={38}
                  height={38}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                <Image
                  src="/image2.png"
                  alt="Next.js icon"
                  width={38}
                  height={38}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">Super 30</h2>
            <p className="text-sm text-gray-500">Moradabad, Uttar Pradesh</p>
          </div>

          <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full border border-red-300">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
              <Image
                src="/file.svg"
                alt="File icon"
                width={38}
                height={38}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
