import React from 'react'

function CartItem() {
  return (
    <div className="grid grid-cols-12 bg-slate-800 mb-4">
      <img
        className="col-span-3"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLUydmaIClsMAz0GqT2H2GsJVwCG3ZQP0_Q&s"
        alt=""
      />
      <div className="col-span-9 p-4">
        <h2 className="text-xl font-semibold">title</h2>
        <p>
          number <span>20</span>
        </p>
        <p>
          cost <span>${20}</span>
        </p>
        <div className="mt-2">
          <button className="px-4 py-2 bg-sky-500 rounded text-white">+</button>
          <span className="mx-4">3</span>
          <button className="px-4 py-2 bg-sky-500 rounded text-white">-</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem