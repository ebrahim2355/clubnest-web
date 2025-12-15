import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/animation/Loading";
import EventCard from "./dashboard/clubManager/EventCard";

const Events = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchText, setSearchText] = useState("");
  const {
    data: events = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["events", selectedCategory, searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/filteredEvents?category=${selectedCategory}&search=${searchText}`
      );
      return res.data;
    },
  });

  const categories = [
    "Photography",
    "Sports",
    "Tech",
    "Music",
    "Art & Design",
    "Gaming",
    "Education",
    "Business",
    "Health & Fitness",
    "Food & Cooking",
    "Travel",
    "Books",
    "Environment",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Discover Events
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore Events based on your interests. attend events, and connect
            with passionate people.
          </p>
        </div>
      </div>

      {/* Search & Filters Section */}
      <div className="w-11/12 mx-auto px-4 pb-12">
        {/* Search Bar */}
        <div className="relative max-w-3xl mx-auto mb-10">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search by event name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full pl-16 pr-6 py-5 text-lg bg-white border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-main/30 focus:border-main transition"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col lg:flex-row justify-between items-start  gap-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            <p className="font-bold text-2xl border-l-8 pl-3 border-main">
              <span className="text-main">{events?.length}</span> Events Found
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="select select-lg px-8 py-3 bg-white border border-gray-300 rounded-full font-medium text-gray-700 cursor-pointer shadow-sm"
            >
              <option value="all">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Clubs  */}
      <div className="w-11/12 mx-auto px-4 pb-20">
        {isLoading || isFetching ? (
          <div className="flex justify-center items-center py-20">
            <Loading />
          </div>
        ) : events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Search className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700">
              No events found
            </h3>
            <p className="text-gray-500 mt-3">
              Try adjusting your filters or search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
