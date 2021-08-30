import Search from "../../components/Search";
import {API_URL} from "../../config";

const SearchPage = ({searchResults}) => {
    return (
        <Search searchResults={searchResults} />
    );
};

export default SearchPage;

export const getServerSideProps = async (context) => {
    const res = await fetch(`${API_URL}/api/search`);
    const searchResults = await res.json();

    return {
        props: {
            searchResults
        }
    }
}