import React from "react";

const buttonsMap = {
  reddit_campaing: {
    icon: "fab fa-reddit-alien",
    legend: "Reddit Campaign Thread"
  },
  reddit_launch: {
    icon: "fab fa-reddit-alien",
    legend: "Reddit Launch Thread"
  },
  reddit_recovery: {
    icon: "fab fa-reddit-alien",
    legend: "Reddit Recovery Thread"
  },
  reddit_media: {
    icon: "fab fa-reddit-alien",
    legend: "Reddit Media Thread"
  },
  presskit: {
    icon: "fas fa-file-pdf",
    legend: "Press Kit"
  },
  article_link: {
    icon: "fas fa-newspaper",
    legend: "Web Article"
  },
  wikipedia: {
    icon: "fab fa-wikipedia-w",
    legend: "Wikipedia Article"
  },
  video_link: {
    icon: "fab fa-youtube",
    legend: "YouTube Video"
  }
};

const LaunchLinksCard = ({ links }) => {
  let buttons = [];
  for (let link in links) {
    !!buttonsMap[link] &&
      buttons.push({
        url: links[link],
        ...buttonsMap[link]
      });
  }
  return (
    <div>
      <ul>
        {buttons.map(button => (
          <li>
            <a className="button is-white" href={button.url} style={{ marginBottom: "1rem" }}>
              <span className="icon">
                <i className={button.icon} />
              </span>
              <span>{button.legend}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LaunchLinksCard;
