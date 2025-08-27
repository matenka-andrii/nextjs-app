// Components
import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';

export default async function Home({ searchParams }: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query = ( await searchParams ).query;

    /* Html */
    const getPosts = () => {
        const posts = [{
            _id: 1,
            _createdAt: new Date(),
            views: 55,
            author: { _id: 1, name: 'Andrii' },
            description: 'This is a description',
            image: 'https://cdn.pixabay.com/photo/2022/01/07/10/38/playstation-controller-6921619_1280.jpg',
            category: 'Playstation',
            title: 'We Love Playstation',
        }];

        if (posts?.length > 0) {
            return posts.map((post: StartupCardType) => (
                <StartupCard key={post?._id} post={post} />
            ));
        }

        return <p className='no-result'>No startups found</p>;
    };

    return (
        <>
            <section className='green_container pattern'>
                <h1 className='heading'>
                    Pitch Your Startup, <br />
                    Connect With Entrepreneurs
                </h1>
                <p className='sub-heading !max-w-3xl'>
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
                </p>
                <SearchForm query={query}/>
            </section>
            <section className='section_container'>
                <p className="text-30-semibold">
                    { query ? `Search results for "${query}"` : 'All Startups' }
                </p>
                
                <ul className="mt-7 card_grid">
                    { getPosts() }
                </ul>
            </section>
        </>
    );
}
