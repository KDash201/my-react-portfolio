import React from "react";

function Projectlist({ work }) {
  function handleClick(link) {
    window.open(link, "_blank");
  }

  function renderWork() {
    if (work.id == null) {
      return (
        <div id="work-main-img">
          <div class={work.class}>
            <div classname="pic-label">
              <button
                className="btn btn-success btn-lg mb-3 mx-3"
                onClick={() => handleClick(work.url)}
              >
                {work.title}
              </button>
              <button
                className="btn btn-success btn-lg mb-3"
                onClick={() => handleClick(work.github)}
              >
                GitHub Repo
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="click-container">
          <div class={work.class} id={work.id}>
            <div classname="pic-label">
              <button
                className="btn btn-success mx-3"
                onClick={() => handleClick(work.url)}
              >
                {work.title}
              </button>
              <button
                className="btn btn-success"
                onClick={() => handleClick(work.github)}
              >
                GitHub Repo
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  return <>{renderWork()}</>;
}

export default Projectlist;
