"use client"

import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserIcon from './UserIcon';
import Link from 'next/link';;
import { dropDownMenuLinks } from '@/utils/links';
import { Button } from '@/components/ui/button';
import { logoutAction } from "@/utils/api";

type LinksDropdownProps = {
  isSignedIn?: boolean;
  isAdmin?: boolean;
  imageUrl?: string | null;
};

function LinksDropdown({ isSignedIn = false, isAdmin = false, imageUrl }: LinksDropdownProps) {

  return (
    <div className="flex gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant='ghost' size='icon' aria-label="Open account menu" />}
        >
          <UserIcon imageUrl={imageUrl} />

        </DropdownMenuTrigger>


        {/* //here */}

        <DropdownMenuContent className='w-48 text-xs uppercase tracking-[0.15em]' align='end' sideOffset={10}>
          {!isSignedIn ? (
            <>
              <DropdownMenuItem>
                <Link href='/sign-in' className='w-full text-left'>Sign In</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='/sign-up' className='w-full text-left'>Sign Up</Link>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              {dropDownMenuLinks.map((link) => {
                if (link.name === 'dashboard' && !isAdmin) return null;

                return (
                  <DropdownMenuItem key={link.name}>
                    <Link href={link.href}>
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                )
              })}
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => logoutAction()}>
                <span className='w-full text-left'>Sign Out</span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>


      </DropdownMenu>


    </div>

  )
}

export default LinksDropdown




//  <div className='flex items-center gap-4 bg-transpart'>

//     {isLoaded && user ? (
//       <>
//         <UserButton >
//           <UserButton.MenuItems>
//             <UserButton.Link
//               label="Orders"
//               labelIcon={<Package size={15} />}
//               href="/orders"
//             />
//           </UserButton.MenuItems>
//         </UserButton>
//         {/* <CartSheet initialCart={cart} /> */}
//       </>
//     ) : isLoaded && (
//       <>
//         <SignInButton
//           mode='modal' >
//           <Button variant='outline'>
//             Sign In
//           </Button>
//         </SignInButton>
//         <SignUpButton mode='modal' >
//           <Button  variant='outline'>
//             Sign Up
//           </Button>
//         </SignUpButton>
//       </>
//     )}
//   </div>
