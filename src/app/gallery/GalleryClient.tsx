"use client"

import Image from "next/image"
import { GraduationCap, Users, Camera, Award } from "lucide-react"

const GalleryClient = () => {
  const galleryCategories = [
    {
      title: "School Visits & Farm Tours",
      icon: <GraduationCap className="w-6 h-6" />,
      images: [
        {
          src: "/one.jpg",
          alt: "Students learning about farm life",
          caption: "Students from local schools exploring our sustainable farming practices",
        },
        {
          src: "/two.jpg",
          alt: "Children interacting with farm animals",
          caption: "Hands-on learning experience with our friendly farm animals",
        },
        {
          src: "/third.jpg",
          alt: "Educational farm tour in progress",
          caption: "Interactive educational sessions about agriculture and sustainability",
        },
        {
          src: "/six.jpg",
          alt: "Group photo with visiting students",
          caption: "Memorable moments with our young visitors",
        },
      ],
    },
    {
      title: "Our Educational Team",
      icon: <Users className="w-6 h-6" />,
      images: [
        {
          src: "/four.jpg",
          alt: "Farm educator teaching students",
          caption: "Our experienced team sharing knowledge with young learners",
        },
        {
          src: "/fifth.jpg",
          alt: "Team member demonstrating farming techniques",
          caption: "Hands-on demonstrations of sustainable farming methods",
        },
        {
          src: "/six.jpg",
          alt: "Farm team welcoming visitors",
          caption: "Our dedicated team passionate about agricultural education",
        },
        {
          src: "/seven.jpg",
          alt: "Team planning educational activities",
          caption: "Planning engaging activities for our school visitors",
        },
      ],
    },
    {
      title: "Farm Activities & Learning",
      icon: <Camera className="w-6 h-6" />,
      images: [
        {
          src: "/four.jpg",
          alt: "Students participating in farm activities",
          caption: "Students getting involved in daily farm operations",
        },
        {
          src: "/third.jpg",
          alt: "Learning about crop cultivation",
          caption: "Understanding the process of growing healthy crops",
        },
        {
          src: "/nine.jpg",
          alt: "Farm workshop session",
          caption: "Interactive workshops teaching agricultural skills",
        },
        {
          src: "/fifth.jpg",
          alt: "Students learning about food production",
          caption: "Understanding the journey from farm to table",
        },
      ],
    },
    {
      title: "Delivery & Distribution",
      icon: <Award className="w-6 h-6" />,
      images: [
        {
          src: "/delivery-truck-loading-eggs.png",
          alt: "Delivery truck loading eggs",
          caption: "Our refrigerated trucks ensure optimal temperature",
        },
        {
          src: "/driver-checking-delivery-schedule.png",
          alt: "Driver checking delivery schedule",
          caption: "Punctual delivery schedules for customer satisfaction",
        },
        {
          src: "/eggs-being-delivered-to-store.png",
          alt: "Eggs being delivered to store",
          caption: "Fresh eggs arriving at retail locations",
        },
        {
          src: "/happy-customer-receiving-delivery.png",
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
            Take a visual journey through Akubuuza Farm. See our educational programs, dedicated team, and the memorable
            experiences we create for visiting schools.
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
            <p className="text-green-100 text-lg">
              Our commitment to agricultural education reflected in our achievements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">500+</div>
              <div className="text-green-100">Students Visited</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">50</div>
              <div className="text-green-100">Acres of Learning</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">20+</div>
              <div className="text-green-100">Partner Schools</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">25+</div>
              <div className="text-green-100">Educational Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Farm */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Visit Our Farm</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We welcome schools and educational groups to visit our farm. Schedule an educational tour to give your
            students hands-on learning experiences about sustainable agriculture and farm life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/256784399514?text=Hi! I would like to schedule an educational farm visit for our school. Please let me know available dates and programs.",
                  "_blank",
                )
              }
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Schedule School Visit
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
