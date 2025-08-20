import Image from 'next/image'
import { Users, Award, Leaf, Heart, Target, Clock } from 'lucide-react'

export const metadata = {
  title: 'About Us - Akubuuza Farm Products',
  description: 'Learn about our sustainable farming practices, family heritage, and commitment to providing fresh, natural eggs to our community.',
}

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Freshness",
      description: "Every egg is collected daily and reaches you within 24-48 hours for maximum freshness and nutrition."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Quality",
      description: "Rigorous quality control ensures only the finest eggs make it to your table, meeting the highest standards."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Community Impact",
      description: "Supporting local employment and contributing to food security while building lasting relationships."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Sustainability",
      description: "Environmentally conscious farming practices that protect our land for future generations."
    }
  ]

  const milestones = [
    {
      year: "1985",
      title: "Farm Established",
      description: "Started with just 50 chickens and a dream to provide fresh eggs to our community."
    },
    {
      year: "2000",
      title: "Organic Certification",
      description: "Became certified organic, committing to natural farming practices without chemicals."
    },
    {
      year: "2015",
      title: "Expanded Operations",
      description: "Grew to 5,000 free-range chickens and began supplying major retailers and restaurants."
    },
    {
      year: "2024",
      title: "Digital Presence",
      description: "Launched our online platform to better serve customers with direct farm-to-table delivery."
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Our Story
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                For nearly four decades, Akubuuza Farm has been a trusted name in sustainable agriculture. 
                What started as a small family farm has grown into a cornerstone of the community, 
                providing fresh, nutritious eggs while maintaining our commitment to ethical farming practices.
              </p>
              <div className="flex items-center space-x-8 text-green-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">39+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">5000+</div>
                  <div className="text-sm">Happy Chickens</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">1000+</div>
                  <div className="text-sm">Daily Customers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1405930/pexels-photo-1405930.jpeg"
                alt="Farm family working together"
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
                  To provide the freshest, most nutritious eggs while maintaining the highest standards 
                  of animal welfare and environmental stewardship. We believe that healthy, happy chickens 
                  produce the best eggs, and our mission is to deliver this quality directly to your family's table.
                </p>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-yellow-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To become the leading example of sustainable agriculture in Uganda, demonstrating that 
                  farming can be both profitable and environmentally responsible. We envision a future where 
                  every family has access to fresh, ethically produced food that nourishes both body and community.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Sustainable Farming Practices
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-2 rounded-full mt-1">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Free-Range Environment</h3>
                    <p className="text-gray-600 dark:text-gray-300">Our chickens roam freely on 50 acres of natural grassland, ensuring they get plenty of exercise and natural nutrition.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-2 rounded-full mt-1">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Chemical-Free Feed</h3>
                    <p className="text-gray-600 dark:text-gray-300">We use only organic, locally-sourced grains and supplements, free from antibiotics and artificial growth hormones.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-600 p-2 rounded-full mt-1">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Animal Welfare</h3>
                    <p className="text-gray-600 dark:text-gray-300">Our chickens enjoy spacious coops, natural lighting, and veterinary care to ensure their health and happiness.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-2 rounded-full mt-1">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community Employment</h3>
                    <p className="text-gray-600 dark:text-gray-300">We provide stable employment for 25+ local families, contributing to community economic growth.</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do, from caring for our chickens to serving our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white dark:bg-gray-700 p-8 rounded-xl card-shadow hover:shadow-xl transition-all duration-300">
                  <div className="mb-6 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From humble beginnings to becoming a trusted name in sustainable farming.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
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

      {/* Family Touch */}
      <section className="py-20 bg-green-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.pexels.com/photos/1422220/pexels-photo-1422220.jpeg"
                alt="Farm family portrait"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                A Family Legacy
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Akubuuza Farm is more than just a business—it's a family legacy passed down through three generations. 
                Founded by our grandfather in 1985, the farm has remained committed to the values of hard work, 
                integrity, and community service.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, we continue to honor that legacy while embracing modern sustainable farming techniques. 
                Every egg that leaves our farm carries with it the care and dedication of our family, 
                ensuring that your family receives nothing but the best.
              </p>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <blockquote className="text-gray-900 dark:text-white italic text-lg">
                  "We don't just raise chickens; we nurture a tradition of excellence that feeds families and builds community."
                </blockquote>
                <cite className="text-green-600 font-semibold mt-2 block">- The Akubuuza Family</cite>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage