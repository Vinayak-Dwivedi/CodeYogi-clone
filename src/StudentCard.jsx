import React from "react";

function StudentCard({ user }) {
  return (
    <div class=" bg-white rounded-md mx-auto  h-80  w-80 shrink-0 mt-5 object-cover hover:bg-gray-300 overflow-hidden ">
      <img class=" h-48 w-full  object-cover" src={user.picture.large} />
      <div class=" flex mt-4  justify-around">
        <div>
          <h1 class="font-bold font-serif text-xl mt-4">
            Name:{user.title}
            {user.name.first} {user.name.last}
          </h1>
          <h1 class="text-indigo-600 font-serif font-bold text-xl">
            Email: {user.email}
          </h1>
          <h1 class="text-indigo-600 font-serif font-bold text-xl">
            {user.number}
          </h1>
        </div>
        <div class="flex">
          <a href="https://twitter.com/login/">
            <img
              class="h-7 mr-4 mt-5  "
              src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
            />
          </a>
          <a href="https://in.linkedin.com/">
            <img
              class="h-7 mt-5"
              src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default StudentCard;
