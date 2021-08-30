import {useRouter} from "next/router";
import {format} from "date-fns";
import Title from "./Title";
import Header from "./Header";
import Footer from "./Footer";
import InfoCard from "./InfoCard";

const Search = ({searchResults}) => {
    const router = useRouter();
    const {location, startDate, endDate, guestNumber} = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <>
            <Title title={"Search Result"} />
            <Header placeholder={`${location} | ${range} | ${guestNumber} guests`} />
            <main className="flex">

                <section className={"pt-14 px-6 flex-grow"}>
                    <p className={"text-xs"}>300+ Stays {range}  for {guestNumber} guests</p>
                    <h1 className={"text-3xl font-semibold mb-6 mt-2"}>Stays in {location}</h1>

                    <div className={"hidden lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap pb-5"}>
                        <p className={"button"}>Cancellation Flexible</p>
                        <p className={"button"}>Type of Place</p>
                        <p className={"button"}>Price</p>
                        <p className={"button"}>Rooms and Beds</p>
                        <p className={"button"}>More Filters</p>
                    </div>

                    {/*{searchResults.map(({img, location, title, description, star, price, total}, index) => <InfoCard key={index}  />)}*/}

                    <div className={"flex flex-col"}>
                        {searchResults.map((searchResult, index) => <InfoCard key={index} searchResult={searchResult}  />)}
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
};

export default Search;