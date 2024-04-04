import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// interface SearchButtonProps {
//     submit: () => void;
// }

const SearchButton = () => {
    return (
        <Button type="submit">
            <Search className=""/>
        </Button>
    )
}

export default SearchButton;