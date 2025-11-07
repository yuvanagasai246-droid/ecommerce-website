import { Search, ShoppingCart, User, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./theme-toggle";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { user, isAuthenticated } = useAuth();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2" data-testid="link-home">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-lg font-bold text-primary-foreground">D</span>
              </div>
              <span className="hidden font-display text-xl font-bold sm:inline">
                DigitalHub
              </span>
            </button>

            <nav className="hidden items-center gap-6 md:flex">
              <button className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2" data-testid="link-products">
                Products
              </button>
              <button className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2" data-testid="link-categories">
                Categories
              </button>
              <button className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2" data-testid="link-deals">
                Deals
              </button>
            </nav>
          </div>

          <div className="hidden flex-1 max-w-md lg:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10"
                data-testid="input-search"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-search-mobile">
              <Search className="h-5 w-5" />
            </Button>

            <ThemeToggle />

            {isAuthenticated && (
              <Button variant="ghost" size="icon" className="relative" data-testid="button-cart">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  0
                </Badge>
              </Button>
            )}

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" data-testid="button-user-menu">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.profileImageUrl || undefined} />
                      <AvatarFallback>
                        {user?.firstName?.charAt(0) || user?.email?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="font-medium">
                    {user?.firstName || user?.email}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => window.location.href = '/dashboard'} data-testid="menu-dashboard">
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.location.href = '/orders'} data-testid="menu-orders">
                    Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.location.href = '/wishlist'} data-testid="menu-wishlist">
                    Wishlist
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => window.location.href = '/api/logout'} data-testid="menu-logout">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => window.location.href = '/api/login'} data-testid="button-login">
                Login
              </Button>
            )}

            <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
