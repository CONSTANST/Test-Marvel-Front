import React from "react";

const ComicsList = ({comics}) => {
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {comics
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((comic) => (
          <div key={comic._id} style={{flex: "20%", margin: "0 50px 50px 0"}}>
            <h2 style={{color: "lightgray"}}>{comic.title}</h2>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              style={{
                width: "400px",
                height: "200px",
                objectFit: "contain",
              }}
            />
            <p key={comic._id} style={{color: "lightgray"}}>
              {comic.description}
            </p>
          </div>
        ))}
    </div>
  );
};
export default ComicsList;
