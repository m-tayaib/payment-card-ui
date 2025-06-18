 import mastercard from "../assets/Mastercard.svg"
 import visacard from "../assets/Visa.svg"
 import americanexpress from "../assets/American Express.svg"
 import discover from "../assets/Discover.svg"
 const cardsImage : string[] = [mastercard, visacard, americanexpress, discover]
 function Header() {
  return (
    <>
     <h1 className="text-2xl font-medium capitalize text-center">Credit Card Details</h1>
    {/* payments cards shows  */}
    <div className="flex justify-between items-center rounded-sm border-dashed border-[#d5d5d5] border-1 p-2 mt-4">
     <div><h3 className="text-sm font-bold capitalize">payment <br /> method</h3></div>

     {/* cards image show here */}

     <div className="flex gap-2 items-center">
      {cardsImage.map((card, index) => (
        <img className="w-[32px] h-[32px]" src={card} alt={`card-${index}`} key={index} />
      ))}
     </div>
     
    </div>
    </>
  )
}

export default Header