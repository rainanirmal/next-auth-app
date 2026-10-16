export default async function UserProfilePage({params}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <div className="flex flex-col justify-center text-center min-h-screen py-2">
            <h1>Profile page</h1>
            <p className="text-4xl">Profile : {id}</p>
        </div>
    )
}