import Companies from "@/components/Companies";
import Image from "next/image";
import Link from "next/link";
import Features from "../features/page";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-gray-50 to-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-125 h-125 bg-indigo-200/40 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col space-y-8">

          {/* Badge */}
          <span className="w-fit px-4 py-1.5 text-xs font-bold tracking-widest text-indigo-700 uppercase bg-indigo-100 rounded-full">
            Create Your Own
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight">
            Design your{" "}
            <span className="text-indigo-600">unique style</span>{" "}
            with TeeSpace
          </h1>

          {/* Subtext */}
          <p className="max-w-xl text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            A full-service printing experience. Create custom shirts for your
            personal wardrobe or scale your online business with ease.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-indigo-600 rounded-xl shadow-xl shadow-indigo-200 transition-all duration-300 hover:bg-indigo-700 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Shop Now
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <button className="flex items-center gap-3 font-bold text-gray-900 hover:text-indigo-600 transition-colors group">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md group-hover:shadow-lg transition-all text-indigo-600 text-sm">
                ▶
              </span>
              How it works
            </button>
          </div>

          {/* Stats */}
          <div className="pt-10 border-t border-gray-200 flex items-center gap-10 sm:gap-16">
            <div>
              <p className="text-4xl font-black text-gray-900">4k+</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Collections
              </p>
            </div>

            <div className="h-12 w-px bg-gray-200" />

            <div>
              <p className="text-4xl font-black text-gray-900">9k+</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden md:flex justify-center group">

          {/* Glow */}
          <div className="absolute -inset-8 bg-indigo-500/20 rounded-[3rem] blur-3xl opacity-60 transition-all duration-500 group-hover:scale-105" />

          {/* Glass Card */}
          <div className="relative bg-white/40 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/40 shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-[1.02]">

            <Image
              src="/illus.svg"
              alt="Custom T-Shirt Design Preview"
              width={600}
              height={700}
              priority
              className="w-full max-w-lg object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
              ✓
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                Premium Quality
              </p>
              <p className="text-sm font-black text-gray-900">
                100% Cotton
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Companies Section */}
      <div className="mt-10 lg:mt-16">
        <Companies />
        <Features />
      </div>
    </section>
  );
}