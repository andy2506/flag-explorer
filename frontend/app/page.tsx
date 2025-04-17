'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import API_BASE_URL from '@/config/api';
import Header from '@/components/Header';
import Loader from '@/components/Spinner';

type Country = {
  name: string;
  flag: string;
};

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  //fetch the countries and set the returned results
  useEffect(() => {
    fetch(`${API_BASE_URL}/countries`)
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-4 max-w-6xl mx-auto">
      
      <Header />

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {countries.map((country, idx) => (
            <Link key={idx} href={`/country/${encodeURIComponent(country.name)}`}>
              <div className="bg-white rounded-lg shadow hover:shadow-md cursor-pointer overflow-hidden">
                <img src={country.flag} alt={country.name} className="w-full h-24 object-cover rounded-t-md" />
                <p className="p-3 text-center font-medium ">{country.name}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
