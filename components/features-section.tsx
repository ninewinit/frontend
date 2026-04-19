import {
  featureHighlights,
  featureStats,
} from "@/components/landing/features-data";
import {
  FeatureHighlightCard,
  FeaturesSectionHeading,
  FeatureStatCard,
} from "@/components/landing/features-parts";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-20 md:py-28 px-6 md:px-[10%]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-20 bg-border rounded-lg overflow-hidden">
        {featureStats.map((stat) => (
          <FeatureStatCard key={stat.label} stat={stat} />
        ))}
      </div>

      <FeaturesSectionHeading />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureHighlights.map((feature) => (
          <FeatureHighlightCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
}
