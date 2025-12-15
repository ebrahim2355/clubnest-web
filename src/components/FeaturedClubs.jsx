import React from "react";
import Container from "./Container";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ClubCard from "../pages/dashboard/clubManager/ClubCard";
import Loading from "./animation/Loading";
import Button from "./Button";
import { Link } from "react-router";

const FeaturedClubs = () => {
  const axios = useAxiosSecure();
  const { data: Clubs, isLoading } = useQuery({
    queryKey: ["allClubs"],
    queryFn: async () => {
      const res = await axios.get("/clubs?status=approved");
      return res.data;
    },
  });
   

  if (isLoading) return <div className="min-h-screen"><Loading /></div>;
  const allClubs = Clubs?.slice(0, 5);
   console.log(allClubs);
  return (
    <Container>
      <div className="my-16">
        <div className="flex justify-between">
          <h3 className="font-bold sm:text-4xl text-2xl">Clubs You Might Like</h3>
          <Link to='/clubs'>
          <button className="rounded-xl transform  transition text-lg border-2 text-main font-semibold border-main px-4 py-2">
            See All Club
          </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-8 mt-8">
          {allClubs?.map((club) => (
            <ClubCard key={club._id} club={club} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedClubs;
