import React from "react";

// components

import CardProfile from "components/Cards/CardProfile.js";
import CardProfileImg from "components/Cards/CardProfileImg.js";
// layout for page

import Admin from "layouts/Admin.js";

export default function Profile() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardProfile />
        </div>

        <div className="w-full lg:w-4/12 px-4">
          <CardProfileImg />
        </div>
      </div>
    </>
  );
}

Profile.layout = Admin;
