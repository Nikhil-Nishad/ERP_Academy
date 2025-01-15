import React, { useState } from "react";

const CourseDetail = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className="bg-green-800 text-white py-10" id="course">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Course Details
        </h2>

        {/* Course Features */}
        <div className="bg-white text-green-800 p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-semibold mb-4">Course Features</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <strong>Duration:</strong> 3 Months
            </li>
            <li>
              <strong>Level:</strong> Beginner to Advanced
            </li>
            <li>
              <strong>Free First Chapter:</strong> Get started with no
              commitment!
            </li>
            <li>
              <strong>Mode:</strong> Self-paced with recorded sessions and live
              Q&A support
            </li>
          </ul>
        </div>

        {/* Course Syllabus */}
        <div
          className="bg-white text-green-800 p-6 rounded-lg shadow-lg mb-6"
          onClick={() => toggleSection("syllabus")}
        >
          <h3 className="text-2xl font-semibold cursor-pointer mb-4 flex items-center justify-between">
            Course Syllabus
            <span className="text-green-600">
              {activeSection === "syllabus" ? "▲" : "▼"}
            </span>
          </h3>
          {activeSection === "syllabus" && (
            <ul className="space-y-4 text-sm sm:text-base">
              <li>
                <strong>Month 1: Fundamentals of SAP MM</strong>
                <ul className="ml-4 list-disc">
                  <li>Introduction to SAP MM (FREE)</li>
                  <li>Overview of Material Management</li>
                  <li>Key Features of SAP MM Module</li>
                  <li>Navigation in SAP System</li>
                  <li>Master Data in SAP MM</li>
                  <li>Material Master</li>
                  <li>Vendor Master</li>
                  <li>Purchase Info Records</li>
                </ul>
              </li>
              <li>
                <strong>Month 2: Procurement Process</strong>
                <ul className="ml-4 list-disc">
                  <li>Procurement Basics</li>
                  <li>Purchase Requisition and Orders</li>
                  <li>Goods Receipt and Invoice Verification</li>
                  <li>Inventory Management</li>
                  <li>Stock Types and Movements</li>
                  <li>Reservations and Physical Inventory</li>
                </ul>
              </li>
              <li>
                <strong>Month 3: Advanced Concepts and Integration</strong>
                <ul className="ml-4 list-disc">
                  <li>Advanced Procurement</li>
                  <li>Subcontracting and Consignment Processes</li>
                  <li>External Service Management</li>
                  <li>Integration with Other Modules</li>
                  <li>Integration with FI and SD Modules</li>
                  <li>Reporting and Analytics in MM</li>
                </ul>
              </li>
            </ul>
          )}
        </div>

        {/* Learning Timeline */}
        <div
          className="bg-white text-green-800 p-6 rounded-lg shadow-lg mb-6"
          onClick={() => toggleSection("timeline")}
        >
          <h3 className="text-2xl font-semibold cursor-pointer mb-4 flex items-center justify-between">
            Learning Timeline
            <span className="text-green-600">
              {activeSection === "timeline" ? "▲" : "▼"}
            </span>
          </h3>
          {activeSection === "timeline" && (
            <ul className="space-y-2 list-disc ml-4 text-sm sm:text-base">
              <li>
                <strong>Week 1-4:</strong> SAP MM Basics and Master Data Setup
                (1st Chapter is FREE)
              </li>
              <li>
                <strong>Week 5-8:</strong> Procurement and Inventory Management
                Processes
              </li>
              <li>
                <strong>Week 9-12:</strong> Advanced Concepts, Real-World
                Scenarios, and Module Integration
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
