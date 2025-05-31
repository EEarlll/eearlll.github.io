export default function Contacts() {
  const email = "earleustacio@gmail.com";
  const mailtoLink = `mailto:${email}`;

  const handleSendMail = () => {
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full m-4 md:m-10">
        <h1 className="font-semibold text-2xl text-secondary mb-2">
          Contact Me
        </h1>
        <p className="text-text text-center mb-4 max-w-xl">
          For inquiries, collaborations, or any questions, feel free to reach
          out via email. I am also available on Discord for quick messages, but
          email is preferred for formal communication.
        </p>

        <p className="text-text mb-2">
          Email:{" "}
          <a href={mailtoLink} className="text-secondary underline break-all">
            {email}
          </a>
        </p>
        <p className="mb-2 text-text text-center">
          Click the button below to open your default mail application.
        </p>
        <button
          className="cursor-pointer p-3 bg-secondary text-text rounded-xl mt-2 hover:bg-secondary/80 transition"
          onClick={handleSendMail}
        >
          Send Email
        </button>
      </div>
    </>
  );
}
