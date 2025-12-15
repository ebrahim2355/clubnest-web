import React from "react";
import Container from "./Container";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "./animation/Loading";
import { Link } from "react-router";
import EventCard from "../pages/dashboard/clubManager/EventCard";

const FeaturedEvents = () => {
  const axios = useAxiosSecure();
  const { data: Events, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axios.get("/getEvents");
      return res.data;
    },
  });
   

  if (isLoading) return <div className="min-h-screen"><Loading /></div>;
  const allEvents = Events?.slice(0, 5);
   console.log(allEvents);
  return (
    <Container>
      <div className="my-20">
        <div className="flex justify-between">
          <h3 className="font-bold sm:text-4xl text-2xl">Events from Different Clubs</h3>
          <Link to='/events'>
          <button className="rounded-xl transform  transition text-lg border-2 text-main font-semibold border-main px-4 py-2 cursor-pointer">
            See All Events
          </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-8 mt-8">
          {allEvents?.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedEvents;
