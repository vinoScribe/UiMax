import React from "react";
import "./stylesheet/aboutBodySection.scss";
import PeopleResponse1 from "./aboutPageImg/Rectangle 7.png";
import PeopleResponse2 from "./aboutPageImg/Rectangle 7-1.png";
import PeopleResponse3 from "./aboutPageImg/Rectangle 7-2.png";
import PeopleResponse4 from "./aboutPageImg/Rectangle 7-3.png";
import PeopleResponse5 from "./aboutPageImg/Rectangle 7-4.png";
import PeopleResponse6 from "./aboutPageImg/Rectangle 7-5.png";
import TeamMemberProfileCard from "./TeamMemberProfileCard";

const ourTeam = [
  {
    id: 1,
    profilePhoto: PeopleResponse1,
    teamMember: "Scarlett Johansson",
  },
  {
    id: 2,
    profilePhoto: PeopleResponse2,
    teamMember: "Arjun Sarja",
  },
  {
    id: 3,
    profilePhoto: PeopleResponse3,
    teamMember: "Jiang Wen",
  },
  {
    id: 4,
    profilePhoto: PeopleResponse4,
    teamMember: "Sarah Paulson",
  },
  {
    id: 5,
    profilePhoto: PeopleResponse5,
    teamMember: "James Franco",
  },
  {
    id: 6,
    profilePhoto: PeopleResponse6,
    teamMember: "William Richard",
  },
];

const TeamMembersGrid = ({ teams = ourTeam }) => {
  return (
    <section>
      {teams.map((profile) => {
        return (
          <TeamMemberProfileCard
            key={profile.id.toString()}
            profilerName={profile.teamMember}
            profilePhoto={profile.profilePhoto}
          />
        );
      })}
    </section>
  );
};

export default TeamMembersGrid;
