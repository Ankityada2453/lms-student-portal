import OverviewCard from '../components/OverviewCard';


export default function Dashboard() {
return (
<div className="page">
<h2>Dashboard</h2>
<div className="card-grid">
<OverviewCard title="Courses" value="5" />
<OverviewCard title="Assignments" value="12" />
<OverviewCard title="Completed" value="8" />
</div>
</div>
);
}