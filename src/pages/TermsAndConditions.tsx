import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { 
  Ticket, Clock, UserCheck, XCircle, CloudRain, 
  AlertTriangle, Shield, Camera as CameraIcon, User, Lock 
} from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <PageHeader 
        title="Ticket Terms & Conditions" 
        subtitle="Important information about your AGNW Fest 2026 ticket purchase"
        gradientFrom="from-red-500"
        gradientTo="to-orange-600"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800 rounded-xl overflow-hidden">
          <div className="p-6">
            <p className="text-gray-300 mb-6 text-center">
              By purchasing or using a ticket for AGNW Fest 2026, you agree to the following terms and conditions:
            </p>
            
            <div className="space-y-6">
              {/* General Admission */}
              <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                <input type="checkbox" className="peer" defaultChecked />
                <div className="collapse-title text-xl font-medium flex items-center">
                  <Ticket className="w-5 h-5 mr-2 text-red-400" />
                  General Admission
                </div>
                <div className="collapse-content text-gray-300">
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>All tickets are non-refundable and non-transferable, except in the event of cancellation.</li>
                    <li>Only tickets purchased via official outlets will be accepted at the gate.</li>
                    <li>Lost, stolen, or damaged tickets will not be replaced.</li>
                  </ul>
                </div>
              </div>

              {/* Entry Policy */}
              <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-400" />
                  Entry Policy
                </div>
                <div className="collapse-content text-gray-300">
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Entry is permitted from 1:00 PM. Final entry at 8:30 PM. No re-entry after exit.</li>
                    <li>All attendees will be subject to ID checks and bag searches.</li>
                    <li>Entry may be refused to anyone under the influence of drugs or alcohol, or behaving antisocially.</li>
                  </ul>
                </div>
              </div>

              {/* Age Restrictions */}
              <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium flex items-center">
                  <UserCheck className="w-5 h-5 mr-2 text-purple-400" />
                  Age Restrictions
                </div>
                <div className="collapse-content text-gray-300">
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>This is a 16+ event.</li>
                    <li>Attendees under 18 must be accompanied by a responsible adult (aged 21+).</li>
                    <li>Valid photographic ID may be required at the entrance (passport, driver's license, Young Scot card, etc.).</li>
                  </ul>
                </div>
              </div>

              {/* Prohibited Items */}
              <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium flex items-center">
                  <XCircle className="w-5 h-5 mr-2 text-yellow-400" />
                  Prohibited Items
                </div>
                <div className="collapse-content text-gray-300">
                  <p className="mb-2">Items not permitted include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Glass containers</li>
                    <li>Alcohol or drugs</li>
                    <li>Flares or weapons</li>
                    <li>Large bags (over A4 size)</li>
                    <li>Professional cameras (detachable lenses)</li>
                    <li>Food & drink (except sealed water bottles up to 500ml)</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-400">Confiscated items will not be returned.</p>
                </div>
              </div>

              {/* Weather Policy */}
              <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium flex items-center">
                  <CloudRain className="w-5 h-5 mr-2 text-blue-300" />
                  Weather Policy
                </div>
                <div className="collapse-content text-gray-300">
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>The event will go ahead rain or shine.</li>
                    <li>No refunds will be issued due to inclement weather unless the event is cancelled in full.</li>
                  </ul>
                </div>
              </div>

              {/* Cancellations & Changes */}
              <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                  Cancellations & Changes
                </div>
                <div className="collapse-content text-gray-300">
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>In the unlikely event of cancellation, ticket holders will be offered a refund or transfer as per the official refund policy.</li>
                    <li>Line-up, schedule, and performance times are subject to change and do not warrant a refund.</li>
                  </ul>
                </div>
              </div>

              {/* Health & Safety */}
              <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  Health & Safety
                </div>
                <div className="collapse-content text-gray-300">
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>You attend AGNW Fest at your own risk.</li>
                    <li>Follow instructions from event staff and signage at all times.</li>
                    <li>AGNW Fest reserves the right to refuse admission or eject any person behaving inappropriately or posing a safety risk.</li>
                  </ul>
                </div>
              </div>

              {/* Photography & Media */}
              <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium flex items-center">
                  <CameraIcon className="w-5 h-5 mr-2 text-pink-400" />
                  Photography & Media
                </div>
                <div className="collapse-content text-gray-300">
                  <p>Ticket holders consent to being photographed, filmed, or recorded as part of the event, and such media may be used for promotional purposes.</p>
                </div>
              </div>

              {/* Accessibility */}
              <div className="collapse collapse-plus bg-gray-700 rounded-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium flex items-center">
                  <User className="w-5 h-5 mr-2 text-purple-400" />
                  Accessibility
                </div>
                <div className="collapse-content text-gray-300">
                  <p>If you have access needs, please contact us in advance to make appropriate arrangements. Accessibility passes and facilities are available.</p>
                </div>
              </div>

              {/* Agreement */}
              <div className="collapse collapse-plus bg-gray-700 rounded-lg border border-amber-500/30">
                <input type="checkbox" className="peer" defaultChecked />
                <div className="collapse-title text-xl font-medium flex items-center text-amber-400">
                  <Lock className="w-5 h-5 mr-2" />
                  Agreement
                </div>
                <div className="collapse-content text-gray-300">
                  <p>By attending AGNW Fest 2026, you agree to comply with all event rules, policies, and staff instructions.</p>
                  <p className="mt-2 text-sm text-amber-300">Last updated: July 4, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
