import React from "react";
import PageContainer from "../layout/PageContainer";

const stats = [
  { value: "1000+", desc: "Visited Emotion Journal" },
  { value: "500+", desc: "Created Mood Images Using AI" },
  { value: "99%", desc: "Customer Satisfaction Rate" },
];

const Archievment = () => {
  return (
    <section className="py-4">
      <PageContainer>
        <div className="grid max-w-md mx-auto items-center grid-cols-1 gap-y-8 lg:max-w-none lg:grid-cols-5 lg:gap-x-16">
          {/* Left Section */}
          <div className="text-center lg:col-span-3 lg:max-w-md lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal dark:text-white px-6 sm:px-0">
              Numbers are telling our story
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-400">
              Our project has been growing rapidly — from delivering millions of
              Diffrent types of Moods, to serving thousands of active customers,
              all while maintaining an exceptional satisfaction rate.
            </p>
          </div>

          {/* Right Section (Stats) */}
          <div className="lg:col-span-2 space-y-8">
            {stats.map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="text-5xl lg:text-6xl font-normal dark:text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-lg text-gray-400">{item.desc}</p>
                {idx < stats.length - 1 && (
                  <div className="w-full h-px my-6 bg-gradient-to-r from-cyan-500 to-purple-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default Archievment;
