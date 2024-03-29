import React from 'react';

interface SummaryContent {
  title: string;
  description: string;
}

const SummaryComponent: React.FC<{content: SummaryContent}> = ({content}) => (
  <>
    <div className="mx-10 flex transform flex-col justify-center  text-white lg:min-h-[82vh]">
      <div className="mb-5 w-full pt-5 ">
        <h1 className="text-3xl font-bold lg:pl-[6%]">{content.title}</h1>
        <div className="my-20 flex flex-col flex-wrap text-justify md:flex-row lg:mx-20">
          <div className="pr-5  lg:text-2xl">{content.description}</div>
        </div>
      </div>
    </div>
  </>
);
export default SummaryComponent;
