"use client";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { useTheme, useMediaQuery } from "@mui/material";
import MapCard from "./MapCard";
import Data from "../../../constants/Json/Data.json";

const TimeLine = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className="w-full flex items-center justify-center">
      <Timeline position={matches ? "alternate" : "right"}>
        <TimelineItem className="flex items-center justify-start gap-0 lg:gap-6 z-10">
          <TimelineSeparator className="md:h-[380px] sm:h-[420px] h-[500px]">
            <TimelineDot className=" h-[16px] w-[16px]" />
            <TimelineConnector className="" />
          </TimelineSeparator>
          <TimelineContent>
            <MapCard
              title="MVP DEVELOPMENT"
              styles="py-4"
              details={Data.roadMap.phase1}
            />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="flex items-center justify-start gap-0 lg:gap-6 z-10">
          <TimelineSeparator className="md:h-[380px] lg:h-[400px] sm:h-[420px] h-[540px]">
            <TimelineDot className=" h-[16px] w-[16px]" />
            <TimelineConnector className="" />
          </TimelineSeparator>
          <TimelineContent>
            <MapCard
              title="PROFILE DEVELOPMENT"
              styles="py-4"
              details={Data.roadMap.phase2}
            />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="flex items-center justify-start gap-0 lg:gap-6 z-10">
          <TimelineSeparator className="md:h-[350px] sm:h-[420px] h-[480px]">
            <TimelineDot className=" h-[16px] w-[16px]" />
            <TimelineConnector className="" />
          </TimelineSeparator>
          <TimelineContent>
            <MapCard
              title="MOMENTUM GENERATION"
              details={Data.roadMap.phase3}
            />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="flex items-start justify-start gap-0 lg:gap-6 z-10">
          <TimelineSeparator className="md:h-[350px] sm:h-[420px] h-[480px]">
            <TimelineDot className=" h-[16px] w-[16px]" />
            <TimelineConnector className="" />
          </TimelineSeparator>
          <TimelineContent>
            <MapCard title="GROWTH" details={Data.roadMap.phase4} />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimeLine;
