import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import { Flower2, HomeIcon } from "lucide-react";
import { FaCoffee, FaOm, FaPeace } from "react-icons/fa";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useSearchParams();

  // To close modal when clicking outside
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
    }
  };

  // Only show modal if sign-in query exists and prevent unnecessary re-renders
  useEffect(() => {
    if (search.get("sign-in")) {
      setShowModal(true);
      setSearch({});
    }
  }, [search]);

  return (
    <nav className="flex items-center justify-between max-w-full h-20 p-4 bg-[#1d314f46] shadow-lg">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3">
        <img
          src="/logo.png"
          alt="meditate-me logo"
          className="w-[150px] h-auto"
        />
      </Link>

      {/* Nav Actions */}
      <div className="space-x-4 flex items-center">
        <SignedOut>
          <button
            className="px-4 py-2 bg-[#F3F3B7] text-[#301C3B] rounded-full text-xs font-semibold hover:bg-[#ff7e5f] cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Get started
          </button>
        </SignedOut>

        <SignedIn>
          {/* ADDITION TO THE USER SECTION ON CLERK PROFILE */}
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-14 h-14",
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Home"
                labelIcon={<HomeIcon size={15} />}
                href="/home"
              />

              <UserButton.Link
                label="Shiva Meditation"
                labelIcon={<FaOm size={15} />}
                href="/shiva-meditation"
              />

              <UserButton.Link
                label="Krishna Meditation"
                labelIcon={<Flower2 size={15} />}
                href="/krishna-meditation"
              />

              <UserButton.Link
                label="Buddha Meditation"
                labelIcon={<FaPeace size={15} />}
                href="/Buddha-meditation"
              />

              <UserButton.Link
                label="Buy me a coffee(Demo)"
                labelIcon={<FaCoffee size={15} />}
                href="/buy-me-a-coffee-demo"
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </div>

      {/* Sign-in Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-[#301C3B]"
          style={{ opacity: 0.997 }}
          onClick={handleOverlayClick}
        >
          <SignIn signUpForceRedirectUrl="/home" fallbackRedirectUrl="/home" />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
