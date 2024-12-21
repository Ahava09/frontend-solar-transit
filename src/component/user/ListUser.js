import Link from "../basic/Link";
import List from "../basic/List";

const ListUser = () => {

    return (
        <List classes="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
                <Link lien={"#"}  classes="text-gray-900 dark:text-white hover:underline" aria-current="page">
                    Toutes les positions
                </Link>
            </li>
            <li>
                <Link lien={"#"}  classes="text-gray-900 dark:text-white hover:underline" aria-current="page">
                    Mes positions
                </Link>
            </li>
        </List>
    )
};

export default ListUser;