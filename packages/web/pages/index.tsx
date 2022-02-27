import type { NextPage } from 'next'

// import { Button } from "@jrmarqueshd/common"
import { Button } from "@jrmarqueshd/components"

const Home: NextPage = () => {
  return (
    <div>
      hello site

      <Button onClick={() => alert("Hello, world!")} label="Say Hello" color="black" />
    </div>
  )
}

export default Home
