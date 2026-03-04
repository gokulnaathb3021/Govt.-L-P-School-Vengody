export default function StatsCard({
  approved,
  pending,
  rejected,
}: {
  approved: number;
  pending: number;
  rejected: number;
}) {
  const stats = [
    {
      label: "Total",
      value: approved + pending + rejected,
      color: "bg-primary/10",
    },
    {
      label: "Pending",
      value: pending,
      color: "bg-yellow-500/10",
    },
    {
      label: "Approved",
      value: approved,
      color: "bg-green-500/10",
    },
    {
      label: "Rejected",
      value: rejected,
      color: "bg-red-500/10",
    },
  ];
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
      {stats.map((stat) => (
        <div key={stat.label} className={`status-badge-card ${stat.color}`}>
          <p>{stat.label}</p>
          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
