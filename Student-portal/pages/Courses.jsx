import courses from '../data/course';


export default function Courses() {
return (
<div className="page">
<h2>My Courses</h2>
{courses.map(course => (
<div key={course.id} className="list-card">
<h4>{course.title}</h4>
<p>{course.instructor}</p>
</div>
))}
</div>
);
}