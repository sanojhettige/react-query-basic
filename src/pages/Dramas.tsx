import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getDramas } from '../api/drama';
import Spinner from '../components/Spinner';
import Drama, { DramaProps } from '../components/Drama';
const limit = 10;

const Dramas = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, isError } = useQuery(['dramas', page], () => getDramas(limit, ((page - 1) * limit)), { keepPreviousData: true });

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <>Error loading data!</>
    }
    return (
        <div>
            {data?.result.map((drama: DramaProps) => <Drama key={`drama-${drama._id}`} {...drama} />)}
            <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>Prev</button>
            <button onClick={() => setPage(page + 1)} disabled={page === data.totalPages}>Next</button>
        </div>
    )
}


export default Dramas;
