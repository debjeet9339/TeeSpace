'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  icon: string;
};

const NAVIGATION_ITEMS: NavItem[] = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/teespace', label: 'TeeSpace', icon: '👕' },
  { href: '/shop', label: 'Shop', icon: '🛍️' },
  { href: '/blog', label: 'Blog', icon: '✍️' },
  { href: '/pages', label: 'Pages', icon: '📄' }
];

export default function LandingNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const NavLink = ({
    item,
    mobile = false,
    onClick
  }: {
    item: NavItem;
    mobile?: boolean;
    onClick?: () => void;
  }) => (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={isActive(item.href) ? "page" : undefined}
      className={`
        flex items-center gap-2
        ${mobile ? "p-3 rounded-xl font-medium" : "px-4 py-2 rounded-lg text-sm font-semibold"}
        transition-all duration-200
        ${isActive(item.href)
          ? "bg-indigo-50 text-indigo-600"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}
      `}
    >
      <span>{item.icon}</span>
      {item.label}
      {!mobile && item.label === "Shop" && (
        <span className="ml-1 text-[10px] bg-indigo-600 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider">
          New
        </span>
      )}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group pr-4">
            <Image
              src="/logo.png"
              alt="TeeSpace Logo"
              width={40}
              height={40}
              className="transition-transform group-hover:scale-110"
              priority
            />
            <span className="text-2xl font-black tracking-tight text-gray-900">
              TeeSpace
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION_ITEMS.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>

          {/* Search (Desktop) */}
          <div className="hidden md:block flex-1 max-w-xs mx-8">
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-100 rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">

            <div className="hidden xl:block text-right border-r pr-4 border-gray-200">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                Hotline
              </p>
              <p className="text-sm font-bold text-gray-900">
                1800 3400 5555
              </p>
            </div>

            {/* Cart */}
            <button
              aria-label="Shopping Cart"
              className="relative p-2.5 rounded-full bg-gray-50 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 transition-all"
            >
              <span className="text-xl">🛒</span>
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white ring-2 ring-white">
                3
              </span>
            </button>

            <Link
              href="/signup"
              className="hidden sm:block bg-gray-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-600 transition-colors"
            >
              Sign Up
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <span className="text-2xl">
                {isMobileMenuOpen ? '✕' : '☰'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-4 space-y-2 animate-in slide-in-from-top duration-300">
          {NAVIGATION_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              mobile
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ))}

          <div className="pt-4 mt-4 border-t border-gray-100">
            <Link
              href="/signup"
              className="block w-full text-center bg-black text-white py-3 rounded-xl font-bold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}