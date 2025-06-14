import React from "react";

const leaderboardData = [
  {
    id: 1,
    name: "Aisha Khan",
    contribution: 320,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Ravi Sharma",
    contribution: 450,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Mei Ling",
    contribution: 275,
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 4,
    name: "Leo Nguyen",
    contribution: 500,
    image: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    id: 5,
    name: "Sara Lopez",
    contribution: 410,
    image: "https://randomuser.me/api/portraits/women/21.jpg"
  }
];

const Leaderboard = () => {
  // Sort the data by contribution (highest first)
  const sortedData = leaderboardData.sort((a, b) => b.contribution - a.contribution);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">🌿 Eco Leaderboard</h2>
      <ul>
        {sortedData.map((user, index) => (
          <li key={user.id} className="flex items-center justify-between p-3 border-b">
            <div className="flex items-center space-x-3">
              <span className="text-gray-500 font-bold w-5">{index + 1}.</span>
              <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
              <span className="font-medium">{user.name}</span>
            </div>
            <span className="text-green-600 font-semibold">{user.contribution} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
