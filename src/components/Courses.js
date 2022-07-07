import React from 'react';

const courses = () => {
    return (
      <div className="">
        <div className="cards grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4   justify-between">
          {" "}
          <div class="card w-96 bg-base-100 shadow-xl m-3 mx-auto">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-3xl">Course Title varsity "B"</h2>
              <p>
                This part is discribe your course details. how we can learn and
                why we should buy it
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl m-3 mx-auto">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-3xl">Course Title varsity "B"</h2>
              <p>
                This part is discribe your course details. how we can learn and
                why we should buy it
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl m-3 mx-auto">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-3xl">Course Title varsity "B"</h2>
              <p>
                This part is discribe your course details. how we can learn and
                why we should buy it
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-5xl">
          under maintan <br />
          the developer is so lazy. <br />
          wait for the lazy developer
        </div>
      </div>
    );
};

export default courses;