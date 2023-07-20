import SearchForm from "../../components/SearchForm";
import DrinkList from "../../components/DrinksList";
import DrinkDetailModal from "../../components/DrinkModal";

export default function Home  ()  {
    return (
        <div>
            <SearchForm />
            
            <DrinkList />

            <DrinkDetailModal />
        </div>
    )
}