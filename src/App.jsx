import React from "react";
import Cards from "./components/Cards";

const App = () => {
  const users = [
    {
      name: "Alice Johnson",
      age: 29,
      city: "New York",
      profession: "Graphic Designer",
      profilePhoto: "https://example.com/photos/alice.jpg",
    },
    {
      name: "Mark Chen",
      age: 35,
      city: "San Francisco",
      profession: "Software Engineer",
      profilePhoto: "https://example.com/photos/mark.jpg",
    },
    {
      name: "Sara Lee",
      age: 24,
      city: "Chicago",
      profession: "Marketing Specialist",
      profilePhoto: "https://example.com/photos/sara.jpg",
    },
    {
      name: "David Kim",
      age: 41,
      city: "Los Angeles",
      profession: "Product Manager",
      profilePhoto: "https://example.com/photos/david.jpg",
    },
    {
      name: "Emma Garcia",
      age: 30,
      city: "Miami",
      profession: "UX Designer",
      profilePhoto: "https://example.com/photos/emma.jpg",
    },
  ];

  return (
    <>
      <div>
        <div className="p-10">
          {users.map(function (elem, idx) {
            return (
              <Cards
                key={idx}
                username={elem.name}
                age={elem.age}
                city={elem.city}
                photo={elem.profilePhoto}
                proff={elem.profession}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
