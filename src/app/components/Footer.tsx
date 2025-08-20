import Link from 'next/link'
import { Facebook, Instagram, MessageCircle, Egg, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-green-800 dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-yellow-500 p-2 rounded-full">
                <Egg className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Akubuuza Farm</span>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Providing fresh, naturally produced eggs from our free-range chickens. 
              Committed to sustainable farming and community wellbeing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/256700000000" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-green-100 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-green-100 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-green-100 hover:text-yellow-400 transition-colors">Products</Link></li>
              <li><Link href="/gallery" className="text-green-100 hover:text-yellow-400 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-green-100 hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-green-100">Fresh Egg Trays (30 eggs)</li>
              <li className="text-green-100">Half Trays (15 eggs)</li>
              <li className="text-green-100">Bulk Supply</li>
              <li className="text-green-100">Organic Free-Range Eggs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-green-100">Kampala, Uganda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-green-100">+256 700 000 000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-green-100">info@akubuuzafarm.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-green-200 text-sm">
            © 2024 Akubuuza Farm Products. All rights reserved. | Fresh Eggs, Naturally
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer