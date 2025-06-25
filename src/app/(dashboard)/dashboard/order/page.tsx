'use client';

import BadgeStatus from '@/components/atoms/BadgeStatus';
import useFetchOrder from '@/hooks/Order/useFetchOrder';
import { useRouter } from 'next/navigation';
import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

interface DataOrderRow {
  id: string;
  no: number;
  customer: string;
  address: string;
  status: string;
  userId: string;
}

export default function OrderPage() {
  const { dataOrder } = useFetchOrder();
  const router = useRouter();

  const data = dataOrder
    ? dataOrder.map((item, index) => ({
        no: index + 1,
        id: item.id,
        customer: item.user.name,
        address: item.address,
        status: item.status,
        userId: item.userId,
      }))
    : [];

  const columns: TableColumn<DataOrderRow>[] = [
    {
      name: 'No',
      selector: (row) => row.no,
      width: '80px',
      sortable: false,
    },
    {
      name: 'Pemesan',
      selector: (row) => row.customer,
      sortable: true,
    },
    {
      name: 'Alamat Kirim',
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      cell: (row) => <BadgeStatus status={row.status} />,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className='flex flex-col md:flex-row gap-2'>
          <button
            onClick={() => router.push(`/dashboard/order/${row.userId}/${row.id}`)}
            className='rounded-lg bg-blue-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-blue-600'
          >
            Detail Order
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
      <h3 className='text-2xl font-bold text-gray-800'>Pesanan</h3>
      <section className='mt-6'>
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
