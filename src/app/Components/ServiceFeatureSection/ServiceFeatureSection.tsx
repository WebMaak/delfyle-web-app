import { FC } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  description: string;
  items: FeatureItem[];
  subHeading?: string;      // made optional
  subDescription?: string;  // made optional
}

const FeatureSection: FC<FeatureSectionProps> = ({
  title,
  description,
  items,
  subHeading,
  subDescription,
}) => {
  return (
    <section className="relative py-10 px-6 lg:px-20 bg-white text-gray-900">
      {/* Top Heading & Desc */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-[3.5rem] font-bold mb-4 bg-clip-text text-[#1a1a1a]">
          {title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Grid of Items */}
      <div className="columns-1 md:columns-2 gap-10 max-w-7xl mx-auto mb-16 space-y-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="break-inside-avoid fade-up bg-white rounded-2xl p-6 shadow-md border border-gray-200 animate-fade-up"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <div className="flex gap-4 mb-4">
              {/* Icon pinned to top */}
              <div className="p-3 rounded-xl bg-[linear-gradient(90deg,rgb(121,0,70)_0%,rgb(229,0,120)_100%)] self-start">
                <item.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title vertically centered */}
              <h3 className="text-xl font-semibold flex items-center">
                {item.title}
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Subheading & Desc (optional) */}
      {(subHeading || subDescription) && (
        <div className="max-w-3xl mx-auto text-center">
          {subHeading && (
            <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-[linear-gradient(90deg,rgb(121,0,70)_0%,rgb(229,0,120)_100%)]">
              {subHeading}
            </h3>
          )}
          {subDescription && (
            <p className="text-base text-gray-600 leading-relaxed">
              {subDescription}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default FeatureSection;
