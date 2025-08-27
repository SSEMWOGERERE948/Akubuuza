import Image from "next/image"
import { Users, Award, Leaf, Heart, Target, Clock } from "lucide-react"

export const metadata = {
  title: "About Us - Akubuuza Farm Products",
  description:
    "Learn about our sustainable farming practices, founder Esther Mbayo Mbulakubuza, and commitment to providing fresh avocados, eggs, and fish to our community.",
}

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Freshness",
      description:
        "Every product is harvested or collected daily and reaches you within 24-48 hours for maximum freshness and nutrition.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Quality",
      description:
        "Rigorous quality control ensures only the finest avocados, eggs, and fish make it to your table, meeting the highest standards.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Community Impact",
      description:
        "Supporting local employment and contributing to food security while building lasting relationships.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Sustainability",
      description: "Environmentally conscious farming practices that protect our land for future generations.",
    },
  ]

  const milestones = [
    {
      year: "2018",
      title: "Farm Established",
      description:
        "Founded by Esther Mbayo Mbulakubuza with a vision to provide fresh, quality produce to our community.",
    },
    {
      year: "2020",
      title: "Hass Avocado Cultivation",
      description: "Began cultivating premium Hass avocados, establishing ourselves as a quality fruit producer.",
    },
    {
      year: "2022",
      title: "Netherlands Chicken Import",
      description: "Imported high-quality chickens from Netherlands to enhance our egg production capabilities.",
    },
    {
      year: "2024",
      title: "Fish Farming Initiative",
      description: "Planning to expand into sustainable fish farming to diversify our product offerings.",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Story</h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Founded by Esther Mbayo Mbulakubuza, Akubuuza Farm has grown from a vision into a thriving agricultural
                enterprise. Under her leadership as Director and Senior Accountant, we've built a sustainable farm
                specializing in Hass avocados, premium eggs from Netherlands chickens, and planning innovative fish
                farming operations.
              </p>
              <div className="flex items-center space-x-8 text-green-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">6+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">3</div>
                  <div className="text-sm">Product Lines</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">500+</div>
                  <div className="text-sm">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image  
                src="/one.jpg"
                alt="Esther Mbayo Mbulakubuza and farm operations"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To provide the freshest Hass avocados, most nutritious eggs, and quality fish while maintaining the
                  highest standards of sustainable farming and animal welfare. We believe in delivering premium
                  agricultural products that nourish families and strengthen our community.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-yellow-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To become Uganda's leading diversified farm, demonstrating excellence in avocado cultivation, poultry
                  farming, and aquaculture. We envision a future where sustainable agriculture provides economic
                  opportunities while preserving our environment for generations to come.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Sustainable Farming Practices</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-2 rounded-full mt-1">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Premium Hass Avocados</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our avocado trees are carefully tended using organic methods, producing nutrient-rich fruit with
                      exceptional taste.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-2 rounded-full mt-1">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Netherlands Chicken Breeds
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We imported high-quality chickens from Netherlands, ensuring superior egg production with
                      excellent nutritional value.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-600 p-2 rounded-full mt-1">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Sustainable Fish Farming
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our planned fish ponds will use eco-friendly aquaculture methods to provide fresh, healthy fish to
                      our community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-2 rounded-full mt-1">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community Employment</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We provide stable employment opportunities, contributing to local economic development and skills
                      training.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do, from caring for our chickens to serving our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white dark:bg-gray-700 p-8 rounded-xl card-shadow hover:shadow-xl transition-all duration-300">
                  <div className="mb-6 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From Esther's vision to a thriving diversified agricultural enterprise.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                      <div className="text-green-600 text-xl font-bold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-green-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/director.jpeg"
                alt="Esther Mbayo Mbulakubuza, Founder and Director"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Meet Our Founder</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Esther Mbayo Mbulakubuza founded Akubuuza Farm with a vision to transform agriculture in our community.
                As our Director and Senior Accountant, she brings both agricultural passion and financial expertise to
                ensure sustainable growth and profitability.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Under her leadership, Akubuuza Farm has diversified from a single focus to a multi-product enterprise
                specializing in Hass avocados, premium eggs from Netherlands chickens, and innovative fish farming. Her
                commitment to quality and community development continues to drive our success.
              </p>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <blockquote className="text-gray-900 dark:text-white italic text-lg">
                  "Agriculture is not just about growing food; it's about growing communities, opportunities, and a
                  sustainable future for all."
                </blockquote>
                <cite className="text-green-600 font-semibold mt-2 block">
                  - Esther Mbayo Mbulakubuza, Founder & Director
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              See Our Farm in Action
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Watch this video to get an inside look at our farming operations and commitment to quality.
            </p>
          </div>

          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/NE0U_es5wos"
              title="Akubuuza Farm Operations"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
