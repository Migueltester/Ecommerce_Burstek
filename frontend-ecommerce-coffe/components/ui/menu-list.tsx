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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Capsula",
    href: "/category/capsula",
    description: "Las cápsulas son una forma conveniente y fácil de preparar tu café favorito. Diseñadas para ofrecer una experiencia de café de alta calidad, cada cápsula está sellada herméticamente para mantener la frescura y el sabor.",
  },
  {
    title: "Grano",
    href: "/category/grano",
    description: "El café en grano ofrece una experiencia auténtica para los amantes del café. Al moler los granos justo antes de la preparación, se liberan los aceites y aromas naturales, brindando una taza de café rica y aromática.",
  },
  {
    title: "Molido",
    href: "/category/molido",
    description: "El café molido es ideal para quienes buscan una preparación rápida y sencilla. Con una variedad de niveles de molido disponibles, puedes elegir el que mejor se adapte a tu método de preparación, asegurando una taza perfecta cada vez.",
  },
]

export function MenuList() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    
                    <div className="mb-2 mt-4 text-lg font-medium">
                      BURSKET
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Este proyecto tiene como objetivo compartir noticias tecnológicas de vanguardia y crear contenido dinámico a través de reels en Instagram. Nos enfocamos en las últimas tendencias, avances y descubrimientos tecnológicos, 
                    con el fin de educar e inspirar a nuestra audiencia.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Informacion de pedidos y general              </ListItem>
              <ListItem href="/Productosor" title="Productosor">
                InformcCION GENERAL acerca de nuestro productos
              </ListItem>
              <ListItem href="/Clientes" title="Clientes">
                Nuestros principales Clientes
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafes</NavigationMenuTrigger>
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
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Todos los productos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

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

export default MenuList;