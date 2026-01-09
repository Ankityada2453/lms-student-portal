export default function OverviewCard({ title, value }) {
return (
<div className="overview-card">
<h4>{title}</h4>
<p>{value}</p>
</div>
);
}