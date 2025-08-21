"use client"

import Image from "next/image"
import { Camera, Users, Truck, Award } from "lucide-react"

const GalleryClient = () => {
  const galleryCategories = [
    {
      title: "Our Happy Chickens",
      icon: <Camera className="w-6 h-6" />,
      images: [
        {
          src: "https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg",
          alt: "Free-range chickens in the field",
          caption: "Our chickens enjoy free-roaming on 50 acres of natural grassland",
        },
        {
          src: "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg",
          alt: "Baby chicks in the barn",
          caption: "New arrivals getting ready to join the flock",
        },
        {
          src: "https://images.pexels.com/photos/1660484/pexels-photo-1660484.jpeg",
          alt: "Chickens feeding naturally",
          caption: "Natural feeding behavior in open pastures",
        },
        {
          src: "https://images.pexels.com/photos/1250624/pexels-photo-1250624.jpeg",
          alt: "Rooster watching over hens",
          caption: "Our protective roosters ensuring flock safety",
        },
      ],
    },
    {
      title: "Our Dedicated Team",
      icon: <Users className="w-6 h-6" />,
      images: [
        {
          src: "https://images.pexels.com/photos/1422220/pexels-photo-1422220.jpeg",
          alt: "Farm workers feeding chickens",
          caption: "Daily care and feeding by our experienced team",
        },
        {
          src: "https://images.pexels.com/photos/1405930/pexels-photo-1405930.jpeg",
          alt: "Veterinarian checking chicken health",
          caption: "Regular health checks ensure optimal chicken welfare",
        },
        {
          src: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
          alt: "Farm family portrait",
          caption: "Three generations of farming expertise",
        },
        {
          src: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
          alt: "Team meeting in the field",
          caption: "Daily team coordination for optimal farm management",
        },
      ],
    },
    {
      title: "Egg Collection Process",
      icon: <Award className="w-6 h-6" />,
      images: [
        {
          src: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg",
          alt: "Fresh eggs in collection baskets",
          caption: "Daily collection ensures maximum freshness",
        },
        {
          src: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg",
          alt: "Quality inspection of eggs",
          caption: "Every egg undergoes thorough quality inspection",
        },
        {
          src: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg",
          alt: "Egg sorting and grading",
          caption: "Careful sorting by size and quality standards",
        },
        {
          src: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg",
          alt: "Packaging fresh eggs",
          caption: "Careful packaging in eco-friendly containers",
        },
      ],
    },
    {
      title: "Delivery & Distribution",
      icon: <Truck className="w-6 h-6" />,
      images: [
        {
          src: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
          alt: "Delivery truck loading eggs",
          caption: "Our refrigerated trucks ensure optimal temperature",
        },
        {
          src: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
          alt: "Driver checking delivery schedule",
          caption: "Punctual delivery schedules for customer satisfaction",
        },
        {
          src: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
          alt: "Eggs being delivered to store",
          caption: "Fresh eggs arriving at retail locations",
        },
        {
          src: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
          alt: "Happy customer receiving delivery",
          caption: "Direct-to-customer delivery service",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Farm Gallery</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Take a visual journey through Akubuuza Farm. See our free-range chickens, dedicated team, and the care that
            goes into every egg.
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      {galleryCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-16 ${categoryIndex % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-600 p-3 rounded-full text-white">{category.icon}</div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-w-4 aspect-h-3 relative">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                      <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Farm Stats */}
      <section className="py-16 bg-green-600 dark:bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Akubuuza Farm by the Numbers</h2>
            <p className="text-green-100 text-lg">Our commitment to excellence reflected in our achievements</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">5000+</div>
              <div className="text-green-100">Happy Chickens</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">50</div>
              <div className="text-green-100">Acres of Land</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">1000+</div>
              <div className="text-green-100">Daily Eggs</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">25+</div>
              <div className="text-green-100">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Farm */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Visit Our Farm</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We welcome visitors to see our operations firsthand. Schedule a farm tour to experience our sustainable
            practices and meet our happy chickens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/256700000000?text=Hi! I would like to schedule a farm tour. Please let me know available dates and times.",
                  "_blank",
                )
              }
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Schedule Farm Tour
            </button>
            <a
              href="/contact"
              className="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white dark:text-green-400 dark:border-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GalleryClient
