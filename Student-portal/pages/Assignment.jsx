import assignments from '../data/assignments';


export default function Assignments() {
return (
<div className="page">
<h2>Assignments</h2>
{assignments.map(item => (
<div key={item.id} className="list-card">
<h4>{item.title}</h4>
<p>Due: {item.due}</p>
</div>
))}
</div>
);
}