import {
  type FeatureItem,
  type StatItem,
} from "@/components/landing/features-data";

export function FeatureStatCard({ stat }: { stat: StatItem }) {
  return (
    <div className="bg-card p-6 md:p-8 flex flex-col gap-2">
      <span className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
        {stat.value}
      </span>
      <span className="text-sm text-muted-foreground leading-relaxed">{stat.label}</span>
      <span className="text-xs text-muted-foreground/60 mt-1">{stat.company}</span>
    </div>
  );
}

export function FeaturesSectionHeading() {
  return (
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4 text-balance">
        왜 나인위닛인가요?
      </h2>
      <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
        마케팅 분석, 전략, 크리에이션을 지원합니다.
      </p>
    </div>
  );
}

export function FeatureHighlightCard({ feature }: { feature: FeatureItem }) {
  const Icon = feature.icon;

  return (
    <div className="group border border-border rounded-xl p-6 bg-card hover:border-primary/40 transition-all">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
        <Icon className="text-primary" size={20} />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
    </div>
  );
}
