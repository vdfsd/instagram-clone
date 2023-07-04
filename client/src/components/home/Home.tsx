import { HomePostsList } from "../homePostsList/HomePostsList"
import { HomeStoriesList } from "../homeStoriesList/HomeStoriesList"
import { InstagramTextIcon } from "../instagramTextIcon/InstagramTextIcon"

import { BiMessageRoundedDots, BiHeart } from "react-icons/bi"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <header className="flex items-center justify-between px-2 mb-7">
        <div className="flx items-center">
          {" "}
          <InstagramTextIcon />
        </div>
        <div className="flex items-center">
          <Link to={`/`}>
            <BiHeart className="mr-4" size={30} color={"#e2e8f0"} />
          </Link>
          <Link to={`/`}>
            <BiMessageRoundedDots size={30} color={"#e2e8f0"} />
          </Link>
        </div>
      </header>
      <HomeStoriesList />
      <HomePostsList />
    </div>
  )
}