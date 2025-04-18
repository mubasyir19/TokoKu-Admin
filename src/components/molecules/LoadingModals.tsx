export default function LoadingModals() {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-1/2 rounded-lg bg-white p-6 md:w-1/4'>
        <div className='flex items-center justify-center'>
          <p className='mt-2 text-center text-3xl font-semibold text-black'>Loading ...</p>
        </div>
      </div>
    </div>
  );
}
