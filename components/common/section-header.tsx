import { LucideIcon } from "lucide-react";

export default function SectionHeader({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 mb-3">
        <Icon className="size-6 sm:size-10 text-primary" />
        <h2 className="text-xl sm:text-4xl font-extrabold">{title}</h2>
      </div>
      <div className="text-muted-foreground text-lg">{description}</div>
    </div>
  );
}
