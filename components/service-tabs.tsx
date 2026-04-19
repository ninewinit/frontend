"use client";

import { useState } from "react";
import {
  services,
} from "@/components/landing/service-tabs-data";
import {
  ServiceTabButton,
  ServiceTabContent,
  ServiceTabsHeader,
} from "@/components/landing/service-tabs-parts";

export function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService =
    services.find((service) => service.id === activeTab) ?? services[0];

  return (
    <section
      id="services"
      className="bg-surface py-20 md:py-28 px-6 md:px-[10%]"
    >
      <ServiceTabsHeader />

      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-surface-border bg-white rounded-t overflow-hidden">
          {services.map((service, index) => {
            return (
              <ServiceTabButton
                key={service.id}
                service={service}
                isActive={service.id === activeTab}
                isLast={index === services.length - 1}
                onClick={() => setActiveTab(service.id)}
              />
            );
          })}
        </div>

        <div className="border border-surface-border border-t-0 bg-white rounded-b min-h-[480px]">
          <ServiceTabContent service={activeService} />
        </div>
      </div>
    </section>
  );
}
