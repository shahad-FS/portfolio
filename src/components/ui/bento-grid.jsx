import { cn } from "@/lib/utils";
import { Meteors } from "./meteors";
import MagicButton from "@/components/MagicButton";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  titleClassName,
  img,
  imgClassName,
  spareImg,
  direction,
}) => {
  const leftLists = ["Django", "Flask", "PsotgerSQL"];
  const rightLists = ["JWT", "OpenAPI", "ORM"];
  const [coppied, setCoppied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("alsaneea.shahad@gmail.com");
    setCoppied(true);
  };
  return (
    <div
      data-direction={direction}
      className={cn(
        "about-card row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input justify-between flex flex-col space-y4 border border-white/[0.1]",
        className,
      )}
      style={{
        background: "rgb(12, 12, 18, 1)",
        backgroundColor:
          "linear-gradient(90deg,rgba(4, 7, 29, 1) 0%, rgba(12, 12, 18, 1) 100%)",
      }}
    >
      <div className={`${id === 8} && 'flex justify-center h-full `}>
        <div className="w-full h-full absolute">
          <img
            src={img}
            src={img}
            className={cn(imgClassName, "object-cover, object-center")}
          />
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover, object-center, w-full ,h-full"}
            />
          )}
        </div>
        {id === 8 && (
          <Meteors number={80}>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </Meteors>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/ bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
          )}
        >
          <div className="transition duration-200 group-hover/bento:translate-x-2">
            <div className="font-sans font-bold text-lg lg:text-3xl  z-10 mb-5">
              {title}
            </div>
          </div>
          <div className="font-sans text-xs font-extralight  text-[#ffffff] text-sm md:tex-sm lg:text-lg lg:font-semibold z-10">
            {" "}
            {description}
          </div>

          {id === 1 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute right-4 top-4 opacity-30 ">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-30
                    lg:opacity-100 rounded-lg text-center  bg-[#191925]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#191925]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#191925]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-30 
                    lg:opacity-100 rounded-lg text-center bg-[#191925]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 8 && (
            <div className="mt-5 relative">
              <MagicButton
                title={coppied ? "Email Copied" : "Copy My Email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#0C0C12]"
                onClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
