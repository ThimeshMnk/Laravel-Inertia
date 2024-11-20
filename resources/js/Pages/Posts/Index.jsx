/* eslint-disable prettier/prettier */
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ posts }) { // Destructure posts from props
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Posts
                </h2>
            }
        >
            <Head title="Posts">
                <meta name="description" content="Post Index" />
            </Head>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        {posts && posts.length > 0 ? (
                            posts.map((post) => (
                                <div
                                    className="p-6 text-gray-900 dark:text-gray-100"
                                    key={post.id}
                                >
                                    {post.body}
                                </div>
                            ))
                        ) : (
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                No posts available.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
