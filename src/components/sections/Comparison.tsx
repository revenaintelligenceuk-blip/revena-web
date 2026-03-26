'use client';

import React from 'react';
import { motion } from 'motion/react';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';
import Section from '@/components/Section';

const Comparison = () => {
  const points = [
    {
      topic: "Lead Response",
      traditional: "24-48 Business Hours",
      rvna: "Sub-5 Minutes, 24/7/365",
      icon: "Clock"
    },
    {
      topic: "System Intelligence",
      traditional: "Basic Zapier Connections",
      rvna: "Custom-Coded AI Ecosystems",
      icon: "Cpu"
    },
    {
      topic: "Data Fidelity",
      traditional: "Manual Entry & Overlap",
      rvna: "Autonomous Synchronisation",
      icon: "Binary"
    },
    {
      topic: "Scalability",
      traditional: "Requires Linear Headcount",
      rvna: "Exponential System Capacity",
      icon: "TrendingUp"
    }
  ];

  return (
    <Section id="comparison" muted>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/30">The Market Gap</span>
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-navy leading-tight">
              Why Traditional <br />
              <span className="italic font-normal text-gradient">Agencies Fail.</span>
            </h2>
            <p className="text-xl text-grey-body/80 leading-relaxed font-sans font-light max-w-xl">
              Most agencies focus on lead generation (the top of the funnel) while ignoring the operational leakage that kills conversion at the bottom.
            </p>
          </div>

          <p className="text-sm text-grey-body/60 leading-[2] font-sans max-w-md italic border-l-2 border-copper/20 pl-8">
            "They spend thousands on ads only to send traffic into a broken process where calls are missed and emails are ignored."
          </p>
        </div>

        <div className="bg-white shadow-premium border border-navy/5 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-navy/5">
                <th className="p-8 text-[10px] uppercase tracking-[0.3em] text-navy/40 font-bold">Metric / Service</th>
                <th className="p-8 text-[10px] uppercase tracking-[0.3em] text-navy/40 font-bold">Traditional</th>
                <th className="p-8 text-[10px] uppercase tracking-[0.3em] text-copper font-bold bg-navy/[0.02]">RVNA Standard</th>
              </tr>
            </thead>
            <tbody>
              {points.map((point, i) => (
                <tr key={i} className="group border-b border-navy/5 last:border-0">
                  <td className="p-8">
                    <span className="text-sm font-sans font-bold text-navy">{point.topic}</span>
                  </td>
                  <td className="p-8">
                    <div className="flex items-center space-x-3 text-navy/30">
                      <XCircle className="w-4 h-4" />
                      <span className="text-xs font-medium">{point.traditional}</span>
                    </div>
                  </td>
                  <td className="p-8 bg-navy/[0.02]">
                    <div className="flex items-center space-x-3 text-navy">
                      <CheckCircle className="w-4 h-4 text-copper" />
                      <span className="text-xs font-bold">{point.rvna}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export default Comparison;
