import { CheckCircle } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
}

export function FeatureHighlight({ title, description }: FeatureProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-corporate-lightGray flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
      <CheckCircle className="text-corporate-blue shrink-0 mt-1" size={24} />
      <div>
        <h3 className="font-medium text-corporate-darkest text-xl">{title}</h3>
        <p className="mt-2 text-corporate-medium">
          {description}
        </p>
      </div>
    </div>
  );
}
