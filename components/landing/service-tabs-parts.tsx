import { cn } from "@/lib/utils";
import {
  type ServiceTab,
  serviceAnimationStyle,
} from "@/components/landing/service-tabs-data";

export function ServiceTabsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-surface-foreground text-balance">
        나인위닛 서비스
      </h2>
      <a
        href="#contact"
        className="inline-flex items-center justify-center border border-primary/30 text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary hover:text-foreground transition-all self-start"
      >
        전체 서비스 보기
      </a>
    </div>
  );
}

type ServiceTabButtonProps = {
  isActive: boolean;
  isLast: boolean;
  onClick: () => void;
  service: ServiceTab;
};

export function ServiceTabButton({
  isActive,
  isLast,
  onClick,
  service,
}: ServiceTabButtonProps) {
  const Icon = service.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2.5 px-4 py-5 text-sm font-medium transition-all cursor-pointer",
        !isLast && "border-r border-surface-border",
        isActive
          ? "bg-surface-border/50 font-semibold text-surface-foreground"
          : "bg-white text-surface-muted hover:bg-surface/80",
      )}
      style={{
        borderTop: `3px solid ${isActive ? service.accent : "transparent"}`,
      }}
    >
      <Icon size={18} style={{ color: service.accent }} />
      {service.label}
    </button>
  );
}

function ServiceFeatureList({ service }: { service: ServiceTab }) {
  return (
    <ul className="flex flex-col gap-4">
      {service.features.map((feature, index) => (
        <li
          key={`${service.id}-${feature}`}
          className="flex items-center gap-3.5 text-surface-foreground text-[15px] animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={serviceAnimationStyle(240 + index * 70)}
        >
          <span className="text-surface-foreground/60">○</span>
          {feature}
        </li>
      ))}
    </ul>
  );
}

function ServiceVisual({ service }: { service: ServiceTab }) {
  return (
    <div
      className="flex-[1.2] min-h-[300px] md:min-h-0 flex items-center justify-center relative overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-500"
      style={{
        background: service.gradient,
        ...serviceAnimationStyle(180),
      }}
    >
      <div className="bg-white/80 backdrop-blur-xl w-[80%] h-[70%] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-4">
        <div className="w-[40%] h-5 rounded bg-surface-border" />
        <div className="w-full h-14 rounded-lg bg-white shadow-sm" />
        <div className="w-full h-14 rounded-lg bg-white shadow-sm" />
        <div className="w-[70%] h-14 rounded-lg bg-white shadow-sm" />
      </div>
    </div>
  );
}

export function ServiceTabContent({ service }: { service: ServiceTab }) {
  const ActiveIcon = service.icon;

  return (
    <div key={service.id} className="flex flex-col md:flex-row animate-in fade-in duration-400">
      <div className="flex-1 p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-dashed border-surface-border">
        <div
          className="inline-flex items-center gap-2 text-sm font-semibold text-surface-foreground mb-6 pb-5 border-b border-dashed border-surface-border animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={serviceAnimationStyle(0)}
        >
          <ActiveIcon size={16} style={{ color: service.accent }} />
          {service.englishLabel}
        </div>

        <h3
          className="text-3xl md:text-4xl font-medium leading-tight tracking-tight text-surface-foreground mb-5 whitespace-pre-line animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={serviceAnimationStyle(80)}
        >
          {service.title}
        </h3>

        <p
          className="text-base text-surface-muted leading-relaxed mb-8 font-serif animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={serviceAnimationStyle(160)}
        >
          {service.description}
        </p>

        <ServiceFeatureList service={service} />
      </div>

      <ServiceVisual service={service} />
    </div>
  );
}
