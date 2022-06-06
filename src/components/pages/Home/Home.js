import React from 'react';

const Home = () => {
    return (
      <div className="text-[red]">
        this is home
        <p>kicu ekta</p>
        <button class="btn btn-secondary">Button</button>
        {/* <!-- The button to open modal --> */}
<label for="my-modal-4" class="btn modal-button">open modal</label>

{/* <!-- Put this part before  */}
{/* </body> tag --> */}
<input type="checkbox" id="my-modal-4" class="modal-toggle" />
<label for="my-modal-4" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </label>
</label>
      </div>
    );
};

export default Home;    