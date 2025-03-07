import LocationSVG from "../components/icons/LocationSVG.jsx";
import PhoneSVG from "../components/icons/PhoneSVG.jsx";
import EmailSVG from "../components/icons/EmailSVG.jsx";
import ContactInfoSection from "../components/Contact/ContactInfoSection.jsx";

const Contact = () => {
  const formInputClass =
    "w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none";

  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">Get in touch:</h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              <ContactInfoSection Icon={LocationSVG} text="Acme Inc, Street, State, Postal Code" />
              <ContactInfoSection Icon={PhoneSVG} text="+44 1234567890" />
              <ContactInfoSection Icon={EmailSVG} text="info@acme.org" />
            </div>

            <form className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input type="name" name="name" id="name" placeholder="Full Name" className={formInputClass} />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input type="email" name="email" id="email" placeholder="Email" className={`${formInputClass} mt-2`} />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className={`${formInputClass} mt-2`}
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
