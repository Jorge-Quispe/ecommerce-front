"use client"

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from 'embla-carousel-autoplay'
export const  dataCarouselTop =[
	{
		id: 1,
		title : "Envio 24/48 horas",
	description : " Miembro Premiun, tus envios en 24 h, ¿Llega despues? TE DEVOLVEMOS TU DINERO!!! Obten mas informacion y unete",
	link : "#!"
	},
	{
		id: 1,
		title : "Fin de semana de ofertas!!!",
	description : " No te quedes sin tu cafe en tu hogar, todos los fines de semana encuentra descuentos en nuestros productos",
	link : "#!"
	},
	{
		id: 1,
		title : "Compras 2 llevas 3 ",
	description : "Por la compra de productos seleccionados recibe un producto mas por tu compra, no pierdas esta oportunidad!!!",
	link : "#!"
	},
	{
		id: 1,
		title : "90% de descuento en el envio por compras mayores de 200",
	description : " Compra productos no menores a 200 soles y recibe el 90% de descuento del envio ",
	link : "#!"
	},
]

const  CarouselTextBanner= () => {
	const router = useRouter()
	return (  <div>

		<div className=" bg-gray-200 dark:bg-primary"  >
			<Carousel className="w-full  max-w-4xl mx-auto"
			plugins={[
				Autoplay({
					delay: 2500
				})
			]}>
				<CarouselContent>
				{dataCarouselTop.map(({id, title , link , description}) =>(
					
					<CarouselItem key={id} onClick={()=> router.push(link)} className="cursor-pointer">
							<div>
								<Card className="shadow-none border-none bg-transparent"></Card>
								<CardContent className=" flex flex-col justify-center p-2  items-center text-center">
								<p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
								<p className="sm:text-xs text-wrap dark:text-secondary">{description}</p>

								</CardContent>
							</div>
					</CarouselItem>
				)

				)}
				</CarouselContent>
			</Carousel>
		</div>
	</div>);
 }
  
 export default CarouselTextBanner ;