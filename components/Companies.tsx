import Image from "next/image";

export default function Companies() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-12">

        {/* Quote */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed max-w-3xl mx-auto text-black">
          “We've got custom T-shirts in a range of fits and sizes, so
          everyone can wear your brand or message.”
        </h2>

        {/* Company Logos */}
        <div className="overflow-hidden bg-transparant py-6">
          <div className="marquee gap-10 items-center">

            {/* First Set */}
            <Image src="/Spotify_Logo.png" alt="Spotify" width={180} height={40} />
            <Image src="/Upwork-logo.png" alt="Upwork" width={180} height={40} />
            <Image src="/lattice-logo.png" alt="Lattice" width={180} height={40} />
            <Image src="/Hopin_logo.png" alt="Hopin" width={200} height={40} />
            <Image src="/feedly-logo.png" alt="Feedly" width={180} height={40} />

            {/* Duplicate Set for seamless scroll */}
            <Image src="/Spotify_Logo.png" alt="Spotify" width={180} height={40} />
            <Image src="/Upwork-logo.png" alt="Upwork" width={180} height={40} />
            <Image src="/lattice-logo.png" alt="Lattice" width={180} height={40} />
            <Image src="/Hopin_logo.png" alt="Hopin" width={200} height={40} />
            <Image src="/feedly-logo.png" alt="Feedly" width={180} height={40} />

          </div>
        </div>

      </div>
    </section>
  );
}