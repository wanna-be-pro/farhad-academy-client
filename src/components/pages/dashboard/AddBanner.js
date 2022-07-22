import React from 'react';

const AddBanner = () => {
    return (
        <div>
            <form action="">
                <h1>This is banner</h1>
                <h1 className='font-bold text-2xl'>Select Your Image</h1>
              <div className='w-1/3 mx-auto border border-4 h-10'>
              <input type="file"  name="img" id="" />
              </div>
            </form>
            <div class="overflow-x-auto">
  <table class="table mt-7 table-zebra w-2/3 mx-auto">
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td><img></img></td>
        <td></td>
        <td><button className='btn btn-sm btn-outline text-red-700 border-red-700 hover:bg-red-700'>Delete</button></td>
      </tr>
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AddBanner;