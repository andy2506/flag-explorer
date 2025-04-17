'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import API_BASE_URL from '@/config/api';
import Header from '@/components/Header';
import Loader from '@/components/Spinner';

type CountryDetails = {
    name: string;
    flag: string;
    capital: string;
    population: number;
};

export default function CountryDetail() {
    const { name } = useParams();
    const [country, setCountry] = useState<CountryDetails | null>(null);
    const [loading, setLoading] = useState(true);

    //fetch the details of the selected country and set the data that is returned
    useEffect(() => {
        if (!name) return;
        fetch(`${API_BASE_URL}/countries/${name}`)
        .then(res => res.json())
        .then(data => {
            setCountry(data);
            setLoading(false);
        });
    }, [name]);

    if (loading || !country) {
        return ( <Loader />);
    }

    return (
        <main className="p-4 max-w-6xl mx-auto">

            <Header />

            <Link href="/" className="inline-block mt-4 text-blue-600 hover:underline">
                Back to Home
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-white rounded-lg shadow p-6">
                <div className="flex-1 w-full max-w-md">
                    <img src={country.flag} alt={country.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                </div>
                <div className="flex-1 w-full">
                    <h2 className="text-2xl font-bold mb-2">{country.name}</h2>
                    <p><strong>Capital:</strong> {country.capital || 'N/A'}</p>
                    <p><strong>Population:</strong> {country.population.toLocaleString() || 'N/A'}</p>
                </div>
            </div>
        </main>
    );
}