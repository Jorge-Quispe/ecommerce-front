
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import {  Menu } from "lucide-react";

const ItemsMenuMobile = () => {
	return (  
		<Popover>
			<PopoverTrigger>
				<Menu/>
			</PopoverTrigger>
			<PopoverContent>
				<Link href="/categories/cafe-molido" className="block" > Cafe Molido</Link>
				<Link href="/categories/cafe-grano" className="block"> Cafe en granos</Link>
				<Link href="/categories/cafe-capsula" className="block">Cafe en capsulas</Link>
			</PopoverContent>
		</Popover>
	);
}
 
export default ItemsMenuMobile;