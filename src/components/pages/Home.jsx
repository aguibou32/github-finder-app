import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

function Home() {
  return (
    <>
      {/* Search component here... */}
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home