import Home from "../components/Home";
import {API_URL} from "../config";

export default function HomePage({exploreData, cardsData}) {
  return (
      <Home exploreData={exploreData} cardsData={cardsData} />
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`${API_URL}/api/explore`);
  const exploreData = await response.json();

  const res = await fetch(`${API_URL}/api/explore/cardsdata`);
  const cardsData = await res.json();

  return {
    props: {
       exploreData,
      cardsData
    }
  }
}