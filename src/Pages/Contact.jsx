import React from "react";

// You can replace the icon URLs with your own or use react-icons
const contacts = [
  {
    label: "Email",
    value: "chhornvibol19@gmail.com",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
  },
  {
    label: "Phone",
    value: "+855 96 60 51 926",
    icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
  },
  {
    label: "GitHub",
    value: "github.com/vibol18",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  },
  {
    label: "GitLab",
    value: "gitlab.com/vibol18",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968854.png",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-full mx-auto px-4 py-12 bg-gray-900 text-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Contact Me</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg flex flex-col items-center hover:bg-red-500 transition-colors cursor-pointer"
          >
            <img
              src={contact.icon}
              alt={contact.label}
              className="w-5 h-5 mb-3"
            />
            <h3 className="font-semibold text-lg">{contact.label}</h3>
            <p className="text-gray-200 text-center">{contact.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
