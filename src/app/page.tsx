import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Leaf, Award, Users, ArrowRight, Egg, Heart } from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "100% Natural",
      description: "Our chickens roam freely in natural environments, producing the healthiest eggs."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Premium Quality",
      description: "Every egg is carefully inspected to ensure only the best reaches your table."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Family Owned",
      description: "Three generations of farming expertise dedicated to sustainable agriculture."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Community First",
      description: "Supporting local communities while providing nutritious food for families."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg"
            alt="Happy free-range chickens"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="float-animation mb-8">
            <Egg className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            Fresh Eggs, Naturally
            <span className="block text-yellow-400 text-2xl sm:text-3xl mt-2">
              from Akubuuza Farm
            </span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-green-100 max-w-2xl mx-auto">
            Premium free-range eggs from happy chickens, delivered fresh to your doorstep. 
            Sustainable farming for healthier families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary inline-flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Shop Now
            </Link>
            <Link href="/about" className="btn-secondary inline-flex items-center">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Akubuuza Farm?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're committed to providing the freshest, most nutritious eggs while maintaining 
              sustainable and ethical farming practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl card-shadow transition-all duration-300 hover:shadow-xl">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Fresh Products
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From our farm to your table - discover our range of premium egg products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Full Tray */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 card-shadow hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg mb-6 flex items-center justify-center">
                <div className="grid grid-cols-6 gap-1 p-4">
                  {[...Array(30)].map((_, i) => (
                    <div key={i} className="w-4 h-5 bg-white rounded-full opacity-90" />
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Full Tray (30 Eggs)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Perfect for families and small businesses</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">$12.50</span>
                <Link href="/products" className="text-green-600 hover:text-green-700 font-medium">
                  View Details →
                </Link>
              </div>
            </div>

            {/* Half Tray */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 card-shadow hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg mb-6 flex items-center justify-center">
                <div className="grid grid-cols-5 gap-1 p-4">
                  {[...Array(15)].map((_, i) => (
                    <div key={i} className="w-4 h-5 bg-white rounded-full opacity-90" />
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Half Tray (15 Eggs)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Ideal for smaller households</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">$6.50</span>
                <Link href="/products" className="text-green-600 hover:text-green-700 font-medium">
                  View Details →
                </Link>
              </div>
            </div>

            {/* Bulk Supply */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 card-shadow hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-white">
                  <ShoppingCart className="w-16 h-16 mx-auto mb-2" />
                  <span className="text-lg font-semibold">Bulk Orders</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Bulk Supply</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">For restaurants and businesses</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">Contact</span>
                <Link href="/contact" className="text-green-600 hover:text-green-700 font-medium">
                  Get Quote →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 dark:bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready for Fresh, Natural Eggs?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join hundreds of satisfied customers who trust Akubuuza Farm for their daily nutrition needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary">
              Order Now
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-green-600">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage