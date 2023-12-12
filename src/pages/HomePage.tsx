import HomeHeader from '@/components/HomeHeader'
import WhoWeAre from '@/components/WhoWeAre'
import TheoryOfChange from '@/components/TheoryOfChange'
import React from 'react'

function HomePage() {
  return (
    <section className="flex flex-col my-0 min-w-screen max-w-screen">
      {/* Header */}
      <HomeHeader />
      {/* Who We Are */}
<WhoWeAre/>
      {/* Theory of Change */}
<TheoryOfChange/>
      {/* Did you know */}
    

      {/* Latest on Powerlines */}
    </section>
  )
}

export default HomePage
