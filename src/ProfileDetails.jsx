import React from "react";
import { useParams } from "react-router";
import { profileData } from "./constants/const";

const ProfileDetails = () => {
  const { name } = useParams();
  const data = profileData.find((item) => item.name === name);
  return (
    <div className= "min-h-screen justify-center items-center flex bg-white max-w-md mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      {/* Left Section: Profile Image */}
      <div className="md:shrink-0">
        <img
          className="h-48 w-full object-cover md:h-full md:w-48"
          src={data.profileImage} // Replace with actual profile image URL
          alt="Profile"
        />
      </div>

      {/* Right Section: Profile Details */}
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {data.name}
        </div>
        <p className="block mt-1 text-lg leading-tight font-medium text-black">
         {data.profession}
        </p>
        <p className="mt-2 text-gray-500">
          {data.description}
        </p>

        {/* Social Icons */}
        <div className="flex mt-4 space-x-4">
          <a href={data.profileLink} aria-label="Facebook">
            <img
              src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
              alt="Facebook"
              className="h-6 w-6"
            />
          </a>
          <a href={data.profileLink} aria-label="LinkedIn">
            <img
              src="https://img.icons8.com/fluency/48/000000/linkedin.png"
              alt="LinkedIn"
              className="h-6 w-6"
            />
          </a>
          <a href={data.profileLink} aria-label="Instagram">
            <img
              src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
              alt="Instagram"
              className="h-6 w-6"
            />
          </a>
          <a href={data.profileLink} aria-label="Twitter">
            <img
              src="https://img.icons8.com/fluency/48/000000/twitter.png"
              alt="Twitter"
              className="h-6 w-6"
            />
          </a>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">
            Buy me a coffee
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProfileDetails;
