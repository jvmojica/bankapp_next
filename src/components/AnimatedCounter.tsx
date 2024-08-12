"use client";

import CountUp from "react-countup";
import React from "react";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp end={amount} prefix="$" decimal="." decimals={2} />
    </div>
  );
};

export default AnimatedCounter;
