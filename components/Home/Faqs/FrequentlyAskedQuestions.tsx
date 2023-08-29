import React from "react";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { IoIosArrowDown } from "react-icons/io";
import Data from "../../../constants/Json/Data.json";
import Wrapper from "@/components/Shared/Wrapper";

const FrequentlyAskedQuestions = () => {
  return (
    <Wrapper id="faq" style="lg:py-16 py-10 relative">
      <div className="w-full flex flex-col items-center justify-start gap-16">
        <SectionHeading text="Frequently Asked Questions" />
        <div className="w-full">
          <div className="md:w-[70%] w-full mx-auto">
            {Data?.AccordinData.Data.map((item: any, index: number) => {
              return (
                <Accordion sx={{ boxShadow: "none" }} key={index}>
                  <AccordionSummary
                    expandIcon={<IoIosArrowDown size={20} />}
                    aria-controls={item.AriaControls}
                    id={item.Id}
                  >
                    <h2 className="text-black-secondary text-[18px] leading-6 font-semibold">
                      {" "}
                      {item.Title}
                    </h2>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* <div className="w-full flex items-center justify-start gap-2">

                    </div> */}
                    <p className="text-base text-black-secondary font-normal">
                      {item.Detail}
                      {item.link && (
                        <a
                          href={item.route}
                          className="ml-2 text-brand-primary text-base font-normal break-words whitespace-normal"
                        >
                          {item.link}
                        </a>
                      )}
                    </p>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>

      {/* top gradient */}
      <span className="absolute top-[10%] right-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-20 bg-[#00CCFF] shadow-circle rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
      <span className="absolute top-[10%] right-[5%] md:w-[250px] w-[100px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-20 bg-brand-secondary shadow-circle rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
    </Wrapper>
  );
};

export default FrequentlyAskedQuestions;
