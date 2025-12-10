export default function CoursesPage({ params }: { params: { course: string } }) {
    return <div>Course : {params.course}</div>
}