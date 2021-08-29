import Title from "./Title";
import SmallCard from "./SmallCard";
import MediumCard from "./MediumCard";
import Card from "./Card";
import outdoor from '../public/images/outdoore.webp'

const Home = ({exploreData, cardsData}) => {
    return (
        <>
            <Title title={"AirBnb"} />

            <main className={"max-w-7xl mx-auto px-8 sm:px-16"}>
                <section className={"pt-6"}>
                    <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

                    <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
                        {exploreData?.map(({img, distance, location}, index) => <SmallCard key={index} img={img} distance={distance} location={location} />)}
                    </div>
                </section>

                <section>
                    <h2 className={"text-4xl font-semibold py-8"}>Live Anywhere</h2>

                    <div className={"flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3"}>
                        {cardsData?.map(({title, img}, index) => <MediumCard img={img} title={title} key={index} />)}
                    </div>
                </section>

                <Card
                    img={outdoor}
                    title={"The Greatest Outdoors"}
                    buttonText={"Get Inspired"}
                    description={"Wishlists curated by Airbnb."}
                />
            </main>
        </>
    );
};

export default Home;