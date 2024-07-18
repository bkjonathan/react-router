const ContactInfoSection = ({ Icon, text }) => {
  return (
    <div className="flex items-center text-gray-600">
      <Icon />
      <div className="ml-4 text-md tracking-wide font-semibold w-40">{text}</div>
    </div>
  );
};

export default ContactInfoSection;
