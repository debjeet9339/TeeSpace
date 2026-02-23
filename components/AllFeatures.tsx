'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FEATURES = [
    {
        id: 1,
        title: "Design Your Shirt",
        description:
            "Upload your artwork or create something new using our intuitive design tools. Customize colors, graphics, and text easily.",
        image: "/design.svg",
        icon: "🎨",
        accent: "#6366F1",
    },
    {
        id: 2,
        title: "Customize & Preview",
        description:
            "Adjust placement, sizing, and fabric options. Get a live preview of your shirt before finalizing your order.",
        image: "/preview.svg",
        icon: "👁️",
        accent: "#8B5CF6",
    },
    {
        id: 3,
        title: "Print & Deliver",
        description:
            "We handle premium printing and fast shipping so your custom apparel arrives perfectly crafted and on time.",
        image: "/delivery.svg",
        icon: "🚚",
        accent: "#EC4899",
    },
];

export default function AllFeatures() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section
            className={`pb-0 py-24 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
            aria-labelledby="features-heading"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
                {/* Animated Background Shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute -bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
                </div>

                {/* Section Header */}
                <header className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-indigo-600 rounded-full animate-pulse"></div>
                        <h2
                            id="features-heading"
                            className="text-4xl md:text-5xl font-bold text-gray-900"
                        >
                            Create Your Custom Shirt
                        </h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Bring your unique style to life with our intuitive design platform.
                        Create, customize, and wear your imagination.
                    </p>
                </header>

                {/* Features Grid */}
                <div className="space-y-28">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="group relative p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                {/* Image Container */}
                                <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            width={400}
                                            height={300}
                                            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            priority={index === 0}
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-indigo-500 to-transparent opacity-90">
                                            <div className="absolute bottom-6 left-6 text-white">
                                                <span className="text-sm font-medium">New</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="shrink-0">
                                            <span
                                                className="text-3xl"
                                                style={{ backgroundColor: feature.accent + '20', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                                            >
                                                {feature.icon}
                                            </span>
                                        </div>
                                        <span className="text-indigo-600 font-bold text-sm tracking-wide">
                                            Step {feature.id} / {FEATURES.length}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {feature.description}
                                    </p>

                                    <Link
                                        href="/shop"
                                        className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                    >
                                        Start Free Trial →
                                    </Link>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none">
                                <div className="absolute top-6 right-6 cursor-pointer">
                                    <span className="text-3xl text-gray-400 group-hover:text-indigo-600 transition-colors cursor-pointer">
                                        ✨ Try Now
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-24 bg-linear-to-r from-indigo-500 to-purple-600">
                    <div className="max-w-4xl mx-auto px-6 py-16">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white">
                                    Ready to Create Something Amazing?
                                </h3>
                            </div>
                            <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                                Join thousands of creators who've transformed their ideas into reality
                            </p>
                            <Link
                                href="/shop"
                                className="inline-block px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 transform hover:rotate-2 hover:scale-105"
                            >
                                Start Designing Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="mt-20 bg-gray-50 rounded-2xl p-8">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Why Choose Us?
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: "🔒", text: "Secure & Safe" },
                                { icon: "⚡", text: "Fast Processing" },
                                { icon: "⭐", text: "5-Star Quality" }
                            ].map((benefit, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl mb-3">
                                        {benefit.icon}
                                    </div>
                                    <p className="text-gray-600 font-medium">{benefit.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="relative bg-white border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-2 gap-40 items-center">
                        {/* Image */}
                        <div className="hidden lg:block lg:space-y-4">
                            <div className="bg-gray-100 rounded-xl aspect-square flex items-center justify-center">
                                <Image
                                    src="/4.svg"
                                    alt="Designer working on custom shirt"
                                    width={900}
                                    height={300}
                                    className="rounded-xl shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Text */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                Free and Easy Creative Expression
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                Transform your imagination into wearable art with our intuitive platform.
                                No design skills needed—just your creativity and our tools.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                                    Start Free Trial
                                </button>
                                <Link
                                    href="/learn-more"
                                    className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
                                >
                                    Watch Tutorial
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-10">

                        {/* LEFT CARD */}
                        <div className="relative bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden group">

                            {/* Background Glow */}
                            <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>

                            <div className="relative z-10 space-y-6">
                                <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                                    Thousands of free templates
                                </h3>

                                <p className="text-gray-600 text-lg">
                                    Free and easy way to bring your ideas to life with ready-made
                                    premium templates.
                                </p>

                                <button className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300">
                                    Explore More →
                                </button>
                            </div>
                        </div>

                        {/* RIGHT CARD */}
                        <div className="relative bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden group">

                            {/* Background Glow */}
                            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

                            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">

                                {/* Text */}
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                                        Create your unique style
                                    </h3>

                                    <p className="text-gray-600 text-lg">
                                        Free and easy way to make your creative vision a reality.
                                    </p>

                                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-md hover:bg-indigo-700 hover:scale-105 transition-all duration-300">
                                        Shop Now →
                                    </button>
                                </div>

                                {/* Image */}
                                <div className="hidden md:flex justify-center">
                                    <Image
                                        src="/4.svg"
                                        alt="Custom T-shirt"
                                        width={350}
                                        height={350}
                                        className="rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className="relative bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center relative">

                    {/* Floating Images */}
                    <Image src="/delivery.svg" alt="" width={160} height={160}
                        className="hidden md:block absolute top-10 left-10 rounded-2xl shadow-xl" />

                    <Image src="/design.svg" alt="" width={140} height={140}
                        className="hidden md:block absolute top-16 right-16 rounded-2xl shadow-xl" />

                    <Image src="/4.svg" alt="" width={150} height={150}
                        className="hidden md:block absolute bottom-10 left-20 rounded-2xl shadow-xl" />

                    <Image src="/illus.svg" alt="" width={140} height={140}
                        className="hidden md:block absolute bottom-16 right-20 rounded-2xl shadow-xl" />

                    {/* Main Content */}
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Enjoy up your vacations <br /> in the best T-shirts
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
                        T-shirts that keep you moving.
                    </p>

                    <div className="mt-8 flex justify-center gap-4">
                        <Link
                            href="/shop"
                            className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:bg-green-700 hover:scale-105 transition-all"
                        >
                            Shop Now →
                        </Link>

                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl font-semibold hover:bg-gray-100 transition-all"
                        >
                            Contact Us →
                        </Link>
                    </div>
                </div>
            </section>

        </section>
    );
}