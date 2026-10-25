export default async function UserProfilePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-100 px-4 py-10">
            <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-xl shadow-pink-200/60">

                <div className="bg-pink-500 px-6 py-10 text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-pink-100 text-5xl shadow-md">
                        👤
                    </div>

                    <h1 className="mt-4 text-3xl font-bold text-white">
                        User Profile
                    </h1>

                    <p className="mt-2 text-sm text-pink-100">
                        Welcome to the profile page
                    </p>
                </div>

                <div className="px-6 py-8 sm:px-10">
                    <div className="rounded-2xl border border-pink-100 bg-pink-50 p-5">
                        <p className="text-sm font-medium uppercase tracking-wider text-pink-500">
                            User ID
                        </p>

                        <p className="mt-2 break-all text-lg font-semibold text-pink-950">
                            {id}
                        </p>
                    </div>

                    <div className="mt-6 flex items-start gap-3">
                        <span className="text-xl">✨</span>
                        <div>
                            <h2 className="font-semibold text-pink-900">
                                Your Profile Details
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500">
                                This page displays the profile associated
                                with the selected user ID.
                            </p>
                        </div>
                    </div>

                    <a
                        href="/profile"
                        className="mt-8 flex w-full items-center justify-center rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-200"
                    >
                        ← Back to My Profile
                    </a>
                </div>

                {/* Footer */}
                <div className="border-t border-pink-100 px-6 py-4 text-center">
                    <p className="text-xs text-pink-400">
                        Made with ♡
                    </p>
                </div>
            </div>
        </div>
    );
}