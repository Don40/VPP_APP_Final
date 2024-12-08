import Nav from '@/components/Nav'
import SecondaryHero from '@/components/SecondaryHero'
import React from 'react'

import InfogramEmbed from '@/components/InfogramEmbed'

const page = () => {
    return (
        <>
            <Nav />
            {/* <SecondaryHero
                bgImage="/images/bg-image.webp"
                text="GIVE!"
                paragraph=""
            /> */}
            <InfogramEmbed />
        </>
    )
}

export default page