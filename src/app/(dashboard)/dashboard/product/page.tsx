'use client';

import useFetchProduct from '@/hooks/Product/useFetchProduct';
import { useRouter } from 'next/navigation';
import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

interface DataProductRow {
  id: string;
  no: number;
  name: string;
  stock: number;
}

export default function ProductPage() {
  const { dataProduct } = useFetchProduct();
  const router = useRouter();

  const data = dataProduct
    ? dataProduct.map((item, index) => ({
        no: index + 1,
        id: item.id,
        name: item.name,
        stock: item.stock,
      }))
    : [];

  const columns: TableColumn<DataProductRow>[] = [
    {
      name: 'No',
      selector: (row) => row.no,
      width: '80px',
      sortable: false,
    },
    {
      name: 'Nama Kategori',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Stok',
      selector: (row) => row.stock,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className='flex gap-2 overflow-x-auto'>
          <button
            onClick={() => router.push(`/dashboard/category/edit/${row.id}`)}
            className='rounded-lg bg-blue-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-blue-600'
          >
            Edit
          </button>
          <button className='rounded-lg bg-red-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-red-600'>
            Delete
          </button>
        </div>
      ),
      ignoreRowClick: true,
    },
  ];
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h3 className='text-2xl font-bold text-gray-800'>List Produk</h3>
      <section className='mt-6'>
        <div className='mb-4'>
          <button
            onClick={() => router.push('/dashboard/category/add')}
            className='rounded-md bg-green-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-700'
          >
            Tambah Kategori
          </button>
        </div>
        <div className='rounded-lg bg-white p-4 shadow'>
          <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            noDataComponent={<p className='text-center text-sm text-black'>Data masih kosong</p>}
          />
        </div>
      </section>
    </div>
  );
}
