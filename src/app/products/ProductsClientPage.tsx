"use client" // Added use client directive to enable onClick handlers

import Image from "next/image"
import { ShoppingCart, Star, CheckCircle, Truck, Shield, Clock } from "lucide-react"

const ProductsClientPage = () => {
  const products = [
    {
      id: 1,
      name: "Premium Hass Avocados (5kg Box)",
      price: "$25.00",
      originalPrice: "$30.00",
      description: "Fresh, creamy Hass avocados grown on our sustainable farm. Perfect ripeness guaranteed.",
      image: "/product1.png",
      features: [
        "5kg of premium Hass avocados",
        "Sustainably grown",
        "Perfect ripeness selection",
        "Rich in healthy fats",
        "Eco-friendly packaging",
      ],
      availability: "In Stock",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 2,
      name: "Hass Avocados (2kg Box)",
      price: "$12.00",
      originalPrice: "ugx15000",
      description: "Smaller portion perfect for families. Same premium quality Hass avocados from our farm.",
      image: "/product1.png",
      features: [
        "2kg of fresh Hass avocados",
        "Family-sized portion",
        "Hand-picked quality",
        "Nutritious and delicious",
        "Sustainable farming",
      ],
      availability: "In Stock",
      rating: 4.8,
      reviews: 67,
    },
    {
      id: 3,
      name: "Full Tray (30 Eggs)",
      price: "ugx12000",
      originalPrice: "ugx15000",
      description: "Premium free-range eggs from our Netherlands breed chickens. Packed fresh daily.",
      image: "/product2.png",
      features: [
        "30 fresh free-range eggs",
        "Netherlands breed chickens",
        "Collected within 24 hours",
        "Organic feed chickens",
        "No antibiotics or hormones",
      ],
      availability: "In Stock",
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 4,
      name: "Half Tray (15 Eggs)",
      price: "ugx12000",
      originalPrice: "ugx1000",
      description: "Perfect for smaller households. Premium eggs from our Netherlands breed chickens.",
      image: "/product2.png",
      features: [
        "15 fresh free-range eggs",
        "Netherlands breed chickens",
        "Perfect for small families",
        "Daily fresh collection",
        "Premium egg quality",
      ],
      availability: "In Stock",
      rating: 4.8,
      reviews: 98,
    },
    {
      id: 5,
      name: "Premium Organic (30 Eggs)",
      price: "$18.00",
      originalPrice: "$22.00",
      description: "Our premium organic line from Netherlands chickens with certified organic feed.",
      image: "/product2.png",
      features: [
        "30 certified organic eggs",
        "Netherlands breed chickens",
        "100% organic feed",
        "Pasture-raised chickens",
        "Third-party certified",
      ],
      availability: "In Stock",
      rating: 5.0,
      reviews: 43,
    },
    {
      id: 6,
      name: "Fresh Tilapia (2kg)",
      price: "$18.00",
      originalPrice: "$22.00",
      description: "Coming soon! Fresh tilapia from our planned fish ponds. Pre-order now for early access.",
      image: "/product3.png",
      features: [
        "2kg fresh tilapia",
        "Pond-raised fish",
        "Sustainable aquaculture",
        "High protein content",
        "Chemical-free farming",
      ],
      availability: "Pre-Order",
      rating: 4.7,
      reviews: 12,
    },
    {
      id: 7,
      name: "Mixed Fish Pack (3kg)",
      price: "$28.00",
      originalPrice: "$35.00",
      description: "Variety pack of fresh fish from our upcoming aquaculture project. Reserve your order today.",
      image: "/product3.png",
      features: [
        "3kg mixed fresh fish",
        "Variety of species",
        "Sustainable fish farming",
        "Fresh from our ponds",
        "Nutritious and healthy",
      ],
      availability: "Pre-Order",
      rating: 4.6,
      reviews: 8,
    },
    {
      id: 8,
      name: "Bulk Supply (Custom)",
      price: "Contact for Quote",
      originalPrice: null,
      description: "Custom orders for restaurants, hotels, and businesses. Avocados, eggs, and fish available.",
      image: "/product1.png",
      features: [
        "Custom quantities available",
        "All product categories",
        "Wholesale pricing",
        "Regular delivery schedule",
        "Business partnership",
      ],
      availability: "Contact Us",
      rating: 4.8,
      reviews: 24,
    },
  ]

  const benefits = [
    {
      icon: <Truck className="w-6 h-6 text-green-600" />,
      title: "Free Delivery",
      description: "Free delivery on orders over $20 within Kampala area",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee or your money back",
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-600" />,
      title: "Farm Fresh",
      description: "All products harvested/collected fresh and delivered within 24-48 hours",
    },
  ]

  const whatsappNumber = "256784399514"

  const handleWhatsAppOrder = (productName: string, price: string) => {
    const message = `Hi! I'd like to order ${productName} for ${price}. Please provide delivery details.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const calculateDiscount = (originalPrice: string, currentPrice: string) => {
    const original = Number.parseFloat(originalPrice.replace("$", ""))
    const current = Number.parseFloat(currentPrice.replace("$", ""))
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Farm Fresh Products</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Premium Hass avocados, fresh eggs from Netherlands chickens, and sustainable fish farming. All delivered
            fresh to your doorstep.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  {product.availability === "Limited Stock" && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Limited Stock
                    </div>
                  )}
                  {product.originalPrice && product.price !== "Contact for Quote" && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Save {calculateDiscount(product.originalPrice, product.price)}%
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{product.description}</p>

                  <div className="mb-4">
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <span
                      className={`text-sm px-2 py-1 rounded ${
                        product.availability === "In Stock"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : product.availability === "Limited Stock"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      }`}
                    >
                      {product.availability}
                    </span>
                  </div>

                  <button
                    onClick={() => handleWhatsAppOrder(product.name, product.price)}
                    disabled={product.availability === "Limited Stock" && Math.random() > 0.7}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>{product.price === "Contact for Quote" ? "Get Quote" : "Order via WhatsApp"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Our Farm Products?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our commitment to sustainable farming and quality across all our product lines makes the difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sustainable Avocado Farming</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our Hass avocados are grown using sustainable practices, ensuring premium quality and environmental
                responsibility.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Netherlands Breed Chickens</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our eggs come from premium Netherlands breed chickens, raised free-range with organic feed and no
                artificial additives.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expanding to Aquaculture</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're developing sustainable fish ponds to provide fresh, chemical-free fish alongside our existing
                products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 dark:bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Order Fresh Farm Products?</h2>
          <p className="text-xl mb-8 text-green-100">
            Contact us via WhatsApp for avocados, eggs, fish pre-orders, and delivery coordination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/${whatsappNumber}?text=Hi! I'd like to place an order for your farm products. Please send me your current availability and pricing.`,
                  "_blank",
                )
              }
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Order via WhatsApp</span>
            </button>
            <a
              href="tel:+256784399514"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Call Us: +256 393 254 185
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsClientPage
