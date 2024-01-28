
import { Navbar, NavbarContent, NavbarItem, Avatar } from "@nextui-org/react";
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Navbar className="bg-black">

        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
          <NavbarItem>
            <Link className="text-white" href="#">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link className="text-white" href="#" >
              Acerca de
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link className="text-white" href="#" >
              Portafolio
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Avatar src="/4.jpg" />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <main className="flex flex-col w-full items-center my-3" >
        <p className="text-white text-center">Hola mi nombre es Sergio Martinez, estudiante de la especialización de 
             desarrollo de software de la Corporación universitaria minuto de Dios, este es un breve ejercicio de despliegue de una
             página web, como dato curioso, a pesar de ser hecha en react, no es una SPA, esta pagina está renderizada en el servidor
        </p>
        <Image className="rounded-large my-2"
          src="/3.jpg"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <h2 className="my-5">Redes sociales</h2>
        <div className=" flex flex-row justify-center  my-3 space-x-5">

          <Link href="https://dev.to/sergiotechx/" target="_blank">
            <Image
              src="/devto.svg"
              width={40}
              height={40}
              alt="Picture of the author"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/sergiotechx/" target="_blank">
            <Image
              src="/linked-in.svg"
              width={40}
              height={40}
              alt="Picture of the author"
            />
          </Link>

          <Link href="https://twitter.com/sergiotechx" target="_blank">
            <Image
              src="/twitter.svg"
              width={40}
              height={40}
              alt="Picture of the author"
            />
          </Link>


        </div>
        <h2 >Tecnologías</h2>
        <div className=" flex flex-row justify-center  my-3 space-x-5">
       
            <Image
              src="/csharp.svg"
              width={35}
              height={35}
              alt="Picture of the author"
            />
             <Image
              src="/github.svg"
              width={35}
              height={35}
              alt="Picture of the author"
            />
             <Image
              src="/html5.svg"
              width={35}
              height={35}
              alt="Picture of the author"
            />
            <Image
              src="/mysql.svg"
              width={35}
              height={35}
              alt="Picture of the author"
            />
      

        </div>
      </main>
      <footer className="flex flex-row justify-center">
        <Image
          src="/uniminutoLogo.webp"
          width={200}
          height={150}
          alt="Picture of the author"
        />
      </footer>
    </>
  );
}
