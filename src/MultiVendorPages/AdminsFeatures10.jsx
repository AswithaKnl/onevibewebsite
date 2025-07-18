import React from 'react';

const AdminsFeatures10 = () => {
  return (
    <div>
      <div class="text-center rounded-[20px] px-3 lg:pt-12 pt-6 lg:pb-16 pb-12 mb-[-30px] bg-[#DBEAFE]">
        <h3 class="xl:text-2xl lg:text-xl font-semibold md:text-lg text-base text-[#213E65]">Administrator Features</h3>
      </div>

      <div className="bg-gray-50 xl:py-8 py-5 xl:px-6 px-4 rounded-[20px]">
        <ul className="space-y-4">
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="User Management"  className="object-cover" src="https://appdevs.net/_next/static/media/userInterface.7a544d13.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px] ">Centralized Dashboard</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]">View and manage all vendors, products, orders, and payments from a single platform.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Real-Time Transaction Monitoring"  src="https://appdevs.net/_next/static/media/features.4c70dfc8.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px] ">Vendor Management System</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Approve or reject vendor applications, set commissions, and track vendor performance.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Reporting and Analytics" src="https://appdevs.net/_next/static/media/responsiveness.c266a9fd.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Product Approval and Moderation</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Admins can review and approve products before they are listed on the marketplace, ensuring quality control.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Integration Capabilities" src="https://appdevs.net/_next/static/media/accessibilityFlow.90fee436.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px] ">Multi-Language and Multi-Currency Support</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]">Cater to a global audience with support for multiple languages and currencies.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="User Management"  className="object-cover" src="https://appdevs.net/_next/static/media/userInterface.7a544d13.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px] ">Detailed Reporting and Analytics</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]"> Track overall marketplace performance, vendor sales, and customer behavior to optimize business strategies.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Real-Time Transaction Monitoring"  src="https://appdevs.net/_next/static/media/features.4c70dfc8.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px] ">Order and Shipping Management</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Easily manage order statuses, shipping methods, and vendor shipments through a unified admin interface.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminsFeatures10;
