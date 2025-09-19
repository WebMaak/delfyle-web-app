"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TargetAndTransition, Variant } from "framer-motion";

type MemberCardProps = {
  name: string;
  position: string;
  description: string;
  list?: string[];
  grid?: "2x2" | "4x4";
  image: string;
};

const members: MemberCardProps[] = Array(6).fill({
  name: "Abhinandan",
  position: "Senior Developer",
  description:
    "Passionate about building scalable web apps and delivering delightful user experiences.",
  list: ["React", "Next.js", "Tailwind", "Framer Motion"],
  grid: "2x2",
  image: "/images/team-members/abhinandan.png",
});


type VariantWithDirection = (direction: number) => TargetAndTransition;

const cardVariants: {
  enter: VariantWithDirection;
  center: TargetAndTransition;
  exit: VariantWithDirection;
} = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    transition: { duration: 0.5, ease: [0.42, 0, 1, 1] },
  }),
};

export default function TeamCards() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage(([prev]) => {
      const newIndex = (prev + newDirection + members.length) % members.length;
      return [newIndex, newDirection];
    });
  };

  const member = members[page];
  const isGrid2x2 = member.grid === "2x2";

  return (
    <div className="relative w-full max-w-4xl mx-auto flex items-center">
      {/* Left Arrow */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Card */}
      <div className="w-full px-12">
        <div className="relative h-[350px] flex items-center justify-center">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={page}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full bg-white rounded-2xl shadow-lg flex overflow-hidden"
            >
              {/* Left Content */}
              <div className="w-2/3 p-8 flex flex-col justify-center">
                <p className="text-gray-700 text-sm mb-4">{member.description}</p>
                <h2 className="text-lg font-bold">{member.name}</h2>
                <h3 className="text-sm text-gray-500">{member.position}</h3>

                {member.list && (
                  <div
                    className={`mt-4 grid ${
                      isGrid2x2 ? "grid-cols-2" : "grid-cols-4"
                    } gap-2`}
                  >
                    {member.list.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-gray-100 rounded-md text-gray-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Decorative Image */}
              <div className="w-1/3 flex items-center justify-center bg-gray-50">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="object-cover rounded-full"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
