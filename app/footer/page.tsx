export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Social Links */}
        <div className="flex justify-center gap-10 text-gray-600 mb-16">
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
          <span>Youtube</span>
          <span>Pinterest</span>
        </div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">TeeSpace</h3>
            <p className="text-gray-600 text-sm">hello@teespase.io</p>
            <p className="text-gray-900 font-semibold mt-2">
              +02 036 038 3996
            </p>
            <p className="text-gray-600 text-sm mt-2">
              3665 Paseo Place, Suite 0960 <br /> San Diego
            </p>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-gray-600">
              <li>About us</li>
              <li>Our Blog</li>
              <li>Start a Return</li>
              <li>Contact Us</li>
              <li>Shipping FAQ</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold mb-4">Useful links</h4>
            <ul className="space-y-2 text-gray-600">
              <li>My Account</li>
              <li>Print Provider</li>
              <li>Become a Partner</li>
              <li>Custom Products</li>
              <li>Make your own shirt</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-4">
              Get the latest news, events & more delivered to your inbox.
            </p>

            <div className="flex border border-gray-300 rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 outline-none"
              />
              <button className="px-5 bg-gray-900 text-white">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          © 2025 TeeSpace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}