import React from 'react';
import streamlined from '../assets/streamlinedOperations.png';
import userManagement from '../assets/userManagement.png';
import security from '../assets/security.png';
import insightfulAnalytics from '../assets/insightfulAnalytics.png';
import solutionBg  from '../assets/solutionBg.png';

const RevenueStrategies1 = () => {
  const strategies = [
    {
      icon: streamlined,
      title: "Transaction Fees",
      description: "Earn revenue from each transaction processed through the system."
    },
    {
      icon: userManagement,
      title: "Subscription Plans",
      description: "Gain profit by offering competitive exchange rates with slight margins."
    },
    {
      icon: security,
      title: "In-App Advertising",
      description: "Offer tiered plans with benefits like lower fees for higher usage."
    },
    {
      icon: insightfulAnalytics,
      title: "Merchant Partnerships",
      description: "Collaborate with local agents for commission-based revenue."
    }
  ];

  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="bg-[#EBF2FD] md:py-[40px] py-8 md:px-[30px] px-5 md:rounded-[50px] rounded-3xl">
          <div className="section_header mb-12">
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="mb-2 lg:text-[48px] font-semibold md:text-[38px] sm:text-[28px] text-[24px]">
              How Can Bank Owners Generate Profit from a Cross Border <span className="text-[#7c3aed] inline">Remittance Solution?</span>
              </h2>
            </div>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3 relative">
            <img
              alt="Background Image"
              loading="lazy"
              decoding="async"
              className="z-10"
              src={solutionBg}
              style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
            />
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-md md:px-5 px-4 md:py-6 py-4 z-20">
                <div className="w-[48px] h-[48px] bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                  <img alt="solution thumb" loading="lazy" width="25" height="24" src={strategy.icon} style={{ color: 'transparent' }} />
                </div>
                <h5 className="md:text-[20px] font-semibold mb-3">{strategy.title}</h5>
                <p className="text-[#6B7280] text-[14px] ">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueStrategies1;
