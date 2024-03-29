/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/dtXG7NkT8Zx
 */
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"

export function mobileMenu() {
  return (
    (<Sheet key="1">
      <SheetTrigger asChild>
        <Button className="lg:hidden" size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="h-screen" side="left">
        <Link className="mb-6 flex" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">TravelCo</span>
        </Link>
        <div className="grid gap-4">
          <Link className="text-lg font-semibold" href="#">
            Home
          </Link>
          <Link className="text-lg font-semibold" href="#">
            Destinations
          </Link>
          <Link className="text-lg font-semibold" href="#">
            Tours
            <div className="ml-4 mt-2 grid gap-2">
              <Link className="text-base font-medium" href="#">
                Tour 1
              </Link>
              <Link className="text-base font-medium" href="#">
                Tour 2
              </Link>
              <Link className="text-base font-medium" href="#">
                Tour 3
              </Link>
            </div>
          </Link>
          <Link className="text-lg font-semibold" href="#">
            About
          </Link>
          <Link className="text-lg font-semibold" href="#">
            Contact
          </Link>
        </div>
      </SheetContent>
    </Sheet>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
