function PaymentFrom() {
  return (
    <div className="mt-4">
      <form action="submit">
        {/* card number input  */}
        <label className="block font-medium font-inter text-sm text-black capitalize" htmlFor="Name-on-card">Name on card</label>
        <input className="w-full border border-gray-500 rounded-sm mt-2 p-2 outline-none" type="text" placeholder="Meet Petal" />

        {/* card number  input */}
        <label className="block font-medium font-inter mt-2 text-sm capitalize text-black" htmlFor="Name-on-card">card number</label>
        <input className="w-full border border-gray-500 rounded-sm mt-2 p-2 outline-none" type="text" placeholder="0000 0000 0000 0000" />

        {/* card expirstion  */}
        <label className="block font-medium font-inter mt-2 text-sm capitalize text-black" htmlFor="Name-on-card">card expirstion</label>
        <div className="w-full flex justify-between  items-center">
          <input className="mt-2 w-[48%] border border-gray-500 rounded-sm p-2 outline-none" type="text" placeholder="Month" maxLength={2} />
          <input className="mt-2 w-[48%] border border-gray-500 rounded-sm p-2 outline-none" type="text" placeholder="Year" maxLength={4} />
        </div>

        {/* card cvv  */}
        <label className="block font-medium font-inter mt-2 text-sm capitalize text-black" htmlFor="Name-on-card">Card security code</label>
        <input className="w-full border border-gray-500 rounded-sm mt-2 p-2 outline-none" type="text" placeholder="Code" />

        {/* submit button  */}
        <button className="w-full mt-4 bg-black  cursor-pointer hover:scale-105 transition-all duration-150 ease-linear text-white rounded-sm   p-2 outline-none">Continue</button>
      </form>
    </div>
  )
}

export default PaymentFrom