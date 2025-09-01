// Components
import SearchForm from '@/components/SearchForm';
import StartupCard, { StartupCardType } from '@/components/StartupCard';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { auth } from '../../../auth';

export default async function Home({ searchParams }: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query = ( await searchParams ).query;
    const params = { search: query || null };
    const session = await auth();

    const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

    /* Html */
    const getPosts = () => {
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

            <SanityLive/>
        </>
    );
}
