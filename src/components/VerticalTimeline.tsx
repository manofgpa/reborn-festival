import {
  VerticalTimeline as VerticalTime,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { HiOutlineMusicNote, HiCheck } from "react-icons/hi";

import "react-vertical-timeline-component/style.min.css";
import { Avatar, Box } from "@chakra-ui/react";

interface DJ {
  name: string;
  description: string;
  image: string;
  genres: string;
  setTime: string;
}

interface VerticalTimelineProps {
  djs: DJ[];
}

export const VerticalTimeline = ({ djs }: VerticalTimelineProps) => {
  return (
    <VerticalTime>
      {djs?.map((dj) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#8a561b", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8a561b" }}
          date={dj.setTime}
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<HiOutlineMusicNote />}
        >
          <Box align="center">
            <Avatar size="2xl" src={dj.image} />
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>{dj?.name}</h3>
            <h4 className="vertical-timeline-element-subtitle">{dj?.genres}</h4>
            <p>{dj?.description}</p>
          </Box>
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#8a561b", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #8a561b" }}
        date="11:00"
        iconStyle={{ background: "green", color: "#fff" }}
        icon={<HiCheck />}
      >
        <Box align="center">
          <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>ENCERRAMENTO</h3>
          <h4 className="vertical-timeline-element-subtitle">
            2022 começou da melhor forma!
          </h4>
        </Box>
      </VerticalTimelineElement>
    </VerticalTime>
  );
};
