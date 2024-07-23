import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
	return ( 
		<>
		<div className="mt-4 text-center">
			<p> Sumergete en una experiencia unica</p>
			<h4 className="mt-2 text-5xl font-extrabold uppercase"> El mejor Café </h4>
			<p className="my-2 text-lg"> Disfruta experiencias inolvidables </p>
			<Link href="*" className={buttonVariants()}>Comprar</Link>
		</div>
		<div 
                className=" h-[350px]  lg:h-[900px] bg-[url('/slider-image2.webp')] bg-center bg-cover bg-no-repeat mt-5" 
            />
		</>
		
	 );
}
 
export default BannerProduct;