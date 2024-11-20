/* eslint-disable prettier/prettier */
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ posts }) {
    // Destructure posts from props
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
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800"></div>
                    {posts.data.map((post) => {
                        return (
                            
                            <div className="p-6 font-semibold" key={post.id}>
                            <h3 className=" text-gray-700 dark:text-gray-300">{post.user.name}</h3>
                            <p className="mt-1 text-gray-700 dark:text-gray-300">
                                {post.body}
                            </p>
                        </div>
                        );
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
