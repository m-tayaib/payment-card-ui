import { useState } from "react";
interface formType{
  cardName: string;
  cardNumber: string;
  cardMonth: string;
  cardYear: string;
  cardCvv: string;
} 
function PaymentFrom() {
 const [formData , setFormData] = useState<formType>({
  cardName: "",
  cardNumber: "",
  cardMonth: "",
  cardYear: "",
  cardCvv: "",
 });
  const [btnLoading , setBtnLoading] = useState<boolean>(false);
  const [error , setError] = useState<string>("");
 

  // onchange handle value 
  const onChanngeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({...formData, [name]: value});
   }

   // onsubmit handle value 
   const onSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
   if(formData.cardName === "" || formData.cardNumber === "" || formData.cardMonth === "" || formData.cardYear === "" || formData.cardCvv === ""){
    setError("Please fill all the fields");
    return;
   }
  
   setBtnLoading(true);

   try {
     // Simulate API call with timeout
     await new Promise(resolve => setTimeout(resolve, 1500));
     console.log("Payment processed successfully!" , formData);
     alert("Payment processed successfully!");
     setFormData({
      cardName: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cardCvv: "",
     });
     setError("");
   } catch (error) {
     console.error("Payment failed:", error);
     setError("Payment failed. Please try again.");
   } finally {
     setBtnLoading(false);
   }
   }

  return (
    <div className="mt-4">
      <form action="submit">
        {/* card number input  */}
        <label className="block font-medium font-inter text-sm text-black capitalize" htmlFor="Name-on-card">Name on card</label>
        <input name="cardName" onChange={onChanngeHandler} className="w-full border border-gray-500 rounded-sm mt-2 p-2 outline-none" type="text" placeholder="Meet Petal" />

        {/* card number  input */}
        <label className="block font-medium font-inter mt-2 text-sm capitalize text-black" htmlFor="Name-on-card">card number</label>
        <input name="cardNumber" onChange={onChanngeHandler} className="w-full border border-gray-500 rounded-sm mt-2 p-2 outline-none" type="text" placeholder="0000 0000 0000 0000" />

        {/* card expirstion  */}
        <label className="block font-medium font-inter mt-2 text-sm capitalize text-black" htmlFor="Name-on-card">card expirstion</label>
        <div className="w-full flex justify-between  items-center">
          <input name="cardMonth" onChange={onChanngeHandler} className="mt-2 w-[48%] border border-gray-500 rounded-sm p-2 outline-none" type="text" placeholder="Month" maxLength={2} />
          <input name="cardYear" onChange={onChanngeHandler} className="mt-2 w-[48%] border border-gray-500 rounded-sm p-2 outline-none" type="text" placeholder="Year" maxLength={4} />
        </div>

        {/* card cvv  */}
        <label className="block font-medium font-inter mt-2 text-sm capitalize text-black" htmlFor="Name-on-card">Card security code</label>
        <input name="cardCvv" onChange={onChanngeHandler} className="w-full border border-gray-500 rounded-sm mt-2 p-2 outline-none" type="text" placeholder="Code"  maxLength={4}/>

        {/* submit button  */}
        <button disabled={btnLoading} onClick={onSubmitHandler} className={`w-full mt-4 bg-black  cursor-pointer hover:scale-105 transition-all duration-150 ease-linear text-white rounded-sm   p-2 outline-none ${btnLoading && "opacity-50 cursor-not-allowed"}`}>{btnLoading ? "Loading..." : "Continue"}</button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  )
}

export default PaymentFrom