import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Leaf, Award, Users, ArrowRight, Fish } from "lucide-react"

const HomePage = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Diversified Farming",
      description: "From premium Hass avocados to fresh eggs from Netherlands chickens, we grow variety.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Premium Quality",
      description: "Every product is carefully cultivated and inspected to ensure only the best reaches your table.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Family Owned",
      description: "Three generations of farming expertise dedicated to sustainable agriculture.",
    },
    {
      icon: <Fish className="w-8 h-8 text-blue-500" />,
      title: "Future Growth",
      description: "Expanding into aquaculture with planned fish ponds for complete farm-to-table experience.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/four.jpg"
            alt="Diversified farming at Akubuuza Farm"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="float-animation mb-8">
            <Leaf className="w-16 h-16 mx-auto text-green-400 mb-4" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            Fresh Farm Produce
            <span className="block text-green-400 text-2xl sm:text-3xl mt-2">from Akubuuza Farm</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-green-100 max-w-2xl mx-auto">
            Premium Hass avocados, fresh eggs from Netherlands chickens, and soon - fresh fish from our own ponds.
            Diversified sustainable farming for healthier families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary inline-flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Shop Now
            </Link>
            <Link href="/gallery" className="btn-secondary inline-flex items-center">
              View Gallery
              <ArrowRight className="w-5 h-5 ml-2" />
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
              We're committed to providing the freshest, most nutritious produce from our diversified farm while
              maintaining sustainable and ethical farming practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl card-shadow transition-all duration-300 hover:shadow-xl">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
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
              Our Fresh Farm Products
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From our farm to your table - discover our range of premium avocados, fresh eggs, and soon fresh fish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Full Tray */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 card-shadow hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-white">
                  <Leaf className="w-16 h-16 mx-auto mb-2" />
                  <span className="text-lg font-semibold">Premium Hass</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Hass Avocados</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Fresh, creamy avocados perfect for every meal</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">ugx1000/each</span>
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Fresh Eggs (Netherlands Chickens)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Premium eggs from imported Netherlands chickens</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">ugx12000/tray</span>
                <Link href="/products" className="text-green-600 hover:text-green-700 font-medium">
                  View Details →
                </Link>
              </div>
            </div>

            {/* Bulk Supply */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 card-shadow hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-white">
                  <Fish className="w-16 h-16 mx-auto mb-2" />
                  <span className="text-lg font-semibold">Coming Soon</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fresh Fish</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                From our planned fish ponds - sustainable aquaculture
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">Coming Soon</span>
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                  Get Updates →
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready for Fresh Farm Produce?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join hundreds of satisfied customers who trust Akubuuza Farm for premium avocados, fresh eggs, and soon -
            sustainable fish farming.
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
