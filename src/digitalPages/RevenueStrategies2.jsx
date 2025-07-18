import React from "react";
import transactionFees from "../assets/streamlinedOperations.png";
import subscriptionPlans from "../assets/userManagement.png";
import merchantPartnerships from "../assets/security.png";
import financialIntegration from "../assets/insightfulAnalytics.png";
import solutionBg from "../assets/solutionBg.png";

const profitMethods = [
  {
    title: "Transaction Fees",
    description: "Charge users a nominal fee per transaction for sustainable revenue.",
    imgSrc: transactionFees,
  },
  {
    title: "Subscription Plans",
    description: "Offer premium features or reduced fees through tiered subscription plans.",
    imgSrc: subscriptionPlans,
  },
  {
    title: "Merchant Partnerships",
    description: "Collaborate with merchants for revenue-sharing models and exclusive deals.",
    imgSrc: merchantPartnerships,
  },
  {
    title: "Financial Product Integration",
    description: "Monetize through integrated offerings like loans, insurance, or savings products.",
    imgSrc: financialIntegration,
  },
];

const EWalletProfit = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="bg-[#EBF2FD] md:py-[40px] py-8 md:px-[30px] px-5 md:rounded-[50px] rounded-3xl">
          <div className="section_header mb-12">
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="mb-2 lg:text-[48px] font-semibold md:text-[38px] sm:text-[28px] text-[24px]">
              How Can Bank Owners Generate Profit from an <span className="text-[#7c3aed] inline">E-Wallet Solution?</span>
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
            {profitMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-md md:px-5 px-4 md:py-6 py-4 z-20">
                <div className="w-[48px] h-[48px] bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                  <img alt="solution thumb" loading="lazy" width="25" height="24" src={method.imgSrc} style={{ color: 'transparent' }} />
                </div>
                <h5 className="md:text-[20px] font-semibold mb-3">{method.title}</h5>
                <p className="text-[#6B7280] text-[14px] ">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EWalletProfit;
