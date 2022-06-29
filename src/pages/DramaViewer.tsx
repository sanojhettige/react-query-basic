import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query';
import { getDramaById } from '../api/drama';
import Drama from '../components/Drama';

const DramaViewer = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useQuery(['drama', id], () => id ? getDramaById(id) : null, { keepPreviousData: true });
    if (isLoading) {
        return <>Loading...</>;
    }
    if (isError) {
        return <>Error loading data!</>
    }
    return (
        <div>
            <Drama {...data} fullDetail />
        </div>
    )
}


export default DramaViewer;
