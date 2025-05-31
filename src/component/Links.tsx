import {
  DiscordSvg,
  FacebookSvg,
  GithubSvg,
  LinkedInSvg,
  SteamSvg,
} from "./IconSvg";

export default function Links() {
  const socialLinks = [
    { label: "Github", icon: <GithubSvg />, url: "https://github.com/EEarlll" },
    { label: "Facebook", icon: <FacebookSvg />, url: "https://www.facebook.com/earlvin.eustacio" },
    { label: "LinkedIn", icon: <LinkedInSvg />, url: "https://www.linkedin.com/in/earl-eustacio" },
    { label: "Discord", icon: <DiscordSvg />, url: "https://discord.com/users/349837652830191618" },
    { label: "Steam", icon: <SteamSvg />, url: "https://steamcommunity.com/id/eearlll/" },
  ];

  return (
    <div className="flex flex-row flex-wrap items-center justify-center h-full p-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center m-4 p-4 rounded-lg transition hover:scale-110 duration-200"
        >
          <div className="w-16 h-16 mb-2">{link.icon}</div>
          <span className="text-lg font-semibold text-text">{link.label}</span>
        </a>
      ))}
    </div>
  );
}
