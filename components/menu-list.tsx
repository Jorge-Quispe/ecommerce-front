"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const nameCofee: string = "Jorge's Coffe";

const  MenuList = () =>  {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
					{nameCofee}

                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
					Bienvenidos a {nameCofee}, donde cada taza cuenta una historia. Desde 2010, seleccionamos los mejores granos de café del mundo para que cada bolsa refleje nuestra pasión por el sabor y la excelencia. Creemos que el café es más que una bebida; es una experiencia. ¡Descubre el arte del buen café y lleva a casa nuestra pasión!
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu informacion, tus pedidos y mucho mas.
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Descuentos especiales, ¡Ingresa Ya!
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Productos complementarios como tazas, molinos,prensas, etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafés</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/accesorios" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default MenuList
const components: { title: string; href: string; description: string }[] = [
	{
	  title: "Cafe Grano",
	  href: "/category/grano",
	  description:
		"Granos de cafe enteros que requieren ser molidos antes de su preparacion. Ideal para los amantes del cafe. ",
	},
	{
	  title: "Cafe molido",
	  href: "/category/molido",
	  description:
		"Cafe en forma de polvo listo para ser utilzado en diferentes metodos de preparacion. Ideal para su uso cotidiano",
	},
	{
	  title: "Cafe de capsula",
	  href: "/category/capsula",
	  description:
		"Cafe envasado en capsulas individuales, ofreciendo consistencia en su preparacion",
	}
  ]
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
