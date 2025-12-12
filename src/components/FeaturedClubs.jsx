import React from "react";
import Container from "./Container";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ClubCard from "../pages/dashboard/clubManager/ClubCard";

const FeaturedClubs = () => {
  const axios = useAxiosSecure();
  const { data: Clubs, isLoading } = useQuery({
    queryKey: ["allClubs"],
    queryFn: async () => {
      const res = await axios.get("/clubs?status=approved");
      return res.data;
    },
  });
   

  if (isLoading) return <p>loading.........</p>;
  const allClubs = Clubs?.slice(0, 8);
   console.log(allClubs);
  return (
    <Container>
      <div className="my-16">
        <h3 className="font-bold sm:text-4xl text-2xl">Clubs You Might Like</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {allClubs?.map((club) => (
            <ClubCard key={club._id} club={club} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedClubs;
