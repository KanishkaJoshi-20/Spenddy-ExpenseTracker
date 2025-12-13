import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Wallet,
  User,
  Home,
  Menu,
  X,
  LogOut,
  UserCircle,
} from "lucide-react";

export default function HomeNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    console.log("User logged out");
    setShowUserMenu(false);
    setIsOpen(false);
  };

  return (
    <nav className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex !no-underline hover:!no-underline items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-cyan-400 to-purple-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
                <Wallet className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Spenddy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 absolute left-1/2 -translate-x-1/2">
            <Link
              to="/"
              className="group !no-underline hover:!no-underline px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:scale-105 transition"
            >
              <div className="flex items-center space-x-2 text-white">
                <Home className="w-5 h-5" />
                <span className="font-semibold">Home</span>
              </div>
            </Link>

            <Link
              to="/expense"
              className="group px-6 py-3 !no-underline hover:!no-underline rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:scale-105 transition"
            >
              <div className="flex items-center space-x-2 text-white">
                <Plus className="w-5 h-5" />
                <span className="font-semibold">Expenses</span>
              </div>
            </Link>

            <Link
              to="/income"
              className="group px-6 py-3 rounded-xl !no-underline hover:!no-underline bg-white/5 border border-white/10 backdrop-blur-sm hover:scale-105 transition"
            >
              <div className="flex items-center space-x-2 text-white">
                <Wallet className="w-5 h-5" />
                <span className="font-semibold">Income</span>
              </div>
            </Link>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              <User className="w-5 h-5 text-white" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-3 w-56 rounded-2xl bg-slate-800 border border-white/10 shadow-2xl z-20">
                <Link
                  to="/profile"
                  onClick={() => setShowUserMenu(false)}
                  className="flex !no-underline hover:!no-underline items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-white/10"
                >
                  <UserCircle className="w-5 h-5" />
                  <span>Profile</span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-red-400 hover:bg-red-500/10"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-white/10 border border-white/20"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-cyan-300"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>

            <Link
              to="/expense"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-purple-300"
            >
              <Plus className="w-5 h-5" />
              <span>Expenses</span>
            </Link>

            <Link
              to="/income"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-pink-300"
            >
              <Wallet className="w-5 h-5" />
              <span>Income</span>
            </Link>

            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-gray-300"
            >
              <UserCircle className="w-5 h-5" />
              <span>Profile</span>
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 w-full px-4 py-3 text-red-400"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
