import Header from "./components/(header)/Header";
import { Button } from "@/components/ui/button";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-12">
        <div className="h-1/3  px-6 pt-4 text-center dark:bg-gray-900">
          <h1 className="text-teal-600 font-bold text-4xl sm:text-5xl lg:text-6xl  text-center dark:text-white">
            Job opportunity
          </h1>
          <h3 className="font-semibold pt-4 text-3xl">
            for all Domestic and Diaspora society
          </h3>
          <p className="pt-3 text-center">
            Branding culture and Empowering women! The opportunity of digital
            engagement and earning based on performance for all! TUGZA
            Innovations and Inventions Company stood for civilized world with
            different potential stakeholders.
          </p>
          <div className="pt-5">
            <Link
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow mr-4"
              href={"signup"}
            >
              Sign Up
            </Link>

            <Button className="bg-gray-100 text-teal-600 hover:bg-gray-200">
              Vote
            </Button>
          </div>
        </div>
      </main>

      <section>
        <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center dark:bg-gray-900">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white  bg-gradient-to-r from-red-600 bg-red-700 to-indigo-400 inline-block text-transparent bg-clip-text">
                Job opportunity for all Domestic and Diaspora society
              </h2>

              <p className="hidden text-gray-500 md:mt-4 md:block dark:text-gray-400">
                Branding culture and Empowering women! The opportunity of
                digital engagement and earning based on performance for all!
                TUGZA Innovations and Inventions Company stood for civilized
                world with different potential stakeholders.
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="#"
                  className="inline-block rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700  focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Come and Visit Us
                </a>
              </div>
            </div>
          </div>

        <Image alt="Ashenda girl" src="https://ashendagirls.net/exp13.jpg" className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"></Image>

        </section>
      </section>
      <Footer />
    </>
  );
}
