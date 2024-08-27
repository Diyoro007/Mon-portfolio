import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
  BeakerIcon,
  PhoneIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Accueil",
    icon: RectangleStackIcon,
    // href: "/hero#hero"
  },
  {
    name: "Service",
    icon: Cog6ToothIcon,
  },
  {
    name: "Projet",
    icon: BeakerIcon,
  },
  {
    name: "A propos de moi",
    icon: UserCircleIcon,
  },
  {
    name: "Contact",
    icon: PhoneIcon,
    href: "/contact#contact-form",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const handleClick = () => {
    window.open('/Ingénieur des matériaux éco-responsables.pdf')
  }

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* <Typography color="blue-gray" className="text-lg font-bold">
          Material Tailwind
        </Typography> */}
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
            <Button onClick={handleClick} color="gray">Télécharger le cv</Button>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            
              <Button onClick={handleClick} color="gray">Télécharger le cv</Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
