import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", href);

    //detecting navigation(communicating to routes)
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
