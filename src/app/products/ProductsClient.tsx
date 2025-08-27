"use client"

import Image from "next/image"
import { ShoppingCart, Star, CheckCircle, Truck, Shield, Clock } from "lucide-react"

const ProductsClient = () => {
  const products = [
    {
      id: 1,
      name: "Premium Hass Avocados",
      description:
        "Fresh, creamy Hass avocados grown on our farm. Perfect ripeness guaranteed for optimal taste and nutrition.",
      image: "/hass_ovacado.jpeg",
      features: [
        "Locally grown Hass variety",
        "Perfect ripeness selection",
        "Rich in healthy fats",
        "No chemical pesticides",
        "Eco-friendly packaging",
      ],
      availability: "In Stock",
      rating: 4.9,
      reviews: 124,
    },
    {
      id: 2,
      name: "Fresh Farm Eggs (30 count)",
      description: "Premium eggs from our free-range chickens. Healthy birds producing nutritious eggs daily.",
      image: "/egg.jpeg",
      features: [
        "30 fresh free-range eggs",
        "Free-range chickens",
        "Collected within 24 hours",
        "No antibiotics or hormones",
        "Superior nutrition profile",
      ],
      availability: "In Stock",
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 3,
      name: "Green Paper Plant",
      description:
        "Fresh green paper plants grown sustainably on our farm. Perfect for traditional cooking and medicinal uses.",
      image: "/green.jpeg",
      features: [
        "Organically grown green paper",
        "Fresh harvested daily",
        "Chemical-free cultivation",
        "Traditional medicinal plant",
        "Sustainable farming practices",
      ],
      availability: "In Stock",
      rating: 4.6,
      reviews: 45,
    },
    {
      id: 4,
      name: "Avocado Bundle (12 pieces)",
      description: "Perfect for families and small businesses. A dozen premium Hass avocados at bulk pricing.",
      image: "/ova.jpeg",
      features: [
        "12 premium Hass avocados",
        "Bulk discount applied",
        "Mixed ripeness levels",
        "Perfect for meal prep",
        "Extended freshness",
      ],
      availability: "In Stock",
      rating: 4.9,
      reviews: 87,
    },
    {
      id: 5,
      name: "Farm Eggs Half Tray (15 count)",
      description: "Perfect portion for smaller households. Same premium quality from our free-range chickens.",
      image: "/half.jpeg",
      features: [
        "15 fresh free-range eggs",
        "Perfect for small families",
        "Premium free-range quality",
        "Daily fresh collection",
        "Eco-friendly packaging",
      ],
      availability: "In Stock",
      rating: 4.7,
      reviews: 98,
    },
    {
      id: 6,
      name: "Bulk Supply (Custom Orders)",
      description:
        "Custom orders for restaurants, hotels, and businesses. Avocados, eggs, and green paper available in bulk quantities.",
      image: "/egg-ova.jpeg",
      features: [
        "Custom quantities available",
        "Wholesale pricing",
        "Regular delivery schedule",
        "Multi-product orders",
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
      description: "Free delivery on orders over $15 within Kampala area for all farm products",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our farm-fresh products",
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-600" />,
      title: "Farm Fresh Daily",
      description: "All products harvested/collected daily for maximum freshness",
    },
  ]

  const whatsappNumber = "256784399514"

  const handleWhatsAppOrder = (productName: string) => {
    const message = `Hi! I'd like to order ${productName}. Please provide pricing and delivery details.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Fresh Farm Products</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Premium Hass avocados, fresh eggs from free-range chickens, and green paper plants. All delivered fresh to
            your doorstep.
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

                  <div className="flex items-center justify-end mb-4">
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
                    onClick={() => handleWhatsAppOrder(product.name)}
                    disabled={product.availability === "Limited Stock" && Math.random() > 0.7}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>{product.availability === "Contact Us" ? "Get Quote" : "Order via WhatsApp"}</span>
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
              Our commitment to sustainable farming and quality makes all the difference across all our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sustainable Farming</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From avocado groves to free-range chickens and green paper cultivation, we practice sustainable farming
                across all operations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Chemicals or Additives</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All our products are grown and raised without harmful chemicals, ensuring pure, healthy food for your
                family.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Farm Fresh Daily</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Avocados picked at perfect ripeness, eggs collected daily, and green paper harvested fresh, ensuring
                maximum freshness and nutrition in every product.
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
            Contact us via WhatsApp for quick ordering of avocados, eggs, and green paper plants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/${whatsappNumber}?text=Hi! I'd like to place an order for fresh farm products. Please send me your current availability and pricing.`,
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

export default ProductsClient
