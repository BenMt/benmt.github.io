import React from 'react'

const Section = ({ children, background }) => (
  <section
    css={{
      height: '100%',
      backgroundImage: `url(${background})`
    }}
  >
    {children}
  </section>
)

export default Section
